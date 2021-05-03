const Joi = require('joi')

const createappointmentschema = Joi.object({
    appointmentDate: Joi.number().min(1).required().messages({ 'any.required': 'Appointment Date is required.', 'number.base': 'Appointment date is required.' }),
    fbaId: Joi.string().required().messages({ 'any.required': 'FBA is required.', 'string.base': 'FBA is required.', 'string.empty': 'FBA is required.' })
})


module.exports = {
    createappointmentschema
}