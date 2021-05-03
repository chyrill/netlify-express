module.exports = {
    StatusService: {
        getlist: async() => {
            try {
                let status = await knexYMB('tblStatus').select('*')
    
                return status
            } catch(err) {
                throw err
            }
        }
    }
}