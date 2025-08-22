class Cuenta {
    #saldo;

    constructor(saldoInicial, nombre="Juan"){
        this.#saldo = saldoInicial;
        this.nombre = nombre;
    }

    consultarSaldo(){
        return this.#saldo;
    }
}

const miCuenta = new Cuenta(30000, "agustin");

console.log(miCuenta.consultarSaldo());
console.log(miCuenta.nombre);
