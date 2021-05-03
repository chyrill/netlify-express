const { Router } = require('express')
const { StatusService } = require('../services/status')

const routes = Router()

routes.get('', async(req, res) => {
    try {
        let list = await StatusService.getlist()

        res.status(200).json({ list })
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = routes