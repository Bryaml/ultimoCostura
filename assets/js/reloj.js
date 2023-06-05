const diasSpan = document.getElementById('dias');
const horasSpan = document.getElementById('horas');
const minutosSpan = document.getElementById('minutos');
const segundosSpan = document.getElementById('segundos');

function obtenerFechaLimite() {
    const tiempoActual = new Date();
    const fechaLimite = new Date(tiempoActual);
    fechaLimite.setHours(24, 0, 0, 0); // Establece la fecha límite a las 24 horas del día actual
    return fechaLimite.getTime();
}

let fechaLimite = obtenerFechaLimite();

function actualizarContador() {
    const tiempoActual = new Date().getTime();
    const diferencia = fechaLimite - tiempoActual;

    if (diferencia <= 0) {
        fechaLimite = obtenerFechaLimite();
    }

    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    const diasRestantes = Math.floor(diferencia / dias);
    const horasRestantes = Math.floor((diferencia % dias) / horas);
    const minutosRestantes = Math.floor((diferencia % horas) / minutos);
    const segundosRestantes = Math.floor((diferencia % minutos) / segundos);

    diasSpan.textContent = diasRestantes;
    horasSpan.textContent = horasRestantes;
    minutosSpan.textContent = minutosRestantes;
    segundosSpan.textContent = segundosRestantes;
}

actualizarContador(); // Ejecuta la función una vez al inicio para evitar el retardo de 1 segundo
setInterval(actualizarContador, 1000); // Actualiza el contador cada 1000 ms (1 segundo)
