const edadPasajero = 19;
const estaAcompanado = true;
let tienePasaporte = true;

const ciudadDestino = "Lima";
const ciudadadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

console.log(`Verificando pasajes para ${ciudadDestino}`)



if (ciudadadesDisponibles.indexOf(ciudadDestino) >= 0 && edadPasajero >= 18 && tienePasaporte) {
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar");
}
