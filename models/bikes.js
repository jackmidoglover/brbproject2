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
      validate: {
        len: [1, 140]
      }
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

  });

  //create bike
  app.post('/api/bikes', (req, res) => {
    db.Bikes.create(req.body)
      .then(bikes => res.json(bikes))
  })
  //mark bike stolen
  app.post('/api/bikes/stolen', (req, res) => {
    db.bikes.update(req.body)
      .then(bikes => res.json(bikes))
  })

  //find bike belonging to user
  app.get('/api/bikes/:userId?', (req, res) => {
    let query; {
      (req.params.userId)
      query = Bikes.findAll({
        include: [
          { model: User, where: { id: req.params.userId } },
        ]
      })

    }
    return query.then(bikes => res.json(bikes))
  })

  //delete bike
  app.delete('/api/bikes', (req, res) => {
    Bikes.destroy(req.body)
      .then(bikes => res.json(bikes))
  })

  return Bikes;
};