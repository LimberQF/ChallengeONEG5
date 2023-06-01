var resultado = document.querySelector(".resultado-texto");
var contenedor = document.querySelector(".final-texto");
var munequito = document.querySelector(".cont-munequito");
var botonEncriptador = document.querySelector(".boton-encriptar");
var botonDesencriptador = document.querySelector(".boton-desencriptar");
botonEncriptador.onclick = botonEncriptar;
botonDesencriptador.onclick = botonDesencriptar;
function botonEncriptar() {
    var cajatex = recuperarTextos();
    resultado.textContent = veriTextEncriptado(cajatex);
}
function botonDesencriptar() {
    var cajatex = recuperarTextos();
    resultado.textContent = veriTextDesencriptado(cajatex); 
}
function recuperarTextos() {
    var cajatex = document.querySelector(".cajitatexto");
    return cajatex.value;
}
function ocultarAdelante() {
    munequito.style.display="none";
    contenedor.classList.add("ocultar");
    resultado.classList.add("final-texto");
}
const reinicio= ()=> {
    munequito.style.display="block";
    contenedor.style.display="block";
}
function veriTextEncriptado(texto) {
    var regex = /^[a-z\s]+$/;
    var esValido = regex.test(texto)
    if (esValido) {
        return encriptar(texto);
    } 
    if (texto.trim() === "") {
        return "Ningún mensaje fue encontrado";
    } else {
        return("El texto contiene caracteres no permitidos.");
    }
}
function veriTextDesencriptado(texto) {
    var regex = /^[a-z\s]+$/;
    var esValidado = regex.test(texto)
    if (esValidado) {
        return desencriptar(texto);
    }
    if (texto.trim() === "") {
        return "Ningún mensaje fue encontrado";
    } else {
        return("El texto contiene caracteres no permitidos.");
    }
}
function encriptar(texto) {
    let encriptado = "";
    ocultarAdelante();
    for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
        case "e":
        encriptado += "enter";
        break;
        case "i":
        encriptado += "imes";
        break;
        case "a":
        encriptado += "ai";
        break;
        case "o":
        encriptado += "ober";
        break;
        case "u":
        encriptado += "ufat";
        break;
        default:
        encriptado += texto[i];
    }
    }
    return encriptado;
}
function desencriptar(textoEncriptado) {
    let desencriptado = "";
    let i = 0;
    ocultarAdelante();
    while (i < textoEncriptado.length) {
    let letraActual = textoEncriptado[i];
    if (letraActual === "e" && textoEncriptado.startsWith("enter", i)) {
        desencriptado += "e";
        i += 5;
    } else if (letraActual === "i" && textoEncriptado.startsWith("imes", i)) {
        desencriptado += "i";
        i += 4;
    } else if (letraActual === "a" && textoEncriptado.startsWith("ai", i)) {
        desencriptado += "a";
        i += 2;
    } else if (letraActual === "o" && textoEncriptado.startsWith("ober", i)) {
        desencriptado += "o";
        i += 4;
    } else if (letraActual === "u" && textoEncriptado.startsWith("ufat", i)) {
        desencriptado += "u";
        i += 4;
    } else {
        desencriptado += letraActual;
        i++;
    }
    }
    return desencriptado;
}
const botonCopiar= document.querySelector(".boton-copiar");
    botonCopiar.addEventListener("click", copiar=()=>{
    var contenido= document.querySelector(".resultado-texto").textContent;
    navigator.clipboard.writeText(contenido);
})