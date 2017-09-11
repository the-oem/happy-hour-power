export const  location = [
	{
		"id": 1,
		"name":  "Brothers",
		"latitude": 39.7812,
		"longitude": 104.8921,
		"phone_number": "(303)953-0229",
		"website_url": "www.doordash.com"
	},
	{
		"id": 2,
		"name":  "Lodos Bar and Grill",
		"latitude": 39.7533,
		"longitude": 104.9937,
		"phone_number": "(303)293-8555",
		"website_url": "www.lodobar.com"
	}
]

export const happy_hour = [
	{
		"id": 1,
		"timeslot": "mon:16:00-20:00",
		"drink_specials": "1/2 Price Drinks",
		"food_specials": "2lb Burgers for $0.95",
		"menu_pictures": "somepicture.jpg",
		"location_id": 1
	},
	{
		"id": 2,
		"timeslot": "tue:16:00-20:00",
		"drink_specials": "1/3 Price Drinks",
		"food_specials": "9lb Burgers for $1.95",
		"menu_pictures": "somepicture.jpg",
		"location_id": 1
	},
	{
		"id": 3,
		"timeslot": "wed:16:00-20:00",
		"drink_specials": "3x Price Drinks",
		"food_specials": "6inch Burger for $12.95",
		"menu_pictures": "somepicture.jpg",
		"location_id": 1
	},
	{
		"id": 4,
		"timeslot": "wed:16:00-20:00",
		"drink_specials": "3x Price Drinks",
		"food_specials": "6inch hotdog for $12.95",
		"menu_pictures": "somepicture.jpg",
		"location_id": 2
	},
	{
		"id": 5,
		"timeslot": "wed:21:00-23:00",
		"drink_specials": "$4.00 Cuban Missle Crisis",
		"food_specials": "4inch hotdog for $14.95",
		"menu_pictures": "somepicture.jpg",
		"location_id": 2
	}
]

exports.seed = (knex, Promise) => {
	return knex('happy_hour').del()
			.then(() => {
				return knex('location').del()
			})
			.then(() => {
				return Promise.all(
					location.map(location => {
						return knex('location').insert(location);
					}))
			})
			.then(() => {
				return Promise.all(happy_hour.map(happyHour => {
					return knex('happy_hour').insert(happyHour)
				}))
			})
			.then(() => console.log('Re-seeding complete'))
			.catch(() => console.log({error: 'Error seeding data'}))
}