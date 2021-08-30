'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {

    static associate(models) {
      Company.hasMany(models.Job, { foreignKey: 'CompanyId' }) 
    }
  };
    Company.init({
        name: {
            type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { msg: 'Name cant be empty' },
                    notNull: { msg: 'Name cant be empty' }
                }
        },
        companyLogo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Company Logo cant be empty' },
                notNull: { msg: 'Company Logo cant be empty' }
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Location cant be empty' },
                notNull: { msg: 'Location cant be empty' }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Email cant be empty' },
                notNull: { msg: 'Email cant be empty' }
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Description cant be empty' },
                notNull: { msg: 'Description cant be empty' }
            }
        }
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};