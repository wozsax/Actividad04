let Bicicleta = function(id, color, modelo, ubicacion) {
    this.id = id
    this.color = color 
    this.modelo = modelo
    this.ubicacion = ubicacion
}

Bicicleta.prototype.toString = function() {
    return `id: ${this.id} | color: ${this.color}`
}

Bicicleta.allBicis = []

Bicicleta.add = function(aBici) {
    Bicicleta.allBicis.push(aBici)
}

// Añadir un par de bicis:
let b1 = new Bicicleta(1, 'rojo', 'bmx', [19.284076, -99.1355524])
let b2 = new Bicicleta(2, 'blanca', 'bmx', [20.284076, -99.1355524])

Bicicleta.add(b1)
Bicicleta.add(b2)

// Eliminar
Bicicleta.findById = function(aBiciId) {
    let aBici = Bicicleta.allBicis.find( x => x.id == aBiciId)
    if (aBici) {
        return aBici
    }
    else {
        throw new Error(`No existe una bicicleta con el id: ${aBiciId}`)
    }
}

Bicicleta.removeById = function(aBiciId) {
    for (let i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id == aBiciId) {
            Bicicleta.allBicis.splice(i, 1)
            break
        }
    }
}

module.exports = Bicicleta