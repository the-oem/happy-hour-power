const express = require('express');

const router = express.Router();

const authController = require('./authController');
const locationsController = require('./locationsController');
const locationTypeController = require('./locationTypeController');
const happyHoursController = require('./happyHoursController');

router.post('/v1/auth', authController.getAuth);
router.post(
  '/v1/auth/test',
  authController.checkAuth,
  authController.testCheckAuth
);

router.post(
  '/v1/locations',
  authController.checkAuth,
  locationsController.addLocation
);
router.get('/v1/locations', locationsController.getLocations);
router.delete(
  '/v1/locations/destroy',
  authController.checkAuth,
  locationsController.deleteLocation
);

router.get(
  '/v1/locations/:id/happyhours',
  happyHoursController.getHappyHoursByLocation
);
router.post(
  '/v1/happyhours',
  authController.checkAuth,
  happyHoursController.addHappyHours
);
router.put(
  '/v1/happyhours/:id',
  authController.checkAuth,
  happyHoursController.updateHappyHours
);
router.delete('/v1/happyhours/:id', happyHoursController.deleteHappyHours);

router.get('/v1/locationtypes', locationTypeController.getLocationTypes);

module.exports = router;
