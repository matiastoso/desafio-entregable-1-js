/* 
    Necesito crear un algoritmo que:
    1) De un mensaje de bienvenida.
    2) Muestre la categoria de productos disponibles.
    3) Ingrar a la categoria deseada.
    4) Mostrar el menu que corresponda a la categoria elegida
    5) Preguntar que desea comprar del menu
    6) Calcular cuanto se debe a pagar de acuerdo al precio y cantidad a comprar
    7) Esto se repetira en un bucle hasta que el usuario lo desee
*/

function totalAPagar(unidadesSolicitadas, precio) {
    let resultado = unidadesSolicitadas * precio;
    return 'El total a pagar es de $' + resultado;
};

function operacionDeCompra(producto1, precio1, producto2, precio2, producto3, precio3) {
    let productoElegido = prompt('Menu:\n 1. ' + producto1 + ' $' + precio1 + '\n 2. ' + producto2 + ' $' + precio2 + '\n 3. ' + producto3 + ' $' + precio3);
    let precio;
    
    switch (parseInt(productoElegido)) {
        case 1:
            alert(totalAPagar(prompt('¿Cuantos productos desea?'), precio1));
            break;

        case 2:
            alert(totalAPagar(prompt('¿Cuantos productos desea?'), precio2));
            break;

        case 3:
            alert(totalAPagar(prompt('¿Cuantos productos desea?'), precio3));
            break;
    
        default:
            alert('Por favor, ingrese un dato válido (1, 2 o 3).');
            break;
    }
}

// ALERTAS
alert('Hola! Bienvenido a la tienda');
alert('Somos una tienda en línea de suplementos, equipo de gimnasio y ropa deportiva');
alert('¿Que tipo de producto está buscando?');

let seguirComprando = 'SI';
while (seguirComprando == 'SI') {
    let categoriaElegida = prompt('Categorias: \n1. Suplementos.\n2. Equipo de gimnasio.\n3. Ropa deportiva.');
    switch (parseInt((categoriaElegida))) {
        case 1:
            operacionDeCompra('Proteina WHEY', 1250,
                            'Creatina', 1250,
                            'Pre-entreno', 1700);
            break;

        case 2:
            operacionDeCompra('Barra dominadas', 6250,
                            'Soga de saltar', 850,
                            'Pesas rusas', 1200);
            break;
        
        case 3:
            operacionDeCompra('Zapatillas para running', 4050,
                            'Conjunto deportivo', 6500,
                            'Musculosa fitnes', 1100);
            break;
        
        default:
            alert('Por favor, ingrese un dato válido (1, 2 o 3).');
            break;
    }

    seguirComprando = prompt('¿Desea seguir comprando? (escriba SI para continuar)');
}