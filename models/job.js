'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
  
    static associate(models) {
      Job.hasMany(models.Company, { foreignKey: 'CompanyId' })
      Job.hasMany(models.User, { foreignKey: 'AuthorId' })
    }
  };
    Job.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Title cant be empty' },
                notNull: { msg: 'Title cant be empty' }
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Description cant be empty' },
                notNull: { msg: 'Description cant be empty' }
            }
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Img Url cant be empty' },
                notNull: { msg: 'Img Url cant be empty' }
            }
        },
        CompanyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Img Url cant be empty' },
                notNull: { msg: 'Img Url cant be empty' }
            }
        },
        AuthorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Img Url cant be empty' },
                notNull: { msg: 'Img Url cant be empty' }
            }
        },
        jobType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Img Url cant be empty' },
                notNull: { msg: 'Img Url cant be empty' }
            }
        }
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};