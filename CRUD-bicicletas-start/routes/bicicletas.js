let express = require('express')
let router = express.Router()
let bicicletaController = require('../controllers/bicicleta')

/* Listar las bicicletas */
router.get('/', bicicletaController.bicicleta_list);

// Añadir nueva bicicleta
router.get('/create', bicicletaController.bicicleta_create_get);
router.post('/create', bicicletaController.bicicleta_create_post);

router.post('/:id/delete', bicicletaController.bicicleta_delete_post)

router.get('/:id/update', bicicletaController.bicicleta_update_get)
router.post('/:id/update', bicicletaController.bicicleta_update_post)
module.exports = router;