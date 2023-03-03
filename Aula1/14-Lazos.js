const ciudadadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
const preciosCiudadades = new Array(500, 400, 380, 200);
const presupuestoDisponible = 400;
const datos = [
    {
        'Ciudad': 'Bogota',
        'Precio': 500
    },
    {
        'Ciudad': 'Lima',
        'Precio': 400
    },
    {
        'Ciudad': 'Santiago',
        'Precio': 380
    },
    {
        'Ciudad': 'Montevideo',
        'Precio': 200
    }
]

let i = 0;
while (i < datos.length && datos[i].Precio > presupuestoDisponible) {
    i++;
}
if (i == datos.length) {
    console.log("No tenemos pasajes disponibles")
} else {
    console.log("Puedes Comprar pasaje para: " + datos[i].Ciudad);
} 