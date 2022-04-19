let contenedorProductos = document.getElementById('contenedorProductos'),
    tbodyCarrito = document.querySelector('#contenedorCarrito tbody'),
    tfootCarrito = document.querySelector('#contenedorCarrito tfoot');

function vaciarContenedorProductos () {
    contenedorProductos.innerHTML = ``;
}

function mostrarProductos (productos) {
    let contador = 0;
    productos.forEach( (producto) => {
        let precioRebajado = '';
        if (producto.oferta) {
            contador++;
            precioRebajado = producto.cuarentaOff();

            let productoNuevo = document.createElement('article');
            productoNuevo.className = 'col-12 col-md-4 text-center my-4';
            productoNuevo.setAttribute('data-id', contador);
            productoNuevo.innerHTML = `
                                    <img class="producto__img" src="${producto.url}" alt="${producto.nombre}">
                                    <h3 class="d-md-inline">$${precioRebajado}</h3> <sup class="text-muted fs-6 text-decoration-line-through">$${producto.precio}</sup>
                                    <p>${producto.nombre}</p>
                                    <button class="btn btn-warning btn-sm">Añadir a carrito</button>`;
        
        contenedorProductos.append(productoNuevo)

        } else {
            contador++;
            let productoNuevo = document.createElement('article');
            productoNuevo.className = 'col-12 col-md-4 text-center my-4';
            productoNuevo.setAttribute('data-id', contador);
            productoNuevo.innerHTML = `
            <img class="producto__img" src="${producto.url}" alt="${producto.nombre}">
            <h3>$${producto.precio}</h3>
            <p>${producto.nombre}</p>
            <button class="btn btn-warning btn-sm">Añadir a carrito</button>`;
            
            contenedorProductos.append(productoNuevo)
        }
    })
}
mostrarProductos(listadoProductos)
contenedorProductos.addEventListener('click', agregarCompra);

let productosDelCarrito = [];
function agregarCompra (e) {
    if (e.target.classList.contains('btn')) {
        let imagen = e.target.parentElement.children[0].src,
            precio = e.target.parentElement.children[1].innerHTML;

        const nuevoProducto = {
            url: imagen,
            precio: parseInt(precio.slice(1))
        }

        productosDelCarrito.push(nuevoProducto);
        imprimirCompra(productosDelCarrito)
    }
}

function imprimirCompra (productos) {
    let total = 0;
    tbodyCarrito.innerHTML = ``;
    for (const producto of productos) {
        total += producto.precio
        const nuevaCompra = document.createElement('tr');
        nuevaCompra.innerHTML = `<tr>
                                 <th scope="row">1</th>
                                 <td>
                                     <img class="img-fluid" style="width: 35px;" src="${producto.url}" alt="Producto">
                                     </td>
                                     <td>$${producto.precio}</td>
                                 </tr>`;
        tbodyCarrito.append(nuevaCompra);

        tfootCarrito.innerHTML = `<tr>
                                     <td class="text-end" colspan="2">
                                         Total:
                                     </td>
                                     <td>$${total}</td>
                                 </tr>
                                 <tr>
                                     <td class="text-end" colspan="3">
                                         <button id="btnVaciarCarrito" class="btn btn-sm btn-danger">Vaciar carrito</button>
                                     </td>
                                 </tr>`;

        btnVaciarCarrito.addEventListener('click', () => {tbodyCarrito.innerHTML = ''; tfootCarrito.innerHTML = ''});
   }
}