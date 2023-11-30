function actualizar() {
    //Se obtiene el valor del objeto
    let lblPuntaje: HTMLElement | null = document.querySelector("#txtPuntaje");
    //Se obtiene el valor de los input para los resultados
    let lecturaCritica: HTMLInputElement | null = document.querySelector("#pLc");
    let matematicas: HTMLInputElement | null = document.querySelector("#pM");
    let socialesCiudadanas: HTMLInputElement | null = document.querySelector("#pCs");
    let cienciasNaturales: HTMLInputElement | null = document.querySelector("#pCn");
    let ingles: HTMLInputElement | null = document.querySelector("#pI");
    //Se calcula el puntaje total
    if (Number(lecturaCritica.value) > 100 || Number(matematicas.value) > 100 || Number(socialesCiudadanas.value) > 100 || Number(cienciasNaturales.value) > 100 || Number(ingles.value) > 100
    || Number(lecturaCritica.value) < 0 || Number(matematicas.value)< 0 || Number(socialesCiudadanas.value) < 0|| Number(cienciasNaturales.value)< 0 || Number(ingles.value)< 0) {
        alert("Los datos que intenta ingresar no son validos")
    } else {
        let puntajeTotal: number = Number(lecturaCritica.value) + Number(matematicas.value) +
            Number(socialesCiudadanas.value) + Number(cienciasNaturales.value) + Number(ingles.value);
        //Se publica el puntaje total
        lblPuntaje.innerHTML = "Puntaje total: " + String(puntajeTotal) + "/500";
    }
}