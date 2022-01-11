//esta funcion esta sin parametros

function triangulo(){
    var base = 4;
    var altura = 10;
    var res = (base *  altura)/2;
    console.log("El area del triangulo es: " + res);
}
triangulo();

//estas funciones estan con parametros

function circulo(){
    var radio = 4;
    var pi = 3.14;
    var res = (radio * radio) * pi;
    console.log("El area del circulo es: " + res);
}
circulo();

function rectangulo(b, a){
    var b;
    var a;
    var resultado = b * a;
    alert("El area del rectangulo es: " + resultado);
}
rectangulo(2,4);

// getElementeById

function cambiarColor(nuevoColor){
    var elem = document.getElementById ("parrafo");
    elem.style.color = nuevoColor; 
}

function accion(tipo){
    var elem = document.getElementById("divBotones");
    if(tipo == "ocultar"){
        elem.style.display = "none";
    }
    else
    elem.style.display = "";

}