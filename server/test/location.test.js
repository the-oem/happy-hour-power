process.env.NODE_ENV = "test";
const chai = require('chai');
const should = chia.should();
const chaiHTTP = require('chai-http');
const server = require('../index');

const environment = process.env.NODE_ENV;
const configuration = require('../../knexfile.js')[environment]
const db = require('knex')(configuration);

chai.use(chaiHTTP)


describe() {
 beforeEach(done => {
    db.migrate.latest()
    .then(() => db.seed.run())
    .then(() => done())
    .catch(error => console.log(error))
  })

	it('does', () => {
		console.log('seeding shit')
	})
}