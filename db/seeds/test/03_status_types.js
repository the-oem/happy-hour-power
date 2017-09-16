const status_types = [
  {
    type: 'establishment_approved'
  },
  {
    type: 'user_submitted'
  },
  {
    type: 'crowdsourced_approved'
  }
];

exports.seed = (knex, Promise) => {
  return knex('status_type')
    .del()
    .then(() => {
      return Promise.all(
        status_types.map(type => {
          return knex('status_type').insert(type);
        })
      );
    })
    .catch(error => console.log({ error }));
};
