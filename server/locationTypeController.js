const db = require('./knex');

const getLocationTypes = (req, res) => {
  db('location_type')
    .select()
    .then(data => res.status(200).json({ data }))
    .catch(error => res.status(500).json({ error }));
};

const updateLocationType = (req, res) => {};

const deleteLocationType = (req, res) => {
  db('location_type')
    .del()
    .where('id', parseInt(req.params.id, 10))
    .returning('*')
    .then(locationType => {
      res.status(200).send({
        data: {
          message: `Location Type with id (${locationType[0].id}) was deleted.`
        }
      });
    })
    .catch(error => {
      res.status(500).send({ error });
    });
};

module.exports = {
  getLocationTypes,
  deleteLocationType,
  updateLocationType
};
