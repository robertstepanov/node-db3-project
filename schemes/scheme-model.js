const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  findSteps
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function add(scheme) {
  return db("schemes").insert(scheme, "id");
}

function update(id, changes) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}

// function findSteps(id) {
//   return db("schemes")
//     .where({ id })
//     .first();
// }

// function findSteps(id) {
//   return db("schemes")
//     .join("schemes", "schemes.scheme_name", "steps.scheme_name")
//     .select("steps.step_number", "schemes.scheme_name")
//     .where("scheme_name", id);
// }

// select schemes.scheme_name, steps.id, steps.instructions from schemes
// inner join steps
// on schemes.id = steps.scheme_id

function findSteps(id) {
  return db("schemes")
    .select("schemes.scheme_name", "steps.instructions")
    .join("steps", "schemes.id", "steps.scheme_id")
    .where("schemes.id", id);
}

// .join("steps", "steps.id", "schemes.steps.id")
