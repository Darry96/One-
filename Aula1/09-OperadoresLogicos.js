//operadores de comparacion
const ciudadDestino = "Santiago";
const ciudadadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

//palabra reservada if
console.log(`Verificando pasajes para ${ciudadDestino}`)
if (ciudadadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar");
}

const valorPasaje = "1000";
if (valorPasaje === 1000) {
    console.log("El pasaje vale 1000");
}


//operadores logicos
const edadPasajero = 19;
const estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`)
if (ciudadadesDisponibles.indexOf(ciudadDestino) >= 0 && ((edadPasajero >= 18 && estaAcompanado ))) {
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar");
}

