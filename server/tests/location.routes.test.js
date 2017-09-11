require('dotenv').config();

const chai = require('chai');
const should = chai.should();
const chaiHTTP = require('chai-http');
const server = require('../index.js');

const environment = process.env.NODE_ENV;
const configuration = require('../../knexfile.js')[environment]
const db = require('knex')(configuration);

chai.use(chaiHTTP)

describe('Testing Location API Routes', () => {
 beforeEach((done) => {
    db.migrate.latest()
    // .then(() => db.seed.run())
    .then(() => done())
    .catch(error => console.log(error))
  })

	it('does a thing', () => {
		console.log('in the test')
	})
})
