require('dotenv').config()
const sql = require('seriate')
const Knex = require('knex')
const { APP_DB_HOST, APP_DB_USER, APP_DB_NAME, APP_DB_PASSWORD } = process.env

const run = async() => {
    try {
    
        const sqlConfig = {
            user: APP_DB_USER,
            password: APP_DB_PASSWORD,
            server: APP_DB_HOST
        }
    
        sql.setDefaultConfig(sqlConfig)
    
        await sql.execute({
            query: `DROP DATABASE IF EXISTS ${APP_DB_NAME}`
        })
        .then(() => {
            sql.execute({
                query: `CREATE DATABASE ${APP_DB_NAME}`
            })
        })

        const knex = Knex({
            client: 'mssql',
            connection: {
                host: APP_DB_HOST ,
                database: APP_DB_NAME,
                user: APP_DB_USER ,
                password: APP_DB_PASSWORD,
                requestTimeout: 200000,
                options: {
                    useUTC: false,
                    packetSize: 16384,
                    enableArithAbort: true
                }
            }
        })
    
        await knex.migrate.latest()
        return process.exit(0)
    } catch(err) {
        console.log(err)
    }
    
}

run()