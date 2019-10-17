const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:secret@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)
db.sync()
    .then(()=>console.log('Database connected'))
    .catch(console.error)
module.exports = db