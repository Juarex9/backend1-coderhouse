// js tiene un solo hilo de ejecucion
console.log('incio del programa');


// setTimeout(() => {
//     for (let i = 0; i < 1000; i++) {
// console.log(i);
// }
// }, 2000);

//Promesas
let envio = false;
const promesa = new Promise((resolve, reject) => {
    //cuerpo de la promesa
    if (envio) {
        resolve('mail enviado');
    } else {
        reject('fallo el envio');
    }
}, 2000);

//console.log de la promesa
promesa.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
}).finally(() => {     ///cerrar la conexion a la base de datos
    console.log('termina la promesa');
});
console.log('fin del programa');
