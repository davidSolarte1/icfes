function actualizar() {
    //Se obtiene el valor del objeto
    var lblPuntaje = document.querySelector("#txtPuntaje");
    //Se obtiene el valor de los input para los resultados
    var lecturaCritica = document.querySelector("#pLc");
    var matematicas = document.querySelector("#pM");
    var socialesCiudadanas = document.querySelector("#pCs");
    var cienciasNaturales = document.querySelector("#pCn");
    var ingles = document.querySelector("#pI");
    //Se calcula el puntaje total
    if (Number(lecturaCritica.value) > 100 || Number(matematicas.value) > 100 || Number(socialesCiudadanas.value) > 100 || Number(cienciasNaturales.value) > 100 || Number(ingles.value) > 100
        || Number(lecturaCritica.value) < 0 || Number(matematicas.value) < 0 || Number(socialesCiudadanas.value) < 0 || Number(cienciasNaturales.value) < 0 || Number(ingles.value) < 0) {
        alert("Los datos que intenta ingresar no son validos");
    }
    else {
        var puntajeTotal = Number(lecturaCritica.value) + Number(matematicas.value) +
            Number(socialesCiudadanas.value) + Number(cienciasNaturales.value) + Number(ingles.value);
        //Se publica el puntaje total
        lblPuntaje.innerHTML = "Puntaje total: " + String(puntajeTotal) + "/500";
    }
}
