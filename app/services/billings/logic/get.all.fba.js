const { BillingDataRepository } = require('../data/index')

module.exports = async() => {
    try {
        let data = []
        let billings = await BillingDataRepository.getall()
        
        billings.forEach(item => {
            data.push({ FBA: item.FBA, status: item.status })
            if(item.FBA2 !== null)
                data.push({ FBA: item.FBA2, status: item.status })
            if(item.FBA3 !== null)
                data.push({ FBA: item.FBA3, status: item.status })
            if(item.FBA4 !== null)
                data.push({ FBA: item.FBA4, status: item.status })
            if(item.FBA5 !== null)
                data.push({ FBA: item.FBA5, status: item.status })
            if(item.FBA6 !== null)
                data.push({ FBA: item.FBA6, status: item.status })
            if(item.FBA7 !== null)
                data.push({ FBA: item.FBA7, status: item.status })  
        })
        
        return data
    } catch(err) {
        throw new Error(err.message)
    }
}