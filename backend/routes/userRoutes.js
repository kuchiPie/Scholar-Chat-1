const express = require('express');
const {resisterUser,authUser}= require('../controllers/userControllers');

const router = express.Router();

router.route('/').post(resisterUser);

router.post('/login',authUser);

module.exports = router;