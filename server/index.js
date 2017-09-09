const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const db = require('knex')(configuration)

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
// app.get('/api', function (req, res) {
//   res.set('Content-Type', 'application/json');
//   res.send('{"message":"Hello from the custom server!"}');
// });

app.use(bodyParser.json());

// All remaining requests return the React app, so it can handle routing.
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});



app.get('/api/v1/location', (req, res) => {

	db('location').select()
	.then(location =>  res.status(200).json({ location }) )
	.then(info => {
		console.log('some infor for da conole: ', info)
	})
	.catch(error => console.log(`ERROR: GET /api/v1/location:`, error))
})



// POST TO LOCATION
app.post('/api/v1/location', (req, res) => {
	const newLocation = req.body;

	for(let requiredParameter of ["name", "latitude", "longitude"]) {
		if(!newLocation[requiredParameter]) {
			return res.status(422).json({
				error: `missing required parameter ${requiredParameter}`
			})
		}
	} 

	db('location').insert(newLocation, ['id', 'name'])
	.then(location => res.status(201).json({ id: location[0] }))
	.catch(error => res.status(500).json({ error }))
})

app.patch('location', (req, res) => {

})








app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
