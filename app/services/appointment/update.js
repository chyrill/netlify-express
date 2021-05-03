const moment = require('moment')

module.exports = async({ id, appointmentDate, status, trailerId }) => {
    try {
        await knexYMB('tblAppointment')
            .update({
                appointmentDate: new Date(moment.unix(appointmentDate)),
                status,
                trailerId
            })
            .where({ id })

        return true
    } catch(err) {
        throw err
    }
}