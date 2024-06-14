let a, b,c;

[a,b]=[10,20]

console.log(a); // muestra 10
console.log(b);// muestra 20

[a,b,...resto]= [10,20,30,40,50]
console.log(resto); // muestra el resto

const vocales= ['a','e','i'];
console.log(vocales);

const vocalesCompletas = [...vocales, 'o','u'];
console.log(vocalesCompletas);