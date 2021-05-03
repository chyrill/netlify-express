const { Router } = require('express')
const { AppointmentService } = require('../services/appointment')
const { requestmiddleware } = require('../configurations/middlewares')
const { schemas } = require('../schemas')

const routes = Router()

routes.get('', async(req, res) => {
    try {
        let { dateFrom, dateTo}  = req.query

        let result = await AppointmentService.getlist({ dateFrom, dateTo })

        res.status(200).json({result})
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

routes.post('', requestmiddleware(schemas.createappointmentschema), async(req, res) => {
    try {
        
        await AppointmentService.create(req.body)

        res.status(200).json({ message: 'successful' })
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

routes.get('/:id', async(req, res) => {
    try {
        let { id } = req.params

        let result = await AppointmentService.getdetails(id)

        res.status(200).json({ result })
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

routes.put('/:id', async(req, res) => {
    try {
        let { id } = req.params

        let result = await AppointmentService.update({ id, ...req.body })

        res.status(200).json({ message: 'Successful' })
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = routes