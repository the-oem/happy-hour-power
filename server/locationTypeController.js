const db = require('./knex');

const getLocationTypes = (req, res) => {
  db('location_type')
    .select()
    .then(data => res.status(200).json({ data }))
    .catch(error => res.status(500).json({ error }));
};

module.exports = {
  getLocationTypes
};
