const express = require('express') 

require('./configurations/database')
require('./scheduled-jobs')

const app = express()

app.get('', (req, res) => {
    res.send('scheduler is alive')
})

app.listen(3000, () => {
    console.log(`
    =======================================
    SCHEDULER IS WORKING . . . . 
    =======================================
    `)
})
