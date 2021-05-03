module.exports = async(destID) => {
    try {
        console.log(destID)
        let fbas = await knexYMB('tblFBA').select('*')
            .where({ locationId: destID, isUsed: false })

        return { list: fbas.map(x => {
            return {
                id: x.id,
                FBA: x.FBA
            }
        })}
    } catch(err) {
        throw err
    }
}