const express = require('express');

const router = express.Router();

const authController = require('./authController');
const locationsController = require('./locationsController');
const locationTypeController = require('./locationTypeController');
const happyHoursController = require('./happyHoursController');

// AUTH
router.post('/v1/auth', authController.getAuth);
router.post(
  '/v1/auth/test',
  authController.checkAuth,
  authController.testCheckAuth
);

// LOCATIONS
router.get('/v1/locations', locationsController.getLocations);
router.get('/v1/locations/:id', locationsController.getLocationById);
router.post(
  '/v1/locations',
  authController.checkAuth,
  locationsController.addLocation
);
router.delete(
  '/v1/locations/:id',
  authController.checkAuth,
  locationsController.deleteLocation
);

// HAPPY HOURS
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
router.delete(
  '/v1/happyhours/:id',
  authController.checkAuth,
  happyHoursController.deleteHappyHours
);

// LOCATION TYPES
router.get('/v1/locationtypes', locationTypeController.getLocationTypes);
router.post(
  '/v1/locationtypes',
  authController.checkAuth,
  locationTypeController.addLocationType
);
router.put(
  '/v1/locationtypes/:id',
  authController.checkAuth,
  locationTypeController.updateLocationType
);
router.delete(
  '/v1/locationtypes/:id',
  authController.checkAuth,
  locationTypeController.deleteLocationType
);

module.exports = router;
