const 		express 											= require('express');
const 		app 															= express();
const 		path 														= require('path');
const 		bodyParser 								= require('body-parser');
const 		jwt 															= require('jsonwebtoken');
const { checkAuth,
								happyHourParams		} = require('./serverMiddleware');
																													require('dotenv').config();

const PORT 																= process.env.PORT || 5000;
const environment 									= process.env.NODE_ENV || 'development';
const configuration 							= require('../knexfile')[environment];
const db 																		= require('knex')(configuration);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use(bodyParser.json());

// app.set('secretKey', process.env.SECRET_KEY);
app.set('secretKey', 'FAKE-process.env.SECRET_KEY');

// All remaining requests return the React app, so it can handle routing.
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
})

app.post('/api/v1/admin/', (req, res) => {
	const payload = req.body;

	for (let requiredParams of ['businessID', "email"]) {
		if (!req.body[requiredParams]) {
			return res.status(422).json({ error: `Mising required parameter "${requiredParams}"`})
		}
	}

	if (payload.email.endsWith('@controllerAdmin.com')) {
		Object.assign(payload, { admin:true }, { businessID:req.body.businessID })
	} else { Object.assign(payload, { admin:false }) }

	const token = jwt.sign(payload, app.get('secretKey'), {expiresIn: '7d'})
	return res.status(200).json({ token })
})

app.route('/api/v1/location/')
.get((req, res) => {
	db('location').select()
	.then(allLocations =>  res.status(200).json({ allLocations }) )
	.catch(error => res.status(500).json({ ERROR: 'GET /api/v1/location/', error }))
})
.post(checkAuth, (req, res) => {
	const locationType 			= req.body.locationType;
	const newSocialMedia 	= req.body.socialMedia;
	const newLocation 				= req.body.location;
	const statusType 					= req.body.statusType;
	const newHappyHour 			= req.body.happyHour;

	for (let requiredParams of ["name","latitude","longitude"]) {
		if (!newLocation[requiredParams]) {
			return res.status(422).json({
				error: `missing required parameter ${requiredParams}`
			})
		}
	}

	// db('location').where('name', newLocation.name).select()
	// .then(data => {
	// 	if (data.length > 0) {
	// 		let ids = []
	// 		for (let i=0;i<data.length;i++) { ids.push(data[i].id) }
	// 		return res.status(300).json({
	// 			message:`Warning, ${data.length} business(s) with the name ${newLocation.name} already exists in our database`,
	// 			businessID: ids
	// 		 })
	// 		}
	// })
	// .catch(error => res.status(500).json({ error }))

		db('location_type').insert(locationType, 'id')
		.then(locTypeID => {
				Object.assign(newLocation, { location_type_id:locTypeID[0] })
				db('social_media').insert(newSocialMedia, 'id')
				.then(socialMediaID => {
					Object.assign(newLocation, { social_media_id:socialMediaID[0] })
					db('location').insert(newLocation, ['id'])
					.then(newLocID => {
						db('status_type').insert(statusType, 'id')
						.then(statusID => {
							Object.assign(newHappyHour, { status_type_id:statusID[0] }, { location_id:newLocID[0].id })
							db('happy_hour').insert(newHappyHour, ['location_id'])
							.then(locID => {
								db('location').where('id', locID[0].location_id).select()
								.then(data => res.status(200).json({ data }))
							})
							.catch(error => res.status(500).json({ error }))
						})
						.catch(error => res.status(500).json({ error }))
					})
					.catch(error => res.status(500).json({ error }))
				})
				.catch(error => res.status(500).json({ error }))
			})
		.catch(error => res.status(500).json({ error }))
})

app.route('/api/v1/happyhour/update')
.put(checkAuth, (req, res) => {
	const id 														= req.headers.businessID;
	const newHappyHourData = req.body;

	if (req.headers.statusType !== 'controller') {
		res.status(500).json({
			message:"You are not qualified to modify this business"
		})
	}

	for (let requiredParams of ['timeslot','drink_specials','food_specials','menu_pictures']) {
		if (!newHappyHourData[requiredParams]) {
			return res.status(422).json({
				error: `Missing required parameter ${requiredParams}`
			})
		}
	}

	db('happy_hour').where('id', id).select()
	.update(newHappyHourData, '*')
	.then(data => res.status(200).json({ data }))
	.catch(error => res.status(500).json({ error }))
	})
.patch(happyHourParams, checkAuth, (req, res) => {
	const id 					= req.headers.businessID;
	const newData = req.body;

	db('happy_hour').where('id', id).select(`${ newData }`)
	.update(newData, '*')
	.then(data => res.status(200).json({ data }))
	.catch(error => res.status(500).json({ error }))
})

app.delete('/api/v1/location/destroy/', checkAuth, (req, res) => {
	const id 										= req.headers.businessID;
	const businessName = req.body.businessName;

	if (req.headers.statusType !== 'controller') {
		return res.status(401).json({
			message:"You are not qualified to remove this business from the database"
		})
	}

	db('happy_hour').where("id", id).del()
	.then(id => {
		db('location').where('id', id).del()
		.then(id => {
			db('social_media').where('id', id).del()
			.then(id => {
				db('location_type').where('id', id).del()
				.then(id => {
					db('status_type').where('id', id).del()
					.then(id => {
						res.status(200).json({ message:`All data pertaining to ${businessName} has been permanantly destroyed` })
					})
					.catch(error => res.status(500).json({ error }))
				})
				.catch(error => res.status(500).json({ error }))
			})
			.catch(error => res.status(500).json({ error }))
		})
		.catch(error => res.status(500).json({ error }))
	})
	.catch(error => res.status(500).json({ error }))
});

//---> NOT WORKING AND I DON'T KNOW WHY <---//
app.route('/api/v1/locationtype/update/')
.patch(checkAuth, (req, res) => {
	const id 													= req.headers.businessID;
	const newLocationType = req.body;
	
	if (req.headers.statusType !== 'controller') {
		return res.status(401).json({
			message:'you are not qualified to modify this business'
		})
	}

		for (let requiredParams of ['location_type']) {
		if (!newLocationType[requiredParams]) {
			return res.status(422).json({
				error:`Missing required parameter ${requiredParams}` 
			})
		}
	}

	db('location_type').where('id', id).select('type')
	.update(newLocationType, 'type')
	.then(replacementType => res.status(200).json({ replacementType }))
	.catch(error => res.status(500).json({ error }))
})

app.get('/api/v1/locationtype/:type', (req,res) => {
	const newType = req.params.type;

	db('location_type').where('type', newType).select('*')
	.then(data => {
		res.status(200).json({ data })
	})
	.catch(error => res.status(400).json({ error }))
})

app.route('/api/v1/statustype/update/')
.put(checkAuth, (req, res) => {
	const id 							= req.headers.businessID
	const newStatus = req.body;

	for (let requiredParams of ['type']) {
		if (!newStatus[requiredParams]) {
			return res.status(422).json({
				error: `Missing required parameter ${requiredParams}`
			})
		}
	}

	db('status_type').where('id', id)
	.update(newStatus)
	.then(statusID => {
		db('location').where('id', id).select('*')
		.then(updatedLocation => {
			res.status(200).json({ updatedLocation })
		})
		.catch(error => res.status(500).json({ error }))
	})
	.catch(error => res.status(500).json({ error }))
})

app.get('/api/v1/statustype/:type', (req, res) => {
	const newType = req.params.type;
	db('status_type').where('type', newType).select('id')
	.then(data => res.status(200).json({ data }))
})

app.get('/api/v1/statustype', (req, res) => {
	db('status_type').select('*')
	.then(data =>  res.status(200).json({ data }))
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
