require('dotenv').config();

const chai = require('chai');
const should = chai.should();
const chaiHTTP = require('chai-http');
const server = require('../index.js');

const environment = process.env.NODE_ENV;
const JWT_ADMIN_TOKEN = process.env.ADMIN_TOKEN;
const configuration = require('../../knexfile.js')[environment];
const db = require('knex')(configuration);

chai.use(chaiHTTP);

describe('Testing LocationType API Routes', () => {
  beforeEach(done => {
    db.migrate.rollback().then(() => {
      db.migrate.latest().then(() => {
        db.seed.run().then(() => {
          done();
        });
      });
    });
  });

  describe('GET /api/v1/locationtypes', () => {
    it('should respond with a 200 status and all location types', done => {
      chai
        .request(server)
        .get('/api/v1/locationtypes')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.data.length.should.equal(6);
          res.body.data[0].should.include.keys('id', 'type');
          done();
        });
    });
  });

  describe('DELETE /api/v1/locationtypes/:id', () => {
    it('should respond with a 200 status and delete the resource', done => {
      chai
        .request(server)
        .delete(`/api/v1/locationtypes/1`)
        .send({
          token: JWT_ADMIN_TOKEN
        })
        .end((err, res) => {
          should.not.exist(err);
          res.should.have.status(200);
          res.body.data.message.should.equal(
            'LocationType with id (1) was deleted.'
          );
          done();
        });
    });

    it('should respond with a 404 status and message if the item doesnt exist', done => {
      chai
        .request(server)
        .delete(`/api/v1/locationtypes/99`)
        .send({
          token: JWT_ADMIN_TOKEN
        })
        .end((err, res) => {
          should.exist(err);
          res.should.have.status(404);
          res.type.should.equal('application/json');
          res.body.data.message.should.equal(
            'LocationType with id (99) not found.'
          );
          done();
        });
    });
  });
});
