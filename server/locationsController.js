const db = require('./knex');

const addLocation = (req, res) => {
  const location = req.body;

  for (let requiredParams of [
    'name',
    'latitude',
    'longitude',
    'phone_number',
    'website_url',
    'google_maps_id',
    'location_type_id'
  ]) {
    if (!location[requiredParams]) {
      return res
        .status(422)
        .json({ error: `Missing required parameter (${requiredParams}).` });
    }
  }

  db('locations')
    .insert(location, '*')
    .then(location => res.status(201).json({ data: location }))
    .catch(error => res.status(500).json({ error }));
};

const getLocations = (req, res) => {
  db('locations')
    .where(req.query)
    .select()
    .then(locations => res.status(200).json({ data: locations }))
    .catch(error => res.status(500).json({ error }));
};

const getLocationById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  db('locations')
    .where('id', id)
    .select()
    .then(location => res.status(200).json({ data: location }))
    .catch(error => res.status(500).json({ error }));
};

const deleteLocation = (req, res) => {
  const locationId = parseInt(req.params.id, 10);

  db('happy_hours')
    .where('location_id', locationId)
    .del()
    .then(deletedCount => {
      db('social_media')
        .where('location_id', locationId)
        .del()
        .then(deletedCount => {
          db('locations')
            .where('id', locationId)
            .del()
            .then(deletedCount => {
              res.status(200).json({
                data: {
                  message: `Location with ID (${locationId}) has been deleted.`
                }
              });
            })
            .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

module.exports = {
  addLocation,
  getLocations,
  deleteLocation
};
