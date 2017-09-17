require('dotenv').config();

const chai = require('chai');
const should = chai.should();
const chaiHTTP = require('chai-http');
const server = require('../index.js');

const environment = process.env.NODE_ENV;
const JWT_ADMIN_TOKEN = process.env.ADMIN_TOKEN;
const JWT_NON_AMIN_TOKEN = process.env.NON_ADMIN_TOKEN;
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
    it('should respond with a 200 status and all locations', done => {
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

    it('should respond with a 200 status and all locations, filtered by a query param', done => {
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

    it('should respond with a 200 status and all locations, filtered by a query param with spaces', done => {
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

    it('should respond with a 200 status and an empty array if no filtered items are found', done => {
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

    it('should respond with a 500 status if a filter query param is misspelled', done => {
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

  describe('POST /api/v1/locations', () => {
    it('should respond with a 201 status and the newly added location', done => {
      chai
        .request(server)
        .post('/api/v1/locations')
        .send({
          name: 'My badass bar',
          latitude: '123.0034',
          longitude: '98.033',
          phone_number: '303-999-9999',
          website_url: 'http://www.google.com',
          google_maps_id: 123456,
          location_type_id: 2,
          token: JWT_ADMIN_TOKEN
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(201);
          res.type.should.equal('application/json');
          res.body.should.include.keys('data');
          res.body.data.length.should.equal(1);
          res.body.data[0].should.include.keys(
            'id',
            'name',
            'latitude',
            'longitude',
            'phone_number',
            'website_url',
            'google_maps_id',
            'location_type_id'
          );
          res.body.data.should.not.include.keys('token');
          done();
        });
    });

    it('should respond with a 422 status if required parameters are missing.', done => {
      chai
        .request(server)
        .post('/api/v1/locations')
        .send({
          latitude: '123.0034',
          longitude: '98.033',
          phone_number: '303-999-9999',
          website_url: 'http://www.google.com',
          google_maps_id: 123456,
          location_type_id: 2,
          token: JWT_ADMIN_TOKEN
        })
        .end((err, res) => {
          should.exist(err);
          res.status.should.equal(422);
          res.type.should.equal('application/json');
          res.body.should.include.keys('error');
          res.body.error.should.equal('Missing required parameter (name).');
          done();
        });
    });
  });
});
