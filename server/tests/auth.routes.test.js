require('dotenv').config();

const chai = require('chai');
const jwt = require('jsonwebtoken');

const should = chai.should();
const chaiHttp = require('chai-http');

const server = require('../index.js');

chai.use(chaiHttp);

describe('POST /api/v1/auth', () => {
  it('should return a JWT without admin privileges when given a generic email address.', done => {
    chai
      .request(server)
      .post('/api/v1/auth')
      .send({
        appName: 'HappyHourPower',
        email: 'me@gmail.com'
      })
      .end((err, res) => {
        const token = res.body.token;
        const secret = process.env.SECRET_KEY;
        let decoded;

        try {
          decoded = jwt.verify(token, secret);
        } catch (error) {
          return error;
        }

        should.not.exist(err);
        res.status.should.equal(201);
        res.type.should.equal('application/json');
        res.body.should.include.keys('token');
        decoded.should.include.keys('admin', 'email', 'appName', 'iat', 'exp');
        decoded.admin.should.equal(false);
        done();
      });
  });

  it('should return a JWT with admin privileges when given a admin email address.', done => {
    chai
      .request(server)
      .post('/api/v1/auth')
      .send({
        appName: 'HappyHourPower',
        email: 'me@happyhourpower.com'
      })
      .end((err, res) => {
        const token = res.body.token;
        const secret = process.env.SECRET_KEY;
        let decoded;

        try {
          decoded = jwt.verify(token, secret);
        } catch (error) {
          return error;
        }

        should.not.exist(err);
        res.status.should.equal(201);
        res.type.should.equal('application/json');
        res.body.should.include.keys('token');
        decoded.should.include.keys('admin', 'email', 'appName', 'iat', 'exp');
        decoded.admin.should.equal(true);
        done();
      });
  });

  it('should return a 422 response and error message if a required param is missing.', done => {
    chai
      .request(server)
      .post('/api/v1/auth')
      .send({
        appName: 'HappyHourPower'
      })
      .end((err, res) => {
        should.exist(err);
        res.status.should.equal(422);
        res.type.should.equal('application/json');
        res.body.should.include.keys('error');
        res.body.error.should.equal('Missing required parameter (email).');
        done();
      });
  });

  it('should return a 200 response and success message if admin auth token provided.', done => {
    chai
      .request(server)
      .post('/api/v1/auth/test')
      .send({
        token: process.env.ADMIN_TOKEN
      })
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.should.include.keys('message');
        res.body.message.should.equal('Auth check successful.');
        done();
      });
  });

  it('should return a 403 response and failure message if non-admin auth token provided.', done => {
    chai
      .request(server)
      .post('/api/v1/auth/test')
      .send({
        token: process.env.NON_ADMIN_TOKEN
      })
      .end((err, res) => {
        should.exist(err);
        res.status.should.equal(403);
        res.type.should.equal('application/json');
        res.body.should.include.keys('message');
        res.body.message.should.equal(
          'You must be an administrator to use this endpoint.'
        );
        done();
      });
  });

  it('should return a 403 response and failure message if no JWT auth token provided.', done => {
    chai
      .request(server)
      .post('/api/v1/auth/test')
      .send({
        email: 'me@me.com'
      })
      .end((err, res) => {
        should.exist(err);
        res.status.should.equal(403);
        res.type.should.equal('application/json');
        res.body.should.include.keys('message');
        res.body.message.should.equal(
          'You must include an authorization token in the request.'
        );
        done();
      });
  });
});
