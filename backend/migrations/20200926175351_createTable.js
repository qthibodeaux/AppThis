const createNotesTable = `
CREATE TABLE Notes (
    id serial primary key,
    uuid text,
    content text, 
    time time, 
    date date, 
    place text, 
    phone_number text,
    ctime timestamptz,
    mtime timestamptz default current_timestamp
    );`

const dropNotesTable = `DROP TABLE "notes";`

exports.up = function(knex) {
    return knex.raw(createNotesTable)
  };
  
  exports.down = function(knex) {
    return knex.raw(dropNotesTable)
  };