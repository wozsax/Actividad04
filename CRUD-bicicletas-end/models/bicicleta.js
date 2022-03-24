const knex = require("../database/connection");

let Bicicleta = function (color, modelo, lat, lon) {
  this.color = color;
  this.modelo = modelo;
  this.lat = lat;
  this.lon = lon;
};

Bicicleta.prototype.toString = function () {
  return `Id: ${this.id}, color: ${this.color}`;
};

Bicicleta.allBicis = () => {
  // Realiza la consulta dentro de knex
  return knex.select("*").from("bicicletas");
};

Bicicleta.add = function (aBici) {
  return knex("bicicletas").insert({
    color: aBici.color,
    modelo: aBici.modelo,
    lat: aBici.lat,
    lon: aBici.lon,
  });
};

//Eliminar
Bicicleta.findById = function (aBiciId) {
  // let aBici = Bicicleta.allBicis.find((x) => x.id == aBiciId);
  // if (aBici) {
  //   return aBici;
  // } else {
  //   throw new Error(`No existe una bici con el id: ${aBiciId}`);
  // }
  return knex.select("*").from("bicicletas").where("id", aBiciId).first();
};

Bicicleta.removeById = function (aBiciId) {
  // for (let i = 0; i < Bicicleta.allBicis.length; i++) {
  //   if (Bicicleta.allBicis[i].id == aBiciId) {
  //     //Borrar
  //     Bicicleta.allBicis.splice(i, 1);
  //     break;
  //   }
  // }
  return knex("bicicletas").delete().where("id", aBiciId);
};

Bicicleta.update = (id, aBici) => {
  return knex("bicicletas")
    .update(aBici)
    .update("updated_at", knex.fn.now())
    .where("id", id);
};

module.exports = Bicicleta;
