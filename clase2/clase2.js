const productos = [
    {
        naranja: 3,
        banana: 5,
        manzana: 2,
    },
    {
        carne: 10,
        pollo: 8,
    },
];


for (const producto of productos) {
    const nombreProducto = Object.keys(producto);
    const valoresProducto = Object.values(producto);
    // console.log(producto);
    // console.log(nombreProducto);
    // console.log(valoresProducto);
    for (const elemento in producto) {
        console.log(elemento);
        console.log(producto[elemento]);
    }
}