const location_types = [
  {
    type: 'restaurant'
  },
  {
    type: 'bar'
  },
  {
    type: 'brewery'
  },
  {
    type: 'distillery'
  },
  {
    type: 'winery'
  },
  {
    type: 'taphouse'
  }
];

exports.seed = (knex, Promise) => {
  return knex('location_type')
    .del()
    .then(() => {
      return Promise.all(
        location_types.map(type => {
          return knex('location_type').insert(type);
        })
      );
    })
    .catch(error => console.log({ error }));
};
