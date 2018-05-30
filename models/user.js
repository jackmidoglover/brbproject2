module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      ID: {
        type: Datatype.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
          }
    },    
    UserName: {
        type: Datatype.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: [1, 140]
          }
    },    
    Name: {
        type: Datatype.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
          }
    },    
    UserPassword: {
        type: Datatype.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
          }
    },    
    Zipcode: {
        type: Datatype.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
          }
    },    
    Email: {
        type: Datatype.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: [1, 140]
          }
    }
    });
  
    User.associate = function(models) {
      // Associating User with Bikes
      // When an User is deleted, also delete any associated Bikes
      User.hasMany(models.Bikes, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };