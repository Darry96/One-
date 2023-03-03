const ciudadadesDisponibles = new Array("Bogota", "Lima", "Santiago","Montevideo");

const paisesDisponibles=["colombia","peru","chile","brasil","Argentina","uruguay","venezuela"];
const cantidadDeCiudades = ciudadadesDisponibles.length;
console.log(`En la lista de ciudades tenemos ${cantidadDeCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

//remover el primer elemento
ciudadadesDisponibles.shift();
console.log(ciudadadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadadesDisponibles.length} elementos`);
//Remover el ultimo elemento
ciudadadesDisponibles.pop();
console.log(ciudadadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadadesDisponibles.length} elementos`);

//filtro elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e)=> e=="brasil");
console.log(paisesFiltrados);

//unificar los elementos 
console.log(paisesDisponibles.join('-'));

//ordenar la lista
console.log(paisesDisponibles.sort());

//conociendo la posicion
console.log(`Peru esta en la posicion ${paisesDisponibles.indexOf("peru")}`);

//unificar dos listas
const listaPaisesYCiudades= paisesDisponibles.concat(ciudadadesDisponibles);
console.log(listaPaisesYCiudades);