const express = require('express');
const router = express.Router();
const {signup, signin} = require('../controllers/userController');
const { validateJWT } = require('../middleware/jwt');

router.post('/signup', signup);
router.post('/signin', signin)
router.post('/test', validateJWT)

module.exports = router;