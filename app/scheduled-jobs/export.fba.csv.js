const createCSVWriter = require('csv-writer').createObjectCsvWriter
const cvsWriter = createCSVWriter({
    path: 'output.csv',
    header: [
        { id: 'FBA', title: 'FBA' },
        { id: 'status', title: 'status' }
    ]
})

const { dropboxService } = require('../thirdparty/dropbox.api')

const { BillingBO } = require('../services/billings/logic')

module.exports = async() => {
    try {
        let data = await BillingBO.getallfba()

        await cvsWriter.writeRecords(data)
        
        await dropboxService.uploadfile('output.csv')
       
    } catch(err) {
        console.log(err)
    }
}