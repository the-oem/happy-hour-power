const express = require('express');

const router = express.Router();

const authController = require('./authController');
const locationsController = require('./locationsController');
const locationTypeController = require('./locationTypeController');

router.post('/v1/authorization', authController.getAuth);

router.post(
  '/v1/locations',
  authController.checkAuth,
  locationsController.postLocations
);
router.get('/v1/locations', locationsController.getAllLocations);
router.delete(
  '/v1/locations/destroy',
  authController.checkAuth,
  locationsController.deleteLocation
);
router.get('/v1/locationtype', locationTypeController.getAllLocationTypes);

module.exports = router;
