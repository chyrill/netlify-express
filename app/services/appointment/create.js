const uuid = require('uuid')
const moment = require('moment')

module.exports = async({ appointmentDate, fbaId }) => {
    try {
        if(parseInt(moment().startOf('day').format('X')) > parseInt(appointmentDate)) throw new Error('Appointment date should be in the future.')
        let id = uuid.v4()
        let createRes = await knexYMB('tblAppointment').insert({
            id,
            appointmentDate: new Date(moment.unix(parseInt(appointmentDate))),
            status: 1
        })

        console.log(createRes)

        await knexYMB('tblFBA').update({ isUsed: true, appId: id }).where({ id: fbaId })

        return true
    } catch(err) {
        throw err
    }
}