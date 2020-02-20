## A good data model

- captures ALL the data needed by the system
- captures ONLY the data neede by the system
- reflects reality (from the point of view of the system)
- is flexible (can evolve with the needs of the system)
- guarantee data integrity
- is driven by the way we access the data

## Components

- entities (resources): nouns --> tables
- properties (column, fields, attributes) --> columns
- relationships --> foreign keys

## Workflow

- identify entities (resources): nouns --> tables
- identify relationships --> foreign keys
- identify properties (column, fields, attributes) --> columns

## Relationships

- one to one: rare
- one to many: this is the most common type
- many to many: smoke and mirrors, a trick!

## Mantras

- Every table must have a Primary Key (PK)
- Work on **two or three** entities at a time
- _one to many_ relationship requires a `Foreign Key`
- The `FK` goes on the **many** side of relationship
- _many to many_ requires a **third table**
- The third table can have other columns

knex migrate:make bugtracker_tables

exports.up = function(knex) {
return knex.schema.createTable('roles', tbl => {
tbl.increments();

    tbl.string('name', 255).notNullable().unique();

tbl.string('name', 255).notNullable().unique();

})

.createTable('employees', tbl => {
tbl.increments();
tbl.string('name', 255).notNullable();

// Foreign Key
tbl.integer('role_id')
.unsigned()
.notNullable()
.references('id')
.inTable('roles')
.onDelete('RESTRICT') // CASCADE, RESTRICT, DO NOTHING, SET NULL
.onUpdate('CASCADE') //
})

.createTable('tickets', tbl => {
tbl.increments();

    tbl.string('description', 255).notNullable();

})

.creatTable('employee_tickets', tbl => {
tbl.primary(['ticket_id', 'employee_id'])
.unsigned()
.notNullable()
.references('id')
.inTable(tickets')

tbl.integer('employee_id')
.unsigned()
.notNullable()
.references('id')
.inTable('employees')
})
}

exports.down = function(knex) {

}
