const status_types = [
  {
    id: 1,
    type: 'establishment_approved'
  },
  {
    id: 2,
    type: 'user_submitted'
  },
  {
    id: 3,
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
