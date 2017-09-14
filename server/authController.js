require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require('./knex');

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
  const payload = req.body;

  for (let requiredParams of ['businessName', 'email']) {
    if (!req.body[requiredParams]) {
      return res.status(422).json({
        error: `Mising required parameter "${requiredParams}"`
      });
    }
  }

  if (payload.email.endsWith('@controllerAdmin.com')) {
    Object.assign(
      payload,
      { admin: true },
      { businessName: req.body.businessName }
    );
  } else {
    Object.assign(payload, { admin: false });
  }

  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' });
  return res.status(200).json({ token });
};

module.exports = {
  checkAuth,
  getAuth
};
