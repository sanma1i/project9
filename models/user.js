const Sequelize = require('sequelize');
//const db = require('../config/config');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'First name is required'
            },
            notEmpty: {
                msg: 'First name is required'
            }
        },
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Last name is required'
            },
            notEmpty: {
                msg: 'Last name is required'
            }
        },
    },
    emailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Please enter a valid email.'
            },
            notNull: {
                msg: 'Email address is required'
            },
            notEmpty: {
                msg: 'Email address is required'
            }
        },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Password is required'
            },
            notEmpty: {
                msg: 'Password is required'
            }
        },
    }
}, {});
User.associate = (models) => {
    models.User.hasMany(models.Course, {
        as: 'user',
        foreignKey: {
            fieldName: 'userId',
            allowNull: false,
        },
    });
}
module.exports = User;