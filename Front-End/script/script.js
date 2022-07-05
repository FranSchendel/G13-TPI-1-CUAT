let pregs = [
    {
        pregunta : "Pregunta 1",
        correcta : "Respuesta Correcta",
        inc1 : "Respuesta Incorrecta",
        inc2 : "Respuesta Incorrecta 2",
        inc3 : "Respuesta Incorrecta 3"

    }
]
function guardar_nombre() {
    let nombre = document.getElementById("nombre").value
    if(nombre.length == 0)
    {
        alert("Debe ingresarse un nombre")
    }else {
        juego()
    }
}

function juego() {
    document.getElementById("info").style.display = "none"
    document.getElementById("quiz").style.display = "flex"
    document.getElementById("quiz").innerHTML = `
    <div class="pregunta">
        <h1>${pregs[0].pregunta}</h1>
    </div>
    <div class="respuesta">
        <h2>${pregs[0].correcta}</h2>
    </div>
    <div class="respuesta">
        <h2>${pregs[0].inc1}</h2>
    </div>
    <div class="respuesta">
        <h2>${pregs[0].inc2}</h2>
    </div>
    <div class="respuesta">
        <h2>${pregs[0].inc3}</h2>
    </div>
    <div class="w-100 d-flex justify-content-center">
        <button class="abandonar btn btn-danger" onclick="abandonar()">Abandonar</button>
    </div>
    `
}

function abandonar() {
    document.getElementById("info").style.display = "flex"
    document.getElementById("quiz").style.display = "none"
}