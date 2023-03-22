//Importacion de Definicion de clases
import{Cliente} from './Cliente.js'
import{CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo','131584894','12321234');
const cuentaDeLeonardo = new CuentaCorriente(cliente,'1','001');

//console.log(cuentaDeLeonardo);

let saldo = cuentaDeLeonardo.verSaldo();
//console.log("El saldo actual es: "+ saldo);

cuentaDeLeonardo.depositoCuenta(100);
saldo = cuentaDeLeonardo.verSaldo();
//console.log("El saldo de leonardo actual es: "+ saldo);

const cliente2 = new Cliente('Maria','456456','7894556');


const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');



console.log(cliente);
console.log(cliente2);
console.log(CuentaCorriente.cantidadCuentas);


/* if (cuentaDeMaria.cliente){
console.log(cuentaDeMaria.cliente);
}else{ */
    //console.log(cuentaDeMaria.cliente);
//}


let parametroValor = 100;
//cuentaDeLeonardo.trasferirEntreCuenta(100,cuentaDeMaria);
/* const saldo2 = cuentaDeMaria.verSaldo();
console.log("El saldo de Maria actual es: "+ saldo2);


saldo = cuentaDeLeonardo.verSaldo();
console.log("El saldo de leonardo actual es: "+ saldo); */
/* 
cuentaDeLeonardo.retirarCuenta(100);
saldo = cuentaDeLeonardo.verSaldo();
console.log("El saldo actual es: "+ saldo);

cuentaDeLeonardo.depositoCuenta(10);
saldo = cuentaDeLeonardo.verSaldo();
console.log("El saldo actual es: "+ saldo);
 */