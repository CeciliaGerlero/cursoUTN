const frutas = ['manzana', 'banana', 'palta','pera'];
console.log(frutas);
document.write(frutas);
console.log(frutas[1]);

for(let i= 0; i<frutas.length; i++){
    console.log('Tenemos ' + frutas[i]);
    document.write('Tenemos ' + frutas[i] + "<br/>")
}