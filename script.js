document.querySelector('button').addEventListener('click', calcularRiesgoCardiovascular);
    // Código para calcular el Riesgo Cardiovascular
function calcularRiesgoCardiovascular() {
    const edad = parseInt(document.getElementById('edadRiesgo').value);
    const colesterol = parseInt(document.getElementById('colesterolRiesgo').value);
    const presion = parseInt(document.getElementById('presionRiesgo').value);
    const resultadoRiesgo = (edad * 0.1) + (colesterol * 0.2) + (presion * 0.3);