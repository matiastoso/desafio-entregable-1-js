class Producto {
    constructor (nombreProducto, precioProducto, categoriaProducto, ofertaRelampago) {
        this.nombre = nombreProducto;
        this.precio = precioProducto;
        this.categoria = categoriaProducto;
        this.oferta = ofertaRelampago;
    }

    esEconomico () {
        return this.precio < 3000;
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


let producto1 = new Producto ('Whey Protein ENA Sport 930g', 3800, 'suplemento', false),
    producto2 = new Producto ('Whey Protein HardCore 1kg', 950, 'suplemento', false),
    producto3 = new Producto ('Platinum Whey Protein Star Nutricion 3kg', 10900, 'suplemento', false),
    producto4 = new Producto ('Whey Protein Xtrenght Nutrition 1kg', 3125, 'suplemento', false),
    producto5 = new Producto ('Set Barra + 2 Mancuernas + 30 Kg en discos', 13400, 'equipo-gimnasio', false),
    producto6 = new Producto ('Soga para saltar aluminio Crossfit / Boxeo', 999, 'equipo-gimnasio', false),
    producto7 = new Producto ('Barra Dominadas con gancho', 5600, 'equipo-gimnasio', false),
    producto8 = new Producto ('Bicicleta De Spinning Jdm Sports Es 7801', 27000, 'equipo-gimnasio', false),
    producto9 = new Producto ('Zapatillas Hombre Deportiva Basto', 3750, 'ropa-deportiva', false),
    producto10 = new Producto ('Jaguar 4325 Hombre Adultos', 6300, 'ropa-deportiva', false),
    producto11 = new Producto('Conjunto Puma Individualrise Hombre', 11400, 'ropa-deportiva', false),
    producto12 = new Producto('Buzo Con Capucha Essentials Mujer', 11999, 'ropa-deportiva', false);

const listadoProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12];
for (const producto of listadoProductos) {
    contador++;
    subirlocalStorage(contador, JSON.stringify(producto));

    console.log(producto.nombre + ' ' + producto.precio);
}
