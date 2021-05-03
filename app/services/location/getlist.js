module.exports = async() => {
    try {
        let list = await knexYMB('tblLocation')
            .select('*')

        return {
            list: list.map(x => {
                return {
                    id: x.id,
                    location: `${x.companyName} ${x.address1} ${x.address2}`
                } 
            })
        }
    } catch(err) {
        throw err
    }
}