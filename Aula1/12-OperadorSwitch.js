const ciudadDestino = "Quito";
const ciudadadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

let valorPasaje = 0;
switch (ciudadDestino) {
    case "Bogota":
        valorPasaje = 500;
        break;
    case "Lima":
        valorPasaje = 400;
        break;
    case "Santiago":
        valorPasaje = 380;
        break;
    case "Montevideo":
        valorPasaje = 200;
        break;
    default:
        valorPasaje = 0
        console.log(`No hay pasaje para la ciudad indicada`)
        break;
}
if (valorPasaje > 0) {
    console.log(`El valor del pasaje es: ${valorPasaje}`);
}