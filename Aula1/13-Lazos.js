const ciudadadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
const preciosCiudadades = new Array(500, 400, 380, 200);
const presupuestoDisponible = 210;

let i = 0;
while (preciosCiudadades[i] > presupuestoDisponible && i < ciudadadesDisponibles.length) {
    i++;
}
if (i == ciudadadesDisponibles.length) {
    console.log("No tenemos pasajes disponibles")
} else {
    console.log("Puedes Comprar pasaje para: " + ciudadadesDisponibles[i]);
}