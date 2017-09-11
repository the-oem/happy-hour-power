require('dotenv').config();

const chai = require('chai');
const jwt = require('jsonwebtoken');

const should = chai.should();
const chaiHttp = require('chai-http');

const server = require('../index.js');

chai.use(chaiHttp);

describe('POST /api/v1/auth', () => {
  it('should return a JWT with admin privilages when given a @turing.io email address.', (done) => {
    done();
  });
});
