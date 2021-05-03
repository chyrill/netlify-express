const Joi = require('@hapi/joi')

module.exports = {
    requestmiddleware: (schema) => {
        return (req, res, next) => {
            let { error, value } = schema.validate(req.body)
          
            if(error)
                res.status(400).json({ message: error.details[0].message })
            else 
                next()
        }
    }
}