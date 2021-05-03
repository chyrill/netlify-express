const { Router } = require('express')
const { FBAService } = require('../services/fba')

const routes = Router()

routes.get('/:destID', async(req, res) => {
    try {
        let { destID } = req.params

        let result = await FBAService.getlist(destID)

        res.status(200).json(result)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = routes