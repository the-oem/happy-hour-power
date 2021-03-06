const db = require('./knex');

const getHappyHoursByLocation = (req, res) => {
  const locationId = parseInt(req.params.id, 10);

  db('happy_hours')
    .where('location_id', locationId)
    .select()
    .then(happyhours => res.status(200).json({ data: happyhours }))
    .catch(error => res.status(500).json({ error }));
};

const addHappyHours = (req, res) => {
  const happyHour = req.body;
  for (const requiredParameter of ['timeslot', 'location_id']) {
    if (!happyHour[requiredParameter]) {
      return res.status(422).json({
        error: `Missing required parameter of (${requiredParameter}).`
      });
    }
  }

  db('happy_hours')
    .insert(req.body, '*')
    .then(happyHour => res.status(201).json({ data: happyHour }))
    .catch(error => res.status(500).json({ error }));
};

const updateHappyHours = (req, res) => {
  const id = parseInt(req.params.id, 10);

  db('happy_hours')
    .update(req.body, '*')
    .where('id', id)
    .returning('*')
    .then(happyHour => {
      if (happyHour.length) {
        res.status(200).json({ data: happyHour });
      } else {
        res.status(404).send({
          data: {
            message: `HappyHour with id (${id}) not found.`
          }
        });
      }
    })
    .catch(error => console.log(error));
};

const deleteHappyHours = (req, res) => {
  const id = parseInt(req.params.id, 10);

  db('happy_hours')
    .del()
    .where('id', id)
    .returning('*')
    .then(happyHour => {
      if (happyHour.length) {
        res.status(200).send({
          data: {
            message: `HappyHour with id (${happyHour[0].id}) was deleted.`
          }
        });
      } else {
        res.status(404).send({
          data: {
            message: `HappyHour with id (${id}) not found.`
          }
        });
      }
    })
    .catch(error => res.status(500).json({ error }));
};

module.exports = {
  getHappyHoursByLocation,
  addHappyHours,
  updateHappyHours,
  deleteHappyHours
};
