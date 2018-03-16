
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('resolutions', (table) => {
            table.increments('id').primary()
            table.text('dueDate')
            table.text('resolution')
        })
    ])
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('resolutions')
}
