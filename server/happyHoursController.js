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
  db('happy_hours')
    .update(req.body, '*')
    .where('id', parseInt(req.params.id, 10))
    .returning('*')
    .then(happyHour => res.status(200).json({ data: happyHour }))
    .catch(error => res.status(500).json({ error }));
};

module.exports = {
  getHappyHoursByLocation,
  addHappyHours,
  updateHappyHours
};
