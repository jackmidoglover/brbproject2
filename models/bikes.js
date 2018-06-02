const bcrypt = require('bcrypt');
module.exports = function (sequelize, DataTypes) {
  const Bikes = sequelize.define("Bikes", {
    // Giving the Bikes model a name of type STRING 
    Make: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 140]
      }
    },
    Model: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 140]
      }
    },
    Color: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 140]
      }
    },
    SerialNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 140]
      }
    },
    ImageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Stolenness: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    DateStolen: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 140]
      }
    },
    TimeStolen: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 140]
      }
    },
    LocationStolen: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 140]
      }
    },
    Reward: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 140]
      }
    },
    Comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  });

  

  return Bikes;
};
