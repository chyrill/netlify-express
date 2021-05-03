const moment = require('moment')
const uuid = require('uuid')

module.exports = async() => {
    try {
        let FBAs = await knex('dbo.Billings')
            .select(
                'DestID',
                'Bill',
                'ODate',
                'EStatus'
            )
            .whereBetween('ODate', [new Date(moment().startOf('month')), new Date(moment().endOf('month'))])
            .andWhere({ EStatus: 1 })
       
        let realFBA = FBAs.filter(x => x.Bill.substring(0,3) === 'FBA')

        let existingFBA = await knexYMB('tblFBA').select('*')
                .whereIn('FBA', realFBA.map(x => x.Bill))

        for(let fba of realFBA.filter(x => !existingFBA.map(y => y.FBA).includes(x.Bill))) {
            await knexYMB('tblFBA').insert({
                id: uuid.v4(),
                FBA: fba.Bill,
                isUsed: false,
                locationId: fba.DestID
            })
        }

        let locations = await knex('dbo.Destinations')
            .select('*')


        let existingLocations = await knexYMB('tblLocation').select('*')
            .whereIn('id', locations.map(x => x.DestID))

        for(let location of locations.filter(x => !existingLocations.map(y => y.id).includes(x.DestID))) {
            await knexYMB('tblLocation')
                .insert({
                    id: location.DestID,
                    location: location.Location,
                    companyName: location.CompanyNameMain,
                    address1: location.Address1,
                    address2: location.Address2
                })
        }        

        return true
    } catch(err) {
        throw err
    }
}