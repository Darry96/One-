const ciudadadesDisponibles = new Array("Bogota", "Lima", "Santiago");
console.log(ciudadadesDisponibles);

//definicion de un CIUDAD ABREVIada
const paisesDisponibles=["colombia","peru","chile","brasil","Argentina"];
console.log(paisesDisponibles);

{
    paisesDisponibles.push("Uruguay");
    ciudadadesDisponibles.push("Montevideo");
    console.log(ciudadadesDisponibles);
    console.log(paisesDisponibles);


    paisesDisponibles.unshift("Ecuador");
    ciudadadesDisponibles.unshift("Quito");
    console.log(ciudadadesDisponibles);
    console.log(paisesDisponibles);

    //primer elemento de la lista
    console.log(paisesDisponibles[0]);
    console.log(ciudadadesDisponibles[0]);

    paisesDisponibles.splice(1,2,"Venezuela","Paraguay");
    console.log(paisesDisponibles);
}

