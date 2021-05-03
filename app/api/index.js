const cors = require('cors')
const bodyParser = require('body-parser')

const fbaRoutes = require('./fba.routes')
const locationRoutes = require('./location.routes')
const appointmentRoutes = require('./appointment.routes')
const statusRoutes = require('./status.routes')

module.exports = app => {
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))


    app.use('/api/v1/fba', fbaRoutes)

    app.use('/api/v1/location', locationRoutes)

    app.use('/api/v1/appointment', appointmentRoutes)

    app.use('/api/v1/status', statusRoutes)
}