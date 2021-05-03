const { databaseConfigYMB } = require('./constants')

module.exports.knexYMB = knexYMB = require('knex')({
    ...databaseConfigYMB
})