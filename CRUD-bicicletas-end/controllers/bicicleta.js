const { allBicis } = require("../models/bicicleta");
const Bicicleta = require("../models/bicicleta");

exports.bicicleta_list = async (req, res) => {
  let allBicis = await Bicicleta.allBicis();
  res.render("bicicletas/index", { bicis: allBicis });
};

exports.bicicleta_create_get = function (req, res) {
  res.render("bicicletas/create");
};

exports.bicicleta_create_post = function (req, res) {
  let lat = parseFloat(req.body.lat).toFixed(6);
  let lon = parseFloat(req.body.lon).toFixed(6);
  let temp_bici = new Bicicleta(req.body.color, req.body.modelo, lat, lon);

  Bicicleta.add(temp_bici).then(() => res.redirect("/bicicletas"));
};

exports.bicicleta_delete_post = function (req, res) {
  Bicicleta.removeById(req.params.id).then(() => res.redirect("/bicicletas"));
};

exports.bicicleta_update_get = async (req, res) => {
  let bici = await Bicicleta.findById(req.params.id);
  res.render("bicicletas/update", { bici });
};

exports.bicicleta_update_post = async (req, res) => {
  let id = req.params.id;
  Bicicleta.findById(id).then((aBici) => {
    // Si el producto no existe entonces
    if (aBici == null) {
      // Regresa el error 404
      res.status(404).send("Not found");
      return;
    }

    // Define los datos del producto actualizado
    let lat = parseFloat(req.body.lat).toFixed(6);
    let lon = parseFloat(req.body.lon).toFixed(6);
    let updateBici = {
      color: req.body.color,
      modelo: req.body.modelo,
      lat: lat,
      lon: lon,
    };

    // Actualiza los datos del producto
    Bicicleta.update(id, updateBici).then(() => {
      // Al terminar redirige el índice
      res.redirect("/bicicletas");
    });
  });
};
