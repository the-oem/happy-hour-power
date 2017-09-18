const db = require('./knex');

const updateHappyHour = (req, res) => {
  const id = req.headers.businessID;
  const newHappyHourData = req.body;
  console.log('hit');

  // if (req.headers.statusType !== 'controller') {
  //   res.status(500).json({
  //     message: 'You are not qualified to modify this business'
  //   });
  // }

  for (let requiredParams of [
    'timeslot',
    'drink_specials',
    'food_specials',
    'menu_pictures'
  ]) {
    if (!newHappyHourData[requiredParams]) {
      return res.status(422).json({
        error: `Missing required parameter '${requiredParams}'`
      });
    }
  }

  db('happy_hours')
    .where('id', id)
    .select()
    .update(newHappyHourData, '*')
    .then(data => res.status(200).json({ data }))
    .catch(error => res.status(500).json({ error }));
};

module.exports = {
  updateHappyHour
};
