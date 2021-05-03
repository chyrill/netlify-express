const moment = require('moment')

module.exports = async({ dateFrom, dateTo }) => {
    try {
        let list = await knexYMB('tblAppointment')
            .select(
                'tblAppointment.*',
                'tblStatus.name as statusName',
                'tblStatus.color as statusColor'
            )
            .leftJoin('tblStatus', 'tblStatus.id', 'tblAppointment.status')
            .whereBetween('appointmentDate', [new Date(moment.unix(dateFrom)), new Date(moment.unix(dateTo))])
        
        let fbas = await knexYMB('tblFBA')
            .select('*')
            .whereIn('appId', list.map(x => x.id))
        
        let result = []

        for(let appointment of list) {
            let fbaList = fbas.filter(x => x.appId === appointment.id)
            console.log(fbaList)
            result.push({
                id: appointment.id,
                FBAs: fbaList.map(x => x.FBA),
                appoinmentDate: appointment.appointmentDate,
                status: appointment.statusName,
                color: appointment.statusColor,
                trailerId: appointment.trailerId
            })
        }

        return result
    } catch(err) {
        throw err
    }
}