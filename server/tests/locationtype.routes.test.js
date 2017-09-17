require('dotenv').config();

const chai = require('chai');
const should = chai.should();
const chaiHTTP = require('chai-http');
const server = require('../index.js');

const environment = process.env.NODE_ENV;
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
          res.body.data[0].should.include.keys('id', 'type');
          done();
        });
    });
  });
});
