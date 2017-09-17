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

describe('Testing HappyHour API Routes', () => {
  beforeEach(done => {
    db.migrate.rollback().then(() => {
      db.migrate.latest().then(() => {
        db.seed.run().then(() => {
          done();
        });
      });
    });
  });

  describe('GET /api/v1/locations/:id/happyhours', () => {
    it('should respond with a 200 status and the happy hours for a specific location', done => {
      chai
        .request(server)
        .get('/api/v1/locations/1/happyhours')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.should.include.keys('data');
          res.body.data.length.should.equal(3);
          res.body.data[0].should.include.keys(
            'id',
            'timeslot',
            'drink_specials',
            'food_specials',
            'menu_pictures',
            'location_id',
            'status_type_id'
          );
          done();
        });
    });

    it('should respond with a 200 status and an empty array if no happy hours exist', done => {
      chai
        .request(server)
        .get('/api/v1/locations/10/happyhours')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.should.include.keys('data');
          res.body.data.length.should.equal(0);
          done();
        });
    });
  });

  describe('POST /api/v1/happyhours', () => {
    it('should respond with a 201 status and the newly added happy hour', done => {
      chai
        .request(server)
        .post('/api/v1/happyhours')
        .send({
          timeslot: 'Mon, 1300-1800',
          drink_specials: 'Well drinks half off',
          food_specials: 'All appetizers buy one get one free',
          location_id: '4',
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
            'timeslot',
            'drink_specials',
            'food_specials',
            'menu_pictures',
            'location_id'
          );
          res.body.data.should.not.include.keys('token');
          done();
        });
    });

    it('should respond with a 422 status if required parameters are missing.', done => {
      chai
        .request(server)
        .post('/api/v1/happyhours')
        .send({
          drink_specials: 'Well drinks half off',
          food_specials: 'All appetizers buy one get one free',
          location_id: '4',
          token: JWT_ADMIN_TOKEN
        })
        .end((err, res) => {
          should.exist(err);
          res.status.should.equal(422);
          res.type.should.equal('application/json');
          res.body.should.include.keys('error');
          res.body.error.should.equal(
            'Missing required parameter of (timeslot).'
          );
          done();
        });
    });
  });

  describe('DELETE /api/v1/happyhours/:id', () => {
    it('should respond with a 200 status and delete the resource', done => {
      chai
        .request(server)
        .get('/api/v1/happyhours/1')
        .end((err, res) => {
          should.not.exist(err);
          res.should.have.status(200);
          chai
            .request(server)
            .delete(`/api/v1/happyhours/1`)
            .end((err1, res1) => {
              should.not.exist(err1);
              res1.should.have.status(200);
              res1.body.status.should.equal('success');
              res1.body.data.message.should.equal(
                'HappyHour with id (4) was deleted.'
              );
            });
          done();
        });
    });

    it.skip(
      'should respond with a 500 status message if a FK restraint exists',
      done => {
        chai
          .request(server)
          .delete(`/api/v1/cameras/1/${token}`)
          .end((err, res) => {
            should.exist(err);
            res.should.have.status(500);
            res.body.data.code.should.equal('23503');
            res.body.data.detail.should.equal(
              'Key (id)=(1) is still referenced from table "photos".'
            );
            res.body.data.constraint.should.equal('photos_camera_id_foreign');
            done();
          });
      }
    );
  });

  describe('PUT /api/happyhours/:id', () => {
    it('should respond with a 200 status and a single happy hour that was updated', done => {
      chai
        .request(server)
        .put('/api/v1/happyhours/1')
        .send({
          timeslot: 'mon:1200-1650',
          drink_specials: 'Draft beers $2.00 each',
          token: JWT_ADMIN_TOKEN
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.data[0].should.include.keys(
            'id',
            'timeslot',
            'drink_specials',
            'food_specials',
            'menu_pictures',
            'location_id'
          );
          res.body.data[0].id.should.equal(1);
          res.body.data[0].timeslot.should.equal('mon:1200-1650');
          res.body.data[0].drink_specials.should.equal(
            'Draft beers $2.00 each'
          );
          done();
        });
    });
  });
});
