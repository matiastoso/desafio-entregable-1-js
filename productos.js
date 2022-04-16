class Producto {
    constructor (nombreProducto, precioProducto, url, categoriaProducto, ofertaRelampago) {
        this.nombre = nombreProducto;
        this.precio = precioProducto;
        this.url = url;
        this.categoria = categoriaProducto;
        this.oferta = ofertaRelampago;
    }
    
    cuarentaOff () {
        return (this.precio) - (this.precio * 40 / 100)
    }

    relampago (oferta) {
        return this.precio / 2
    }
}

const subirlocalStorage = (clave, valor) => {localStorage.setItem(clave, valor)};
let contador = 0;


let producto1 = new Producto ('Whey Protein ENA Sport 930g', 3800, 'images/producto1.jpg', 'suplemento', false),
    producto2 = new Producto ('Whey Protein HardCore 1kg', 950, 'images/producto2.png', 'suplemento', true),
    producto3 = new Producto ('Platinum Whey Protein Star Nutricion 3kg', 10900, 'images/producto3.jpg', 'suplemento', true),
    producto4 = new Producto ('Whey Protein Xtrenght Nutrition 1kg', 3125, 'images/producto4.jpg', 'suplemento', false),
    producto5 = new Producto ('Set Barra + 2 Mancuernas + 30 Kg en discos', 13400, 'images/producto5.jpg', 'equipo-gimnasio', true),
    producto6 = new Producto ('Soga para saltar aluminio Crossfit / Boxeo', 999, 'images/producto6.jpg', 'equipo-gimnasio', false),
    producto7 = new Producto ('Barra Dominadas con gancho', 5600, 'images/producto7.png', 'equipo-gimnasio', true),
    producto8 = new Producto ('Bicicleta De Spinning Jdm Sports Es 7801', 27000, 'images/producto8.jpg', 'equipo-gimnasio', true),
    producto9 = new Producto ('Zapatillas Hombre Deportiva Basto', 3750, 'images/producto9.jpg', 'ropa-deportiva', false),
    producto10 = new Producto ('Jaguar 4325 Hombre Adultos', 6300, 'images/producto10.jpg', 'ropa-deportiva', true),
    producto11 = new Producto('Conjunto Puma Individualrise Hombre', 11400, 'images/producto11.jpg', 'ropa-deportiva', false),
    producto12 = new Producto('Buzo Con Capucha Essentials Mujer', 11999, 'images/producto12.jpg', 'ropa-deportiva', false);

const listadoProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12];
for (const producto of listadoProductos) {
    contador++;
    subirlocalStorage(contador, JSON.stringify(producto));
}
