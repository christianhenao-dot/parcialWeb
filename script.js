btnCalcular.addEventListener("click", function() {
    const edad = parseInt(document.getElementById("edad").value);
    const presion = parseInt(document.getElementById("presion").value);
    const colesterol = parseInt(document.getElementById("colesterol").value);
    const fumador = document.getElementById("fumador").value;

    let puntos = 0;

    if (edad >= 35 && edad <= 44) {
        puntos += 1;
    } else if (edad >= 45) {
        puntos += 2;
    }

    if (presion >= 120 && presion < 140) {
        puntos += 1;
    } else if (presion >= 140) {
        puntos += 3;
    }

    if (colesterol >= 200 && colesterol < 240) {
        puntos += 1;
    } else if (colesterol >= 240) {
        puntos += 3;
    }

    if (fumador === "si") {
        puntos += 3;
    }

    let nivelRiesgo = "";
    let colorFondo = "";

    if (puntos <= 2) {
        nivelRiesgo = "Riesgo Bajo";
        colorFondo = "#4CAF50";
    } else if (puntos <= 5) {
        nivelRiesgo = "Riesgo Moderado";
        colorFondo = "#FFEB3B";
    } else {
        nivelRiesgo = "Riesgo Alto";
        colorFondo = "#F44336";
    }

    textoResultado.textContent = nivelRiesgo;
    resultado.style.backgroundColor = colorFondo;

    recomendaciones.innerHTML = "";
    const listaRecomendaciones = [
        "Mantén una dieta equilibrada y saludable.",
        "Realiza actividad física regularmente.",
        "Visita a tu médico para chequeos periódicos."
    ];

    listaRecomendaciones.forEach(function(recomendacion) {
        const li = document.createElement("li");
        li.textContent = recomendacion;
        recomendaciones.appendChild(li);
    });
});

const btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener("click", function() {
    document.getElementById("edad").value = "";
    document.getElementById("presion").value = "";
    document.getElementById("colesterol").value = "";
    document.getElementById("fumador").value = "";
    textoResultado.textContent = "";
    resultado.style.backgroundColor = "";
    recomendaciones.innerHTML = "";
});
