function Productos (nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
}

let producto1 = new Productos ('Proteina WHEY', 1250, 'suplementos');
let producto2 = new Productos ('Creatina', 1550, 'suplementos');
let producto3 = new Productos ('Pre-entreno', 1700, 'suplementos');

let producto4 = new Productos ('Barra para dominadas', 6050, 'equipo-gimnasio');
let producto5 = new Productos ('Soga de saltar', 700, 'equipo-gimnasio');
let producto6 = new Productos ('Pesa rusa', 1100, 'equipo-gimnasio');

let producto7 = new Productos ('Zapatillas running', 7800, 'indumentaria');
let producto8 = new Productos ('Conjunto deportivo', 9000, 'indumentaria');
let producto9 = new Productos ('Musculosa GYM', 2300, 'indumentaria');

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9];