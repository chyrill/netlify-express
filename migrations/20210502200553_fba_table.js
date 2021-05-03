
exports.up = function(knex) {
    return knex.schema.createTable('tblFBA', table => {
        table.string('id')
        table.string('FBA')
        table.string('locationId')
        table.boolean('isUsed')
        table.string('appId')
    })
    .createTable('tblLocation', table => {
        table.integer('id')
        table.string('location')
        table.string('companyName')
        table.string('address1')
        table.string('address2')
    })
    .createTable('tblAppointment', table => {
        table.string('id')
        table.timestamp('appointmentDate').default(knex.fn.now())
        table.string('trailerId')
        table.integer('status')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tblFBA')
        .dropTable('tblLocation')
        .dropTable('tblAppointment')
};
