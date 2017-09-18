const db = require('./knex');

const getLocationTypes = (req, res) => {
  db('location_type')
    .select()
    .then(data => res.status(200).json({ data }))
    .catch(error => res.status(500).json({ error }));
};

const updateLocationType = (req, res) => {};

const deleteLocationType = (req, res) => {
  const id = parseInt(req.params.id, 10);

  db('location_type')
    .del()
    .where('id', id)
    .returning('*')
    .then(locationType => {
      if (locationType.length) {
        res.status(200).send({
          data: {
            message: `LocationType with id (${locationType[0].id}) was deleted.`
          }
        });
      } else {
        res.status(404).send({
          data: {
            message: `LocationType with id (${id}) not found.`
          }
        });
      }
    })
    .catch(error => res.status(500).json({ error }));
};

module.exports = {
  getLocationTypes,
  deleteLocationType,
  updateLocationType
};
