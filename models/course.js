'use strict';
const Sequelize = require('sequelize');
const sequelize = require("../models").sequelize;
//module.exports = (sequelize) => {
const Course = sequelize.define('Course', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIcrement: true
    },
    title: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Title is required'
            }
        },
    },
    description: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Description is required'
            }
        },
    },
    estimatedTime: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    materialsNeeded: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}, {});
Course.associate = (models) => {
    models.Course.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
            fieldName: 'userId',
            allowNull: false,
        },
    });
};

//return Course;
//};
module.exports = Course;