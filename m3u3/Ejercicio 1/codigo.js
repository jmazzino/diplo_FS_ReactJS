const distancia = prompt('Ingrese la distancia:', ''); // prompt > Cada vez que necesitamos ingresar un dato con esta función, aparece una ventana donde cargamos el valor.

if (distancia > 0 && distancia < 1000) {
    document.write(`La distancia ingresada es ${distancia} `)
    document.write(`Se recomienda ir a PIE`)
} else if (distancia > 1000 && distancia < 10000) {
    document.write(`La distancia ingresada es  ${distancia} `)
    document.write(`Se recomienda ir en BICICLETA`)
} else if (distancia > 10000 && distancia < 30000) {
    document.write(`La distancia ingresada es  ${distancia} `)
    document.write(`Se recomienda ir en COLECTIVO`)
}
else if (distancia > 30000 && distancia < 100000) {
    document.write(`La distancia ingresada es  ${distancia} `)
    document.write(`Se recomienda ir en AUTO`)
}
else if (distancia > 100000) {
    document.write(`La distancia ingresada es  ${distancia} `)
    document.write(`Se recomienda ir en AVION`)
}