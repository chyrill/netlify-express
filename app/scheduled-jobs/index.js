const cron = require('node-schedule-tz')

const exportCSV = require('./export.fba.csv')

cron.scheduleJob('* * 1 * * *', 'America/New_York', async() => {
    await exportCSV()
})


module.exports = cron