const nombre = prompt('Ingrese su nombre', '');
const distancia = parseInt(prompt('Ingrese la distancia', ''));
if (Number.isNaN(distancia)) {
    console.log('Debes ingresar un número')
} else if (distancia < 1000) {
    console.log(`${nombre}, para recorrer  ${distancia} mts lo puede hacer a pie`)
} else if (distancia >= 1000 && distancia < 10000) {
    console.log(`${nombre}, para recorrer  ${distancia} mts lo puedes hacer en bici`)
} else if (distancia >= 10000 && distancia < 300000) {
    console.log(`${nombre}, para recorrer  ${distancia} mts lo debes hacer en colectivo`)
}
else if (distancia >= 30000 && distancia < 1000000) {
    console.log(`${nombre}, para recorrer  ${distancia} mts lo debes hacer en auto`)
}
else {
    console.log(`${nombre}, para recorrer  ${distancia} mts lo debes hacer en avión`)
}
