require('dotenv').config()

module.exports = {

  development: {
    client: 'mssql',
    connection: {
      host: process.env.APP_DB_HOST,
      database: process.env.APP_DB_NAME,
      user: process.env.APP_DB_USER,
      password: process.env.APP_DB_PASSWORD,
      requestTimeout: 200000,
        options: {
            encrypt: true,
            useUTC: false,
            packetSize: 16384,
            enableArithAbort: true
        }
    },
    migrations: {
      directory: './migrations'
    }
  },
}
