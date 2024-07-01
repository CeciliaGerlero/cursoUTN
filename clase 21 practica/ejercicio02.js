const numeros=[ 100,25,1250,8,16]

let mayor=0;

console.log(numeros)
console.log(numeros[2])

for(let i=0; i< numeros.length; i++){
    if(numeros[i] > mayor){
        mayor=numeros[i]
    }
}