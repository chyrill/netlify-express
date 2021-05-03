
exports.up = function(knex) {
    return knex('tblStatus').insert([
        { id: 1, name: 'pending', color: 'blue' },
        { id: 2, name: 'confirmed', color: 'green' },
        { id: 3, name: 'assigned', color: 'red' },
        { id: 4, name: 'dispatched', color: 'cyan' },
        { id: 5, name: 'delivered', color: 'yellow' },
        { id: 6, name: 'completed', color: 'indigo' }
    ])
};

exports.down = function(knex) {
    return knex('tblStatus').delete()
};
