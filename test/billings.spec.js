const { BillingBO } = require('../app/services/billings/logic')
const assert = require('assert')

describe('billing service test case', async function() {
    
    it('should get all billings', async function() {
        require('../app/configurations/database')
        
        let result = await BillingBO.getallfba()
        
        assert.equal(result.length > 0, true, 'has retrieve data')
    }).timeout(0)

    it('should generate a csv file', async function() {
        require('../app/configurations/database')

        let exportCsv = require('../app/scheduled-jobs/export.fba.csv')

        await exportCsv()
    }).timeout(0)
})