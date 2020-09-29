
exports.up = function(knex) {
  // First make projects
  knex.schema.createTable('project', tbl => {
      tbl.increments('id').unique();
      tbl.string('name', 128).notNullable();
      tbl.string('description' , 256);
      tbl.boolean('completed').defaultTo(false).notNullable();
  })
  .createTable('resource', tbl => {
      tbl.increments('id').unique();
      tbl.string('name',128).notNullable().unique();
      tbl.string('role',128);
  })
  .createTable('tasks', tbl => {
      tbl.increments('id').unique();
      tbl.string('description',128).notNullable();
      tbl.string('notes', 256);
      tbl.boolean('completed').defaultTo(false).notNullable();
      
  })
};

exports.down = function(knex) {
  
};
