function actualizarPuntaje(){
    //Se obtiene el valor del objeto
    let lblPuntaje: HTMLElement | null = document.querySelector("#lblPuntaje");
    //Se obtiene el valor de los input para los resultados
    let lecturaCritica: HTMLInputElement | null = document.querySelector("#txtLC");
    let matematicas: HTMLInputElement | null = document.querySelector("#txtMat");
    let socialesCiudadanas: HTMLInputElement | null = document.querySelector("#txtSyC");
    let cienciasNaturales: HTMLInputElement | null = document.querySelector("#txtCN");
    let ingles: HTMLInputElement | null = document.querySelector("#txtIng");
    //Se calcula el puntaje total
    let puntajeTotal: number = Number(lecturaCritica.value) + Number(matematicas.value) +
     Number(socialesCiudadanas.value) + Number(cienciasNaturales.value) + Number(ingles.value);
    //Se publica el puntaje total
    lblPuntaje.innerHTML = "Puntaje total: " + String(puntajeTotal);
    }