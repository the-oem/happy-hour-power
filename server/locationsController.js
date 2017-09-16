const db = require('./knex');

const postLocations = (req, res) => {
  const newLocation = req.body;
  console.log(newLocation);

  for (let requiredParams of [
    'name',
    'latitude',
    'longitude',
    'phone_number',
    'website_url',
    'location_type_id'
  ]) {
    if (!newLocation[requiredParams]) {
      return res.status(422).json({
        error: `missing required parameter ${requiredParams}`
      });
    }
  }

  db('locations')
    .insert(newLocation, '*')
    .then(newLocation => {
      res.status(200).json({ newLocation });
    })
    .catch(error => res.status(500).json({ error }));
};

const getAllLocations = (req, res) => {
  db('locations')
    .select()
    .then(allLocations => res.status(200).json({ allLocations }))
    .catch(error => res.status(500).json({ error }));
};

const deleteLocation = (req, res) => {
  const businessName = req.headers.businessName;

  if (req.headers.userStatus !== 'controller') {
    return res.status(401).json({
      message: 'You are not qualified to remove this business from the database'
    });
  }

  db('locations')
    .where('name', businessName)
    .select('id')
    .then(businessId => {
      db('happy_hours')
        .where('id', businessId[0].id)
        .del()
        .then(noMore => {
          res
            .status(200)
            .json({
              deleted: `'${businessName}' with the id '${noMore}' has been deleted`
            });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

module.exports = {
  postLocations,
  getAllLocations,
  deleteLocation
};
