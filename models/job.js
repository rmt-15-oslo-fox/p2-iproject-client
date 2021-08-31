'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
  
    static associate(models) {
      Job.belongsTo(models.Company, { foreignKey: 'CompanyId' })
      Job.belongsTo(models.User, { foreignKey: 'AuthorId' })
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
                notEmpty: { msg: 'Company Id cant be empty' },
                notNull: { msg: 'Company Id cant be empty' }
            }
        },
        AuthorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Author Id cant be empty' },
                notNull: { msg: 'Author Id cant be empty' }
            }
        },
        jobType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Job Type cant be empty' },
                notNull: { msg: 'Job Type cant be empty' }
            }
        }
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};