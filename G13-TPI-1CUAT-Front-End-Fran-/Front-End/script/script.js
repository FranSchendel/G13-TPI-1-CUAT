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

var preg_num = 0

function juego() {
    document.getElementById("info").style.display = "none"
    document.getElementById("quiz").style.display = "flex"
    
    for(preg_num; preg_num < pregs.length; preg_num++){
        document.getElementById("quiz").innerHTML = `
    <div class="pregunta">
        <h1>${pregs[preg_num].pregunta}</h1>
    </div>
    <div class="respuesta" onclick="desbloquear()">
        <h2>${pregs[preg_num].correcta}</h2>
    </div>
    <div class="respuesta" onclick="desbloquear()">
        <h2>${pregs[preg_num].inc1}</h2>
    </div>
    <div class="respuesta" onclick="desbloquear()">
        <h2>${pregs[preg_num].inc2}</h2>
    </div>
    <div class="respuesta" onclick="desbloquear()">
        <h2>${pregs[preg_num].inc3}</h2>
    </div>
    <div class="w-50 d-flex justify-content-center">
        <button class="abandonar btn btn-danger" onclick="abandonar()">Abandonar</button>
    </div>`
    console.log(preg_num)
    }
}

function abandonar() {
    document.getElementById("info").style.display = "flex"
    document.getElementById("quiz").style.display = "none"
}

function desbloquear() {
    document.getElementById("quiz").innerHTML += `
    <div class="w-50 d-flex justify-content-center">
        <button class="abandonar btn btn-primary" onclick="siguiente()">Siguiente Pregunta</button>
    </div>`
}

function siguiente(){
    preg_num += 1;
}