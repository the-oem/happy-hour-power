require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require('./knex');

const checkAuth = (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    return res
      .status(403)
      .send({
        message: 'You must include an authorization token in the request.'
      });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.admin) {
      delete req.body.token;
      return next();
    }
    return res
      .status(403)
      .send({ message: 'You must be an administrator to use this endpoint.' });
  } catch (err) {
    return res.status(403).json({
      message: 'Error decoding JWT token.',
      error: err
    });
  }
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

const testCheckAuth = (req, res) => {
  res.status(200).json({ message: 'Auth check successful.' });
};

module.exports = {
  checkAuth,
  getAuth,
  testCheckAuth
};
