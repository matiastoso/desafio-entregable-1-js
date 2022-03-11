let mensaje = '¿Qué producto esta buscando? (Elija el número correspondiente al producto).';
let contador;
let resultado;
let productoAComprar;
let cantidadAComprar;

let btnComprarSuplementos = document.getElementById('btnComprarSuplementos');
let btnComprarEquipo = document.getElementById('btnComprarEquipo');
let btnComprarRopa = document.getElementById('btnComprarRopa');

function totalAPagar(unidadesSolicitadas, precio) {
    let resultado = unidadesSolicitadas * precio;
    return 'El total a pagar es de $' + resultado;
};

function iterarProductos (categoria, filtrado) {
    html = `<strong>${categoria}:\n</strong>`;
    contador = 1;
    resultado = productos.filter( (producto) => producto.categoria.includes(filtrado));
    for (const producto of resultado) {
        html += `<li><p>${producto.nombre} $${producto.precio}</li>\n`;
        document.getElementById('lista').innerHTML = html;
    }
}

function mostrarTotal (productoA, productoB, productoC) {
    productoAComprar = parseInt(prompt(mensaje));
    cantidadAComprar = parseInt(prompt('¿Cuantos productos desea comprar?'));

    if (productoAComprar == 1) {
        alert(totalAPagar(productoA.precio, cantidadAComprar));
    } else if (productoAComprar == 2) {
        alert(totalAPagar(productoB.precio, cantidadAComprar));
    } else if (productoAComprar == 3) {
        alert(totalAPagar(productoC.precio, cantidadAComprar));
    }
}

function mostrarSuplementos () {
    iterarProductos('Suplementos', 'suplementos');
    // setTimeout(mostrarTotal, 1000, producto1, producto2, producto3);
}

function mostrarEquipo () {
    iterarProductos('Equipo de gimnasio', 'equipo-gimnasio');
    // setTimeout(mostrarTotal, 1000, producto4, producto5, producto6);
}

function mostrarRopa () {
    iterarProductos('Ropa deportiva', 'indumentaria');
    // setTimeout(mostrarTotal, 1000, producto7, producto8, producto9);
}
let alertas = ['Hola! Bienvenido a la tienda Matfit', 'Somos una tienda en línea de suplementos, equipo de gimnasio y ropa deportiva', '¡Gracias por elegirnos!'];
for (alerta of alertas) {
    alert(alerta);
}

btnComprarSuplementos.addEventListener('click', mostrarSuplementos);
btnComprarEquipo.addEventListener('click', mostrarEquipo);
btnComprarRopa.addEventListener('click', mostrarRopa);