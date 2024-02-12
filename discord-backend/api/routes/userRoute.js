const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
 
// Routes for countryController
// router.get('/country', userController.getAllCountry);
// router.get('/country/id/:id', userController.getCountryById); 
// Routes for create a country
router.post('/user', userController.createuser);
// // Routes for delete a country
// router.delete('/country/id/:id', userController.deletedCountryById); 
// // Routes for update a country
// router.put('/country/id/:id', userController.updatedCountryById); 
 

module.exports = router;