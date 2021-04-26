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
            dropboxToken: process.env.DROPBOX_TOKEN
    }
}



module.exports = {
    ...defaultConfig(process.env.NODE_ENV)
}