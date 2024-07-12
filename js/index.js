// VACUNACION
// Desplegable
let mapa= new Map([["Prenatal" , "Difteria, Tétanos, Tosferina"],
["2 meses" , "Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B"],
["4 meses" , "Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo C, Meningococo B, Neumococo"],
["11 meses" , "Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Neumococo"],
["12 meses" , "Sarampión, Rubeola, Parotiditis, Meningococo C, Meningococo B"],
["15 meses" , "Varicela"],
["4 años" , "Sarampión, Rubeola, Parotiditis, Varicela"],
["6 años" , "Difteria, Tétanos, Tosferina, Poliomielitis"],
["12 años" , "Varicela, Meningococo, Papilomavirus"],
["14 años" , "Difteria, Tetanos"]
]);

console.log(mapa);

let select = document.querySelector("#desplegable");
for ([edad,vacuna] of mapa) {
    let edadOpcion= document.createElement("option");
    edadOpcion.textContent=edad;
    edadOpcion.setAttribute("id",edad);
    select.appendChild(edadOpcion);  
}

select.addEventListener("change" , function(){
    let vacunaContenido=mapa.get(select.value);
    document.querySelector("#salida").textContent="Vacunas necesarias: " + vacunaContenido;
})



// ACCESIBILIDAD
document.querySelector("#aumentar").addEventListener("click", () => {
    ajustarFuente(1);
})

document.querySelector("#reducir").addEventListener("click", () => {
    ajustarFuente(-1);
})

document.querySelector("#escalaGrises").addEventListener("click", escalaGrises);

document.querySelector("#altoContraste").addEventListener("click", altoContraste);

document.querySelector("#restablecer").addEventListener("click", restablecerTodo);

// AJUSTAR FUENTE
function ajustarFuente(cambio) {
    // selecciona todos los elementos del body
    let elementos = document.querySelectorAll("body *:not(.accesibilidad):not(.accesibilidad *)");
    elementos.forEach(function (elem) {
        // toma el estilo de cada elemento
        let estilo = window.getComputedStyle(elem);
        let fontSize = parseFloat(estilo.fontSize);
        elem.style.fontSize = fontSize + cambio + 'px';
    })
}

// ESCALA DE GRISES
function escalaGrises() {
    document.body.style.filter = "grayscale(100%)";
}

// ALTO CONTRASTE
function altoContraste() {
    document.body.style.backgroundColor = "#1c1f22";
    let elementos = document.querySelectorAll("body *");
    elementos.forEach(function (elem) {
        let estilo = window.getComputedStyle(elem);
        elem.style.color = "#ffd700";
    })
}

// RESTABLECER TODO
function restablecerTodo() {
    let elementos=document.querySelectorAll("body *");
    elementos.forEach(function(elem){
        elem.style.fontSize="";
        elem.style.color="";
    })
    document.body.style.backgroundColor="";
    document.body.style.filter="";
}

// MOSTRAR OCULTAR
function mostrarOcultar(){
    let barra=document.querySelector(".accesibilidad");
    let boton=document.querySelector(".icono-accesibilidad");
    barra.classList.toggle("mostrar"); // intercambia las clases, si la tiene, la quita, si no, la coloca
    boton.classList.toggle("mostrar");
}