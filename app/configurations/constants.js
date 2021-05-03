const defaultConfig = () => {
    switch(process.env.NODE_ENV) {
        case 'development':
            require('dotenv').config({ path: '.env.dev'})
            break
        case 'test':
            require('dotenv').config({ path: '.env.test'})
            break
        default:
            require('dotenv').config()
            break
    }
    const { APP_DB_HOST, APP_DB_NAME, APP_DB_USER, APP_DB_PASSWORD } = process.env
    return {
            databaseConfig: {
                client: 'mssql',
                connection: {
                    host: process.env.DB_HOST ,
                    database: process.env.DB_NAME,
                    user: process.env.DB_USERNAME ,
                    password: process.env.DB_PASSWORD,
                    requestTimeout: 200000,
                    options: {
                        useUTC: false,
                        packetSize: 16384,
                        enableArithAbort: true,
                        tdsVersion: '7_1'
                    }
                }
            },
            dropboxToken: process.env.DROPBOX_TOKEN,
            databaseConfigYMB: {
                client: 'mssql',
                connection: {
                    host: APP_DB_HOST ,
                    database: APP_DB_NAME,
                    user: APP_DB_USER ,
                    password: APP_DB_PASSWORD,
                    requestTimeout: 200000,
                    options: {
                        encrypt: true,
                        useUTC: false,
                        packetSize: 16384,
                        enableArithAbort: true,
                        tdsVersion: '7_1'
                    }
                }
            }
    }
}



module.exports = {
    ...defaultConfig(process.env.NODE_ENV)
}