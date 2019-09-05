 'use strict';

 const express = require('express');
 const router = express.Router();
 const User = require('../models').User;
 const {
     check,
     validationResult
 } = require('express-validator/check');
 const auth = require('basic-auth');
 const bcryptjs = require('bcryptjs');


 router.get('/users', (req, res) => {
     User.findAll()
         .then(users => {
             res.json(users)
         })
 })


 router.get('/users', (req, res) => {
     // Get the user from the request body.
     res.json({
         message: "Welcome to the user's route"
     });
 });

 router.post('/users', (req, res) => {
     // Get the user from the request body.
     const user = req.body;

     const errors = [];

     // Validate that we have a 'name' value.
     if (!user.name) {
         errors.push('Please provide a value for "name"');
     }

     // Validate that we have an 'email' value.
     if (!user.email) {
         errors.push('Please provide a value for "email"');
     }

     // If there are any errors...
     if (errors.length > 0) {
         // Return the validation errors to the client.
         res.status(400).json({
             errors
         });
     } else {
         // Add the user to the `users` array.
         users.push(user);

         // Set the status to 201 Created and end the response.
         res.status(201).end();
     }
 });

 //Add a middleware function that attempts to get the user credentials
 //  const authenticateUser = async (req, res, next) => {
 //              let message = null;
 //              // Get the user's credentials from the Authorization header.
 //              const credentials = auth(req);

 //              if (credentials) {

 //                  const user = await User.findOne({
 //                      raw: true,
 //                      where: {
 //                          emailAddress: credentials.name,
 //                      }
 //                  })

 //                  if (user) {
 //                      const authenticated = bcryptjs.compareSync(credentials.pass, user.password);
 //                      if (authenticated) {
 //                          console.log(`Authentication succesful for user: ${user.firstName} ${user.lastName}`);
 //                          if (req.originalUrl.includes('courses')) {
 //                              req.body.userId = user.id;
 //                          } else if (req.originalUrl.includes('users')) {
 //                              req.body.id = user.id;
 //                          }
 //                      } else {
 //                          message = `Authentication failed for user: ${user.firstName} ${user.lastName}`;
 //                      }
 //                  } else {
 //                      message = 'Authorization header not found';
 //                  }
 //                  if (message) {
 //                      console.warn(message);
 //                      const err = new Error('Access Denied');
 //                      err.status = 403;
 //                      next(err);
 //                  } else {
 //                      next();
 //                  }
 //              }
 //Returns the current authenticated user
 //  router.get('/users', authenticateUser, (req, res) => {
 //      (async () => {
 //          const user = await User.findByPk(req.currentUser.id, {
 //                  attributes: [
 //                      'id',
 //                      'firstName',
 //                      'lastName',
 //                      'emailAddress'
 //                  ],
 //                  include: [{
 //                      model: Course,
 //                      attributes: [
 //                          'id',
 //                          'title',
 //                          'description',
 //                          'estimatedTime',
 //                          'materialsNeeded',
 //                          'userId'
 //                      ]
 //                  }, ]
 //              }

 //          );

 //          return res.json(user).status(200).end();
 //      })();
 //  });
 //  //         

 //                  // Store the user on the Request object.
 //                  req.currentUser = user;
 //              } else {
 //                  message = `Authentication failure for username: ${user.username}`;
 //              }
 //          } else {
 //              message = `User not found for username: ${credentials.name}`;
 //          }
 //      } else {
 //          message = 'Auth header not found';
 //      }

 //      if (message) {
 //          console.warn(message);
 //          res.status(401).json({
 //              message: 'Access Denied'
 //          });
 //      } else {
 //          next();
 //      }
 //  };


 //Route that returns a list of users
 //  router.get('/', authenticateUser, (req, res) => {
 //      (async () => {
 //          const user = await User.findByPk(req.currentUser.id, {
 //              attributes: [
 //                  'id',
 //                  'firstName',
 //                  'lastName',
 //                  'emailAddress'
 //              ],
 //              include: [{
 //                  model: Course,
 //                  attributes: [
 //                      'id',
 //                      'title',
 //                      'description',
 //                      'estimatedTime',
 //                      'materialsNeeded',
 //                      'userId'
 //                  ]
 //              }, ]
 //          });
 //          return res.json(user).status(200).end();
 //      })();
 //  });
 //  //Route that creates new user
 //  router.post('/users', [
 //      check('firstName')
 //      .exists({
 //          checkNull: true,
 //          checkFalsey: true
 //      })
 //      .withMessage('Please provide a value for "first name"'),

 //      check('lastName')
 //      .exists({
 //          checkNull: true,
 //          checkFalsey: true
 //      })
 //      .withMessage('Please provide a value for "last name"'),

 //      check('emailAddress')
 //      .exists()
 //      .withMessage('Please provide a value for "emailAddress"')
 //      .isEmail()
 //      .withMessage('Please enter a valid email address'),

 //      check('password')
 //      .exists()
 //      .withMessage('Please provide a value for "password"')
 //  ], (req, res) => {

 //Get the validation result from the Request object.
 //const errors = validationResult(req);
 //If there are validation errors
 //if (!errors.isEmpty()) {
 //Use map() method to get a list of error messages
 //const errorMessages = errors.array().map(error => error.msg);
 //Return the validation errors to the client
 //      res.status(400).json({
 //          errors: errorMessages
 //      });
 //  } else {
 //Encrypt password from request body and create new User
 //          req.body.password = bcryptsjs.hashSync(req.body.password);
 //          User.create(req.body)
 //              .then((user) => {
 //                  if (user) {
 //                      res.status(201).location('/').end();
 //                  } else {
 //                      next();
 //                  }
 //              })
 //      }
 //  });




 //Add the user to the 'users' array
 //  router.post('/users', (req, res) => {
 //      //Get the user from the request body
 //      const user = req.body;
 //      //Add the user to the 'users'array
 //      users.push(user);
 //      //Set the status to 201 Created and end the response
 //      res.status(201).end();
 //  })

 //Get All Courses by ID GET / api / courses /: id
 //  router.get('/courses/:id', asyncHandler(async (req, res) => {
 //      CountQueuingStrategy.findOne({
 //              attributes: ['id', 'userId', 'title', 'description', 'estimatedTime', 'materialsNeeded'],
 //              where: {
 //                  id: req.params.id
 //              }
 //          })
 //          .then((course) => {
 //              if (course) {
 //                  res.json({
 //                      course
 //                  });
 //              } else {
 //                  res.status(400).end();
 //              }
 //          })
 //  }))




 module.exports = router;