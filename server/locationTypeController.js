const db = require('./knex');

const getLocationTypes = (req, res) => {
  db('location_type')
    .select()
    .then(data => res.status(200).json({ data }))
    .catch(error => res.status(500).json({ error }));
};

const addLocationType = (req, res) => {
  const locType = req.body;

  for (let requiredParams of ['type']) {
    if (!locType[requiredParams]) {
      return res
        .status(422)
        .json({ error: `Missing required parameter (${requiredParams}).` });
    }
  }

  db('location_type')
    .insert(locType, '*')
    .then(locType => res.status(201).json({ data: locType }))
    .catch(error => res.status(500).json({ error }));
};

const updateLocationType = (req, res) => {
  const id = parseInt(req.params.id, 10);

  db('location_type')
    .update(req.body, '*')
    .where('id', id)
    .returning('*')
    .then(locType => {
      if (locType.length) {
        res.status(200).json({ data: locType });
      } else {
        res.status(404).send({
          data: {
            message: `LocationType with id (${id}) not found.`
          }
        });
      }
    })
    .catch(error => console.log(error));
};

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
  updateLocationType,
  addLocationType
};
