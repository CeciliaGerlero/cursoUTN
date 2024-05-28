const mes = parseInt(prompt(`íngrese mes del año`, ``));

if (mes == 1 || mes == 2 || mes == 3) {
    console.log('corresponde al primer trimestre')
} else if (mes == 4 || mes == 5 || mes == 6) {
    console.log('corresponde al segundo trimestre')
} else if (mes == 7 || mes == 8 || mes == 9) {
    console.log('corresponde al tercer trimestre')
} else {
    console.log('corresponde al último trimestre')
}


console.log(mes);