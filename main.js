// funcion constructora
function Productos (nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
}

// suplementos
let producto1 = new Productos ('Proteina WHEY', 1250, 'suplementos');
let producto2 = new Productos ('Creatina', 1550, 'suplementos');
let producto3 = new Productos ('Pre-entreno', 1700, 'suplementos');

// equipo de gimnasio
let producto4 = new Productos ('Barra para dominadas', 6050, 'equipo-gimnasio');
let producto5 = new Productos ('Soga de saltar', 700, 'equipo-gimnasio');
let producto6 = new Productos ('Pesa rusa', 1100, 'equipo-gimnasio');

// ropa deportiva
let producto7 = new Productos ('Zapatillas running', 7800, 'indumentaria');
let producto8 = new Productos ('Conjunto deportivo', 9000, 'indumentaria');
let producto9 = new Productos ('Musculosa GYM', 2300, 'indumentaria');

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9];

// variables necesarias para las funciones
let mensaje = 'Productos:\n';
let contador;
let resultado;
let productoAComprar;
let cantidadAComprar;

// funcion que devuelve el resultado
function totalAPagar(unidadesSolicitadas, precio) {
    let resultado = unidadesSolicitadas * precio;
    return 'El total a pagar es de $' + resultado;
};

function iterarProductos (categoria, filtrado) {
    mensaje = categoria + '\n';
    contador = 1;
    resultado = productos.filter( (producto) => producto.categoria.includes(filtrado));

    for (const producto of resultado) {
        mensaje += contador++ + '. ' + producto.nombre + ' $' + producto.precio + '\n';
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
            iterarProductos('Suplementos', 'suplementos')
            mostrarTotal(producto1, producto2, producto3)
            break;
        
        case 2:
            iterarProductos('Equipo de gimnasio', 'equipo-gimnasio');
            mostrarTotal(producto4, producto5, producto6)
            break;

        case 3:
            iterarProductos('Ropa deportiva', 'indumentaria');
            mostrarTotal(producto7, producto8, producto9)
            break;

        default:
            alert('Error!');
        break;
    }
}

// ALERTAS
alert('Hola! Bienvenido a la tienda Matfit');
alert('Somos una tienda en línea de suplementos, equipo de gimnasio y ropa deportiva');
alert('¿Qué productos está buscando?');


let seguirComprando = 'si';
while (seguirComprando == 'si') {
    let productoBuscado = parseInt(prompt('Categorias: \n1. Suplementos.\n2. Equipo de gimnasio.\n3. Ropa deportiva.'));

    if ((productoBuscado != '') && (productoBuscado > 0) && (productoBuscado < 4)) {
        mostrarProductos(productoBuscado);
        seguirComprando = prompt('Desea seguir comprando? Escriba "si"')
    } else {
        alert('Error! Ingrese un número valido.');
    }
}