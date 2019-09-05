'use strict';

const express = require('express');
const router = express.Router();
const Course = require('../models').Course;
const User = require('../models').User;


router.get('/courses', (req, res) => {
    Course.findAll()
        .then(courses => {
            res.json(courses)
        })
});

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


router.get('/courses/:id', (req, res, next) => { // returns the course (including the user that owns the course) for the provided course ID
    Course.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'description', 'estimatedTime', 'materialsNeeded', 'userId'],
        include: [{
            model: User,
            as: 'user',
            attributes: ['id', 'firstName', 'lastName', 'emailAddress']
        }]
    }).then((course) => {
        if (course) {
            res.status(200).json({
                course
            });
        } else {
            const err = new Error(`Could not find a course that matches the id: ${req.params.id}`);
            err.status = 400;
            next(err);
        }
    })
})

router.post('/courses', (req, res) => {
    const createCourse = Course.create(req.body);
    res.location(`/api/courses/${createCourse.id}`);
    res.status(201).end();
});

module.exports = router;