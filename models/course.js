'use strict';

module.exports = (sequelize, DataType) => {
    const Course = sequelize.define('Course', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIcrement: true
        },
        title: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Title is required'
                }
            },
        },
        description: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Description is required'
                }
            },
        },
        estimatedTime: {
            type: DataType.STRING,
            allowNull: true,
            DataType
        },
        materialsNeeded: {
            type: DataType.STRING,
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

    return Course;
};