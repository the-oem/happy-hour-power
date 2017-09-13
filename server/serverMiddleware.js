const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const tokenPiece = req.headers.authorization;

  if (!tokenPiece) {
    return res.status(403).json({
      message:
        'You must have be authorized to proceed. Contact your nearest computer guy'
    });
  }

  jwt.verify(tokenPiece, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(403).json({
        message:
          'Gandalf says you shall not pass because you are not authorized.',
        error
      });
    }

    if (decoded.admin) {
      Object.assign(
        req.headers,
        { statusType: 'controller' },
        { businessID: decoded.businessID }
      );
      next();
    } else {
      Object.assign(req.headers, { statusType: 'user' });
      next();
    }
    return null;
  });
  return null;
};

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
  checkAuth,
  happyHourParams,
  socialMediaParams,
  patchSocialMedia
};
