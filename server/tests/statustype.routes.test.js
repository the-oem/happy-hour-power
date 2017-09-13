require('dotenv').config();

const chai = require('chai');
const should = chai.should();
const chaiHTTP = require('chai-http');
const server = require('../index.js');

const environment = process.env.NODE_ENV;
const configuration = require('../../knexfile.js')[environment];
const db = require('knex')(configuration);

chai.use(chaiHTTP);

describe('Testing StatusType API Routes', () => {
  beforeEach(done => {
    db.migrate.rollback().then(() => {
      db.migrate.latest().then(() => {
        db.seed.run().then(() => {
          done();
        });
      });
    });
  });

  describe('GET /api/v1/statustype', () => {
    it('does a thing', done => {
      done();
    });
  });
});
