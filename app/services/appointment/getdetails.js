module.exports = async(id) => {
    try {
        let appointments = await knexYMB('tblAppointment')
            .select('*')
            .where({ id })

        if(appointments.length <= 0) throw new Error('Appointment not found.')

        let appointment = appointments[0]

        let fbas = await knexYMB('tblFBA').select('*')
            .where({ appId: appointment.id })

        return {
            id: appointment.id,
            FBAs: fbas.map(x => x.FBA),
            appointmentDate: appointment.appointmentDate,
            status: appointment.status,
            trailerId: appointment.trailerId
        }
        
    } catch(err) {
        throw err
    }
}