require('dotenv').config();

const chai = require('chai');
const should = chai.should();
const chaiHTTP = require('chai-http');
const server = require('../index.js');

const environment = process.env.NODE_ENV;
const configuration = require('../../knexfile.js')[environment];
const db = require('knex')(configuration);

chai.use(chaiHTTP);

describe('Testing Location API Routes', () => {
  beforeEach(done => {
    db.migrate.rollback().then(() => {
      db.migrate.latest().then(() => {
        db.seed.run().then(() => {
          done();
        });
      });
    });
  });

  describe('GET /api/v1/locations', () => {
    it('should respond with a 200 response and all locations', done => {
      chai
        .request(server)
        .get('/api/v1/locations')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.data[0].should.include.keys(
            'id',
            'name',
            'latitude',
            'longitude',
            'phone_number',
            'website_url',
            'google_maps_id',
            'created_at',
            'updated_at',
            'location_type_id'
          );
          done();
        });
    });

    it('should respond with a 200 response and all locations, filtered by a query param', done => {
      chai
        .request(server)
        .get('/api/v1/locations?name=Brothers')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.data.length.should.equal(1);
          res.body.data[0].should.include.keys(
            'id',
            'name',
            'latitude',
            'longitude',
            'phone_number',
            'website_url',
            'google_maps_id',
            'created_at',
            'updated_at',
            'location_type_id'
          );
          done();
        });
    });

    it('should respond with a 200 response and all locations, filtered by a query param with spaces', done => {
      chai
        .request(server)
        .get('/api/v1/locations?name=Giggling Grizzly')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.data.length.should.equal(1);
          res.body.data[0].should.include.keys(
            'id',
            'name',
            'latitude',
            'longitude',
            'phone_number',
            'website_url',
            'google_maps_id',
            'created_at',
            'updated_at',
            'location_type_id'
          );
          done();
        });
    });

    it('should respond with a 200 response and an empty array if no filtered items are found', done => {
      chai
        .request(server)
        .get('/api/v1/locations?name=Brotherss')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.data.length.should.equal(0);
          done();
        });
    });

    it('should respond with a 500 error if a filter query param is misspelled', done => {
      chai
        .request(server)
        .get('/api/v1/locations?nam=Brothers')
        .end((err, res) => {
          should.exist(err);
          res.status.should.equal(500);
          res.type.should.equal('application/json');
          res.body.error.severity.should.equal('ERROR');
          res.body.error.routine.should.equal('errorMissingColumn');
          done();
        });
    });
  });
});
