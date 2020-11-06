
exports.up = async function(knex) {
    await knex.schema.createTable("fruits", (table)=> {
        table.increments()
        table.text("name").notNullable()
        table.text("flavorLevel")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("fruits")
  
};
