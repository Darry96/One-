const ciudadDestino = "Lima";
const ciudadadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

const edadPasajero = 19;
const estaAcompanado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`)
if (((edadPasajero >= 18 && estaAcompanado))){
    if (ciudadadesDisponibles.indexOf(ciudadDestino) >= 0) {
        console.log("Pasaje disponible para venta");
    } else {
        console.log("Ciudad no disponible para viajar");
    }
}else{
    if(edadPasajero>=16 && ciudadDestino=="Lima"){
        console.log("Pasaje disponible para venta");
    }else{
    console.log("Pasajero no cumple reglas")
    }
}

