module.exports = function (sequelize, DataTypes) {
  const Bikes = sequelize.define("Bikes", {
    Make: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a bike from being entered if it doesn't
      // have a text value
      allowNull: true,
      // len is a validation that checks that our bike info is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    Model: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a bike from being entered if it doesn't
      // have a text value
      allowNull: true,
      // len is a validation that checks that our bike info is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },

    Color: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a bike from being entered if it doesn't
      // have a text value
      allowNull: true,
      // len is a validation that checks that our bike info is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },

    SerialNumber: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a bike from being entered if it doesn't
      // have a text value
      allowNull: true,
      // len is a validation that checks that our bike info is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },

    ImageURL: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a bike from being entered if it doesn't
      // have a text value
      allowNull: true,
      // len is a validation that checks that our bike info is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    }
    });
    
    Bikes.associate = function(models) {
      // We're saying that a Bike should belong to an User
      // A Bike can't be created without an User due to the foreign key constraint
      Bikes.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };
  