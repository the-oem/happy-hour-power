const locationType = [
  {
    id: 1,
    type: 'bar'
  },
  {
    id: 2,
    type: 'bar'
  },
  {
    id: 3,
    type: 'bar'
  },
  {
    id: 4,
    type: 'taphouse'
  },
  {
    id: 5,
    type: 'brewery'
  }
];

const socialMedia = [
  {
    id: 1,
    yelp:
      'https://www.yelp.com/biz/brothers-bar-and-grill-denver-5?osq=Brothers+Bar+%26+Grill',
    instagram:
      'https://www.instagram.com/explore/locations/539908/brothers-bar-grill-denver/',
    twitter: 'https://twitter.com/brothersbariu?lang=en',
    pinterest: 'https://www.pinterest.com/brothers4all/brothers-bar-grill/',
    facebook:
      'https://www.facebook.com/brothersbarandgrillDenver/?rf=131729000209987'
  },
  {
    id: 2,
    yelp: 'https://www.yelp.com/biz/lodos-bar-and-grill-downtown-denver-3',
    instagram: 'https://www.instagram.com/explore/locations/18473302/',
    twitter: 'https://twitter.com/lodosrg',
    pinterest: '',
    facebook: 'https://www.facebook.com/lodos.bar/'
  },
  {
    id: 3,
    yelp: 'https://www.yelp.com/biz/the-giggling-grizzly-denver',
    instagram: 'https://www.instagram.com/explore/locations/599338374/',
    twitter: 'https://twitter.com/gigglinggriz',
    pinterest: '',
    facebook: 'https://www.facebook.com/Giggling-Grizzly-766370203439098/'
  },
  {
    id: 4,
    yelp: 'https://www.yelp.com/biz/falling-rock-tap-house-denver',
    instagram:
      'https://www.instagram.com/explore/locations/205896/falling-rock-tap-house/',
    twitter: 'https://twitter.com/fallingrocktap?lang=en',
    pinterest: 'https://www.pinterest.com/pin/480337116489846225/',
    facebook: 'https://www.facebook.com/FRTH1997/'
  },
  {
    id: 5,
    yelp: 'https://www.yelp.com/biz/jagged-mountain-craft-brewery-denver-2',
    instagram:
      'https://www.instagram.com/explore/locations/149341791/jagged-mountain-craft-brewery/',
    twitter:
      'https://twitter.com/JaggedMtnCB?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    pinterest: 'https://www.pinterest.com/pin/164592561357296235/',
    facebook: 'https://www.facebook.com/JaggedMountain/'
  }
];

const location = [
  {
    id: 1,
    name: 'Brothers',
    latitude: 39.7812,
    longitude: 104.8921,
    phone_number: '(303)953-0229',
    website_url: 'www.doordash.com'
  },
  {
    id: 2,
    name: 'Lodos Bar and Grill',
    latitude: 39.7533,
    longitude: 104.9937,
    phone_number: '(303)293-8555',
    website_url: 'www.lodobar.com'
  },
  {
    id: 3,
    name: 'Giggling Grizzly',
    latitude: 39.7534,
    longitude: 104.9933,
    phone_number: '(303)297-8300',
    website_url: 'www.giggling-grizzly.com'
  },
  {
    id: 4,
    name: 'Falling Rock Taphouse',
    latitude: 39.7539,
    longitude: 104.9955,
    phone_number: '(303)293-8338',
    website_url: 'www.fallingrocktaphouse.com'
  },
  {
    id: 5,
    name: 'Jagged Mountain Craft Brewery',
    latitude: 39.7523,
    longitude: 104.9914,
    phone_number: '(720)689-2337',
    website_url: 'www.jaggedmountainbrewery.com'
  }
];

const happyHour = [
  {
    id: 1,
    timeslot: 'mon:16:00-20:00',
    drink_specials: '1/2 Price Drinks',
    food_specials: '2lb Burgers for $0.95',
    menu_pictures: 'somepicture.jpg',
    location_id: 1
  },
  {
    id: 2,
    timeslot: 'tue:16:00-20:00',
    drink_specials: '1/3 Price Drinks',
    food_specials: '9lb Burgers for $1.95',
    menu_pictures: 'somepicture.jpg',
    location_id: 1
  },
  {
    id: 3,
    timeslot: 'wed:16:00-20:00',
    drink_specials: '3x Price Drinks',
    food_specials: '6inch Burger for $12.95',
    menu_pictures: 'somepicture.jpg',
    location_id: 1
  },
  {
    id: 4,
    timeslot: 'wed:16:00-20:00',
    drink_specials: '3x Price Drinks',
    food_specials: '6inch hotdog for $12.95',
    menu_pictures: 'somepicture.jpg',
    location_id: 2
  },
  {
    id: 5,
    timeslot: 'wed:21:00-23:00',
    drink_specials: '$4.00 Cuban Missle Crisis',
    food_specials: '4inch hotdog for $14.95',
    menu_pictures: 'somepicture.jpg',
    location_id: 2
  }
];

exports.seed = (knex, Promise) => {
  return knex('happy_hours')
    .del()
    .then(() => knex('locations').del())
    .then(() => {
      return Promise.all(
        locations.map(location => {
          return knex('locations').insert(location);
        })
      );
    })
    .then(() => {
      return Promise.all(
        happy_hours.map(happyHour => {
          return knex('happy_hours').insert(happyHour);
        })
      );
    })
    .catch(error => console.log({ error }));
};
