require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require('./knex');

const checkAuth = (req, res, next) => {
  const tokenPiece = req.headers.authorization;

  if (!tokenPiece) {
    return res
      .status(403)
      .json({ message: 'You must be authorized to access this endpoint.' });
  }

  jwt.verify(tokenPiece, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(403).json({
        message: 'Error decoding JWT token.',
        error
      });
    }

    // console.log(decoded);

    if (decoded.admin) {
      Object.assign(
        req.headers,
        { userStatus: 'controller' },
        { businessName: decoded.businessName }
      );
      next();
    } else {
      Object.assign(req.headers, { userType: 'user' });
      next();
    }
    return null;
  });
  return null;
};

const getAuth = (req, res) => {
  const email = req.body.email;
  const appName = req.body.appName;
  const secret = process.env.SECRET_KEY;

  for (let requiredParams of ['email', 'appName']) {
    if (!req.body[requiredParams]) {
      return res
        .status(422)
        .json({ error: `Missing required parameter (${requiredParams}).` });
    }
  }

  const admin =
    email.toLowerCase().endsWith('happyhourpower.com') &&
    appName === 'HappyHourPower'
      ? { admin: true }
      : { admin: false };
  const initPayload = { email, appName };
  const finalPayload = Object.assign(initPayload, admin);
  const token = jwt.sign(finalPayload, secret, { expiresIn: '7d' });
  res.status(201).json({ token });
};

module.exports = {
  checkAuth,
  getAuth
};
