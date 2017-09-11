const location_types = [
	{
		"id": 1,
		"type":  "restaurant"
	},
	{
		"id": 2,
    "type":  "bar"
	},
  {
    "id": 3,
    "type":  "brewery"
  },
  {
    "id": 4,
    "type":  "distillery"
  },
  {
    "id": 5,
    "type":  "winery"
  }
]

exports.seed = (knex, Promise) => {
	return knex('location_type').del()
			.then(() => {
				return Promise.all(
					location_types.map(type => {
						return knex('location_type').insert(type);
					}))
			})
			.catch((error) => console.log({ error }))
}
