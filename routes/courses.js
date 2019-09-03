'use strict';

const express = require('express');
const router = express.Router();
// const {
//     Sequelize,
//     sequelize,
//     models
// } = require('../models');
// const auth = require('basic-auth');
// const bcryptjs = require('bcryptjs');
// const {
//     check,
//     validationResult
// } = require('express-validator');

// const courses = [];

router.get('/courses', (req, res) => {
    res.json({
        message: 'Welcome to the courses route',
    });
});
module.exports = router;