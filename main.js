let mensaje = '¿Qué producto esta buscando? (Elija el número correspondiente al producto).';
let resultado;
let productoAComprar;
let cantidadAComprar;

const productos = [];

// trayendo productos del localStorage
for (let i = 1; i <= localStorage.length; i++) {
    let producto = localStorage.getItem(i);
    productos.push(JSON.parse(producto))
}

let btnMostrarSuplementos = document.getElementById('btnComprarSuplementos');
let btnMostrarEquipo = document.getElementById('btnComprarEquipo');
let btnMostrarRopa = document.getElementById('btnComprarRopa');
let selectDeCompra = document.getElementById('opcionesDeCompra');
let btnRealizarCompra = document.getElementById('realizarCompra');

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
    cantidadAComprar = document.getElementById('cantidadAComprar').value;

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
}

function mostrarEquipo () {
    iterarProductos('Equipo de gimnasio', 'equipo-gimnasio');
}

function mostrarRopa () {
    iterarProductos('Ropa deportiva', 'indumentaria');
}

let alertas = ['Hola! Bienvenido a la tienda Matfit', 'Somos una tienda en línea de suplementos, equipo de gimnasio y ropa deportiva', '¡Gracias por elegirnos!'];
for (alerta of alertas) {
    alert(alerta);
}

btnMostrarSuplementos.addEventListener('click', mostrarSuplementos);
btnMostrarEquipo.addEventListener('click', mostrarEquipo);
btnMostrarRopa.addEventListener('click', mostrarRopa);

// function realizarCompra () {
//     mostrarTotal(productos[0], productos[1], productos[2]);
// }

// btnRealizarCompra.addEventListener('click', realizarCompra)