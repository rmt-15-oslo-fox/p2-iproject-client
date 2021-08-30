'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Job, { foreignKey: 'AuthorId' })
    }
  };
  User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Name cant be empty' },
            notNull: { msg: 'Name cant be empty' }
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
    password: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Password cant be empty' },
            notNull: { msg: 'Password cant be empty' }
        }
    },
    addres: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Addres cant be empty' },
            notNull: { msg: 'Addres cant be empty' }
        }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};