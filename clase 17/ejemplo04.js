const frutas = ['paltas', 'sandia', 'uva', 'anana', 'kiwi'];

console.log(frutas)

console.log(frutas.sort())

const frutasordenadas = frutas.sort();
console.log(frutasordenadas)
const frutarordenadasrevez = frutas.sort().reverse();
console.log(frutarordenadasrevez)


const numeros = [56, 34, 78, 3, 23, 4];

const numerordenados = numeros.sort(function (a, b) {
    return a - b

})
console.log(numerordenados);

const numerordenadorevez = numeros.sort(function (a, b) {
    return b - a

})

console.log(numerordenadorevez);