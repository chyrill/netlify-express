const express = require('express') 

require('./configurations/database')
require('./configurations/database-ymb')
require('./scheduled-jobs')

const app = express()

const migrate = require('./services/migrate')
const PORT = process.env.PORT || 3000

require('./api')(app)

app.get('', (req, res) => {
    res.send('scheduler is alive')
})

app.get('/migrate', async(req, res) => {
    await migrate()

    res.send('Migrating files now . . . ')
})

app.listen(PORT, () => {
    console.log(`
    =======================================
    SCHEDULER IS WORKING . . . . 
    =======================================
    `)
})
