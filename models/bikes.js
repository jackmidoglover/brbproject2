const sequelize = require('../config/connection.js');

module.exports = function(sequelize, DataTypes) {
    const Bikes = sequelize.define("Bikes", {
      text: {
        type: DataTypes.STRING,
        // AllowNull is a flag that restricts a bike from being entered if it doesn't
        // have a text value
        allowNull: true,
        // len is a validation that checks that our bike info is between 1 and 140 characters
        validate: {
          len: [1, 140]
        }
      },
      complete: {
        type: DataTypes.BOOLEAN,
        // defaultValue is a flag that defaults a new bikes complete value to false if
        // it isn't supplied one
        defaultValue: false
      }
    });
    return Bikes;
  };