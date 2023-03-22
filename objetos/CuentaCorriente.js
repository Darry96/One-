import { Cliente } from "./Cliente.js";
export class CuentaCorriente {
    #cliente;
    numero;
    #saldo;
    agencia;
    static cantidadCuentas= 0;

    set cliente(valor){
        if(valor instanceof Cliente){
        this.#cliente = valor;
    }
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(cliente,numero,agencia) {
        this.cliente=cliente;
        this.#saldo = 0;
        this.numero = numero;
        this.agencia = agencia;
        CuentaCorriente.cantidadCuentas++;
    }

    depositoCuenta(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
        return this.#saldo;
    }

    retirarCuenta(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }

    trasferirEntreCuenta(valor,cuentaDestino){
        this.retirarCuenta(valor);
        cuentaDestino.depositoCuenta(valor);
    }
}