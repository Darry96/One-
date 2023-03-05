export function valida(input) {
    const tipoInput = input.dataset.tipo;
    if (validadores[tipoInput]) {
        validadores[tipoInput](input)
    }
}
const validadores = {
    nacimiento: input => validadNacimiento(input),
};
function validadNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    mayorEdad(fechaCliente);

    if (!mayorEdad(fechaCliente)) {
        mensaje = "Debes tener al menos 18 años de edad"
    }


    input.setCustomValidity(mensaje);

}

function mayorEdad(fecha) {

    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;

}