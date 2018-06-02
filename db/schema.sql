-- Drops the database if it exists currently --
DROP DATABASE IF EXISTS BikeRightBackdb;
-- Creates the database --
CREATE DATABASE BikeRightBackdb;

CREATE TABLE Bikes(
	Make: {
        type: Sequalize.STRING,
        defaultValue: 'Make a cake?'
    },    
    Model: {
        type: Sequalize.STRING,
        defaultValue: 'I used to model'
    },    
    Color: {
        type: Sequalize.STRING,
        defaultValue: 'Kinda sorta bluish red'
    },    
    SerialNumber: {
        type: Sequalize.STRING,
        unique: true,
        defaultValue: 'Captain Crunch 42'
    },    
    ImageURL: {
        type: Sequalize.STRING,
        defaultValue: 'Your mom is a URL'
    }
);

CREATE TABLE User(
    ID: {
        type: Sequalize.STRING,
        allowNull: false,
    },    
    UserName: {
        type: Sequalize.STRING,
        unique: true,
        allowNull: false,
    },    
    UserName: {
        type: Sequalize.STRING,
        allowNull: false,
    },    
    UserPassword: {
        type: Sequalize.STRING,
        allowNull: false,
    },    
    Zipcode: {
        type: Sequalize.STRING,
        allowNull: false,
    },    
    Email: {
        type: Sequalize.STRING,
        unique: true,
        allowNull: false,
    }
);