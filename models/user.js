module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      ID: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
          }
    },    
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
            len: [1, 140]
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
  
    User.associate = function(models) {
      // Associating User with Bikes
      // When an User is deleted, also delete any associated Bikes
      User.hasMany(models.Bikes, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };