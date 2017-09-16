const happyHourParams = (req, res, next) => {
  const paramsOptions = [
    'timeslot',
    'drink_specials',
    'food_specials',
    'menu_pictures'
  ];
  const newParamKey = Object.keys(req.body)[0];

  if (paramsOptions.indexOf(newParamKey) === -1) {
    return res
      .status(422)
      .json({ message: `${newParamKey} is not a valid key` });
  } else {
    next();
  }
};

const socialMediaParams = (req, res, next) => {
  const searchParam = req.params.type;
  const paramsOptions = [
    'yelp',
    'instagram',
    'twitter',
    'pinterest',
    'facebook'
  ];

  if (paramsOptions.indexOf(searchParam) === -1) {
    res.status(422).json({
      error: `The parameter '${searchParam}' is not a value in the database`
    });
  } else {
    next();
  }
};

const patchSocialMedia = (req, res, next) => {
  const paramsOptions = [
    'yelp',
    'instagram',
    'twitter',
    'pinterest',
    'facebook'
  ];
  const newParamKey = Object.keys(req.body)[0];

  if (paramsOptions.indexOf(newParamKey) === -1) {
    return res
      .status(422)
      .json({ message: `'${newParamKey}' is not a valid key` });
  } else {
    next();
  }
};

module.exports = {
  happyHourParams,
  socialMediaParams,
  patchSocialMedia
};
