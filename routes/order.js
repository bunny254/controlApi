const express = require('express');
const {postOrder} = require('../controller/order');
const router = express.Router();


router.route('/order').post(postOrder);

module.exports = router;