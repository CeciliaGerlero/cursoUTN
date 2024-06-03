function allParrafo() {
    const all = document.getElementsByTagName('p');

    console.log(all)

    const num = all.length;
    console.log(num)

    alert(`hay ${num} elementos p dentro del doc`)
}

// allParrafo();

function caja1P() {
    const caja1 = document.getElementById('caja1');
    console.log(caja1) //caja con el borde azul

    const caja1p = caja1.getElementsByTagName('p');
    console.log(caja1p) //las p de las caja de borde azul
    const num = caja1p.length;
    console.log(num); //5
}


function caja2P() {
    const caja2 = document.getElementById('caja2');
    console.log(caja2) //caja con el borde azul

    const caja2p = caja2.getElementsByTagName('p');
    console.log(caja2p) //las p de las caja de borde azul
    
    const num = caja2p.length;
    console.log(num); //5
}
// caja1P();
caja2P();