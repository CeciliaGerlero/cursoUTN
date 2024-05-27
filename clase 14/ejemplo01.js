const nombre = prompt('Íngrese su nombre', '');
const nota = parseInt(prompt('Íngrese su nota',''));

if (Number.isNaN(nota)) {
    document.write('Las nota ingresada es válida')

} else if (nota >= 4) {
    document.write('${nombre} estás aporbada con un ${nota}');
    console.log('${nombre} estás aporbada con un ${nota}');

}
else {
    document.write('${nombre} no estás aprrbada, tu nota es un ${nota}');
    console.log('${nombre} no estás aporbada, tu nota es un ${nota}');
}