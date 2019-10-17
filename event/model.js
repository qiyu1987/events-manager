const Sequelize = require('sequelize')
const db = require('../db')
const Event = db.define(
    'event',
    {
      name: Sequelize.STRING,
      date: Sequelize.STRING,
      description: Sequelize.STRING,
    }
)
module.exports = Event