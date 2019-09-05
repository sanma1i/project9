'use strict';

const express = require('express');
const router = express.Router();
const Course = require('../models').Course;

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


router.get('/courses', (req, res) => {
    Course.findAll()
        .then(courses => {
            res.json(courses)
        })
})


router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the courses route',
    });
});
module.exports = router;