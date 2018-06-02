const bcrypt = require('bcrypt-nodejs');
module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("Users", {
      // Giving the User model a name of type STRING 
    username: {
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
    password: {
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
  
    Users.associate = function(models) {
      // Associating User with Bikes
      // When an User is deleted, also delete any associated Bikes
      Users.hasMany(models.Bikes, {
        onDelete: "cascade"
      });
    }
  };

    Users.prototype.validatePassword = function(password){
      return bcrypt.compareSync(password, this.password);
    }

    Users.hook("beforeCreate", function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
  
  
    return Users;
  };
