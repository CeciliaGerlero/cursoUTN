const valor = parseInt(prompt('Ingrese un nro entre 1 y 5', ''));

switch (valor) {
    case 1:
        Document.write('hola soy el 1')
        break;
    case 2:
        Document.write('hola soy el 2')
        break;
    case 3:
        Document.write('hola soy el 3')
        break;
    case 4:
        Document.write('hola soy el 4')
        break;
    case 5:
        Document.write('hola soy el 5')
        break;
    default:
        Document.write('no está entre 1 y 5')
        break;
}