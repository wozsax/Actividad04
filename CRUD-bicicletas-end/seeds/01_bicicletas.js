/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// seeds/01_products.js
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("bicicletas")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("bicicletas").insert([
        {
          id: "1",
          color: "rojo",
          modelo: "bmx",
          lat: 19.284771,
          lon: -99.137291,
        },
        {
          id: "2",
          color: "blanca",
          modelo: "Benotto",
          lat: 19.286055,
          lon: -99.136991,
        },
      ]);
    });
};
