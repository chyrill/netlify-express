module.exports = async() => {
    try {
           let result = await knex('dbo.Billings').select(
               'dbo.Billings.Bill as FBA',
               'dbo.BillStatus.SName as status',
               'dbo.Billings.B2 as FBA2',
               'dbo.Billings.B3 as FBA3',
               'dbo.Billings.B4 as FBA4',
               'dbo.Billings.B5 as FBA5',
               'dbo.Billings.B6 as FBA6',
               'dbo.Billings.B7 as FBA7'
               )
               .leftJoin('dbo.BillStatus', 'dbo.Billings.EStatus', 'dbo.BillStatus.SID')
               .where({ 'dbo.Billings.EStatus': 1 })
            
            return result
    } catch(err) {
        throw new Error(err.message)
    }
}