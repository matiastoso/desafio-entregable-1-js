let contenedorProductos = document.getElementById('contenedorProductos');
const tbodyCarrito = document.querySelector('#contenedorCarrito tbody');
const tfootCarrito = document.querySelector('#contenedorCarrito tfoot');

function vaciarContenedorProductos () {
    contenedorProductos.innerHTML = ``;
}

function mostrarProductos (productos) {
    productos.forEach( (producto) => {
        let precioRebajado = '';
        if (producto.oferta) {
            precioRebajado = producto.cuarentaOff();

            let productoNuevo = document.createElement('article');
            productoNuevo.className = 'col-12 col-md-4 text-center my-4';
            productoNuevo.innerHTML = `
            <img class="producto__img" src="${producto.url}" alt="${producto.nombre}">
            <h3 class="d-inline">$${precioRebajado}</h3> <sup class="text-muted fs-6 text-decoration-line-through">$${producto.precio}</sup>
            <p>${producto.nombre}</p>
            <button class="btn btn-success btn-sm">Añadir a carrito</button>`;
        
        contenedorProductos.append(productoNuevo)

        } else {
            let productoNuevo = document.createElement('article');
            productoNuevo.className = 'col-12 col-md-4 text-center my-4';
            productoNuevo.innerHTML = `
            <img class="producto__img" src="${producto.url}" alt="${producto.nombre}">
            <h3>$${producto.precio}</h3>
            <p>${producto.nombre}</p>
            <button class="btn btn-success btn-sm">Añadir a carrito</button>`;
            
            contenedorProductos.append(productoNuevo)
        }
    })
}

mostrarProductos(listadoProductos);

contenedorProductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        const nuevaCompra = document.createElement('tr');
        let imagen = e.target.parentElement.children[0].src;
        let precio = e.target.parentElement.children[1];
        let total = precio.innerHTML;
        total += precio;
        
        nuevaCompra.innerHTML = `<tr>
                                <th scope="row">1</th>
                                <td>
                                    <img style="width: 35px;" src="${imagen}" alt="Producto">
                                    </td>
                                    <td>${precio.innerHTML}</td>
                                </tr>`;
        tbodyCarrito.append(nuevaCompra);
        console.log(total)

        tfootCarrito.innerHTML = `<tr>
                                    <td class="text-end" colspan="2">
                                        Total:
                                    </td>
                                    <td>${precio}</td>
                                </tr>`;
    }
})

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