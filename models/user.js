const bcrypt = require('bcrypt');
module.exports = function (sequelize, DataTypes) {
  const Users = sequelize.define("Users", {
    // Giving the User model a name of type STRING 
    UserName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    UserPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60]
      }
    },
    Zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    Email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });




  Users.associate = function (models) {
    // Associating User with Bikes
    // When an User is deleted, also delete any associated Bikes
    Users.hasMany(models.Bikes, {
      onDelete: "cascade"
    });
  };



  Users.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }

  return Users;
};