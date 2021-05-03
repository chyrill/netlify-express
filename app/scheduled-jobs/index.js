const cron = require('node-schedule-tz')
const migrate = require('../services/migrate')

cron.scheduleJob('* * 1 * *', async() => {
    console.log('migrating files . . . ')
    await migrate()
})

module.exports = cron