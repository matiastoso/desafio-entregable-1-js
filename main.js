let mensaje = '¿Qué producto esta buscando? (Elija el número correspondiente al producto).';
let contador;
let resultado;
let productoAComprar;
let cantidadAComprar;
let btnComprar = document.getElementById('btnComprar');

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
        document.getElementById('contenedor').innerHTML = html;
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
        alert(totalAPagar(productoC.precio, cantidadAComprar))
    }
}

function mostrarProductos(categoria) {
    switch (categoria) {
        case 1:
            iterarProductos('Suplementos', 'suplementos');
            setTimeout(mostrarTotal, 1000, producto1, producto2, producto3);
            break;
        
        case 2:
            iterarProductos('Equipo de gimnasio', 'equipo-gimnasio');
            setTimeout(mostrarTotal, 1000, producto4, producto5, producto6);
            break;

        case 3:
            iterarProductos('Ropa deportiva', 'indumentaria');
            setTimeout(mostrarTotal, 1000, producto7, producto8, producto9);
            break;

        default:
            alert('Error!');
        break;
    }
}

let alertas = ['Hola! Bienvenido a la tienda Matfit', 'Somos una tienda en línea de suplementos, equipo de gimnasio y ropa deportiva', '¿Qué productos está buscando?'];
for (alerta of alertas) {
    alert(alerta);
}

function realizarCompra () {
    let productoBuscado = parseInt(prompt('Categorias: \n1. Suplementos.\n2. Equipo de gimnasio.\n3. Ropa deportiva.'));
    if ((productoBuscado != '') && (productoBuscado > 0) && (productoBuscado < 4)) {
        mostrarProductos(productoBuscado);
    } else {
        alert('Error! Ingrese un número valido.');
    }
}

btnComprar.addEventListener('click', realizarCompra);