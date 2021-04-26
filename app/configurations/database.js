const { databaseConfig } = require('./constants')

module.exports = knex = require('knex')({
    ...databaseConfig
})