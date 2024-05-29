function validarForm() {
    const nombreValido = true;
    const passwordValido = validarLargo(document.form.text1.value, 5);
    console.log(nombreValido, passwordValido)
    const resultado = nombreValido && passwordValido;

    

    if (resultado) {
        alert('Es VALIDO')
    }
    else {
        alert('INVALIDO')
    }
}


function validarLargo(texto, LargoRequerido) {
    return texto.length >= LargoRequerido
}