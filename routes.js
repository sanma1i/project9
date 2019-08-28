// 'use strict';

const express = require('express');
const router = express.Router();

//Route that creates new user
router.post('/users', (req, res) => {
    const user = req.body;
    //Add the user to the 'users' array
    users.push(user);
    //Set the status to 201 Created and end the response
    res.status(201).end();
})





module.exports = router;