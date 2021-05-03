const { Router } = require('express')

const { LocationService } = require('../services/location')

const routes = Router()

routes.get('', async(req, res) => {
    try {
        let result = await LocationService.getlist()

        res.status(200).json(result)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = routes