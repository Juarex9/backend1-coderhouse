function generarNumerosAleatorios(){
    return new Promise((resolve) =>{
        const numeros= [];
        for (let i = 0; i < 1000; i++){
            numeros.push(Math.floor(Math.random()* 20) + 1);
        }
        console.log(numeros);
        resolve(numeros);
    })
}

generarNumerosAleatorios().then((numeros) => {
    console.log("listado de numeros", numeros);
});