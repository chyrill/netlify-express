
exports.up = function(knex) {
    return knex.schema.createTable('tblStatus', table => {
        table.integer('id')
        table.string('name')
        table.string('color')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tblStatus')
};
