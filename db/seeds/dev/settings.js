const settings = [
	{
		"id": 1,
		"default_search_radius": 10.0
	},
]

exports.seed = (knex, Promise) => {
	return knex('settings').del()
			.then(() => {
				return Promise.all(
					settings.map(setting => {
						return knex('settings').insert(setting);
					}))
			})
			.catch((error) => console.log({ error }))
}
