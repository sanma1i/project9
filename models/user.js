'use strict';

module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataType.STRING,
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
            type: DataType.STRING,
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
            type: DataType.STRING,
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
            type: DataType.STRING,
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
    return User;
};