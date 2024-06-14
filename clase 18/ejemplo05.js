let now = new Date();
alert(now) //muestra en pantalla hora actual

const dia = new Date();
const hours = dia.getHours();

console.log(hours); //se ve la hora

const nombre = prompt('Escribir un nombre', '');


const today = new Date();
const hrs = today.getHours();

console.log(hrs);

if (hrs < 12) {
    document.write('Buenos dias ' + nombre + '!')
    console.log(`Buenos días  ${nombre} !!`)
} else {
    if (hrs >= 12 && hrs <= 19) {
        document.write('Buenos tardes ' + nombre + '!')
        console.log(`Buenos tardes  ${nombre} !!`)
    } else {
        document.write('Buenos noches ' + nombre + '!')
        console.log(`Buenos noches  ${nombre} !!`)
    }
}

