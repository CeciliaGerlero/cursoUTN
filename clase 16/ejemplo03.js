const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function (e) {

    e.currentTarget();

    if (e.currentTarget.nombre.value == '') {
        alert('El campo nombre es requerido');
        return;
    }
    if (e.currentTarget.mensaje.value == '') {
        alert('El campo mensaje es requerido');
        return;
    }


alert(`Gracias ${e.currentTraget.nombre.value} por enviarnos el siguiente mensaje: ${ e.currentTarget.mensaje.value}`)

})
