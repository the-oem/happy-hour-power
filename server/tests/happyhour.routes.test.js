const chai = require('chai');

const should = chai.should();
const chaiHttp = require('chai-http');

const server = require('../index.js');

chai.use(chaiHttp);

describe('Testing HappyHour API Routes', () => {

  describe('GET /api', () => {
    it('should respond with a JSON response', (done) => {
      done();
    });
  });
});
