
//ejecisio 1

transaction = parseInt(prompt("¿Cuántas transacciones hiciste?"));
    total = parseInt(prompt("¿Cuál es el Monto total?"));
function cost(comisiones,fee){
    var comisiones = transaction*3;
    console.log("El total de las comisiones es:" + comisiones)
    var fee = (comisiones + total)*0.01;
    console.log("El total de los impuestos es: " + fee);

    var grantotal = comisiones + fee + total;
    console.log("El gran total es: " + grantotal);

}

cost(transaction, total);



//ejercicio 2 parte 1

var nombre1 = prompt("Escribe el nombre de tu primer de tu amigo:");
var nombre2 = prompt("Escribe el nombre de tu segundo de tu amigo:");
var nombre3 = prompt("Escribe el nombre de tu tercer de tu amigo:");

ejercicio2Parte1(nombre1,nombre2,nombre3);

function ejercicio2Parte1(nom1,nom2,nom3){
    console.log("Bienvenido "+nom1+", "+nom2+", "+nom3);
    return;
}



//ejercico 2 parte 2

function ejercicio2Parte2 (){
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    console.log(añoActual);// Devuelve la fecha actual
    var nacimiento = prompt("¿En qué año naciste?");//Almacena el año de nacimiento
    años = añoActual - nacimiento;//Diferencia de fechas
    alert("Tu año de nacimiento es: "+nacimiento+" y tienes: "+años+" años");
}

ejercicio2Parte2();




//ejercico 2 parte 3

var nombre1 = prompt("Escribe el nombre de tu primer amigo:");
var edad1 = prompt("Escribe la edad de tu primer de tu amigo:");
var nombre2 = prompt("Escribe el nombre de tu segundo amigo:");
var edad2 = prompt("Escribe la edad de tu segundo de tu amigo:");
var nombre3 = prompt("Escribe el nombre de tu tercer amigo:");
var edad3 = prompt("Escribe la edad de tu tercer de tu amigo:");

ejercicio2Parte1(nombre1,nombre2,nombre3,edad1,edad2,edad3);

function ejercicio2Parte1(nom1,nom2,nom3,e1,e2,e3){
    console.log("Bienvenido "+nom1+" tienes " + e1 +" años," +nom2+" tienes "+e2+" años," +nom3+" tienes "+e3+" años.");
    return;
}



//retate a ti mismo


var rubrica = parseInt(prompt("Rubrica: "));

function pass(){
    if(rubrica==11){
        console.log("Perfect");
    }
    else if(rubrica>8){
        console.log("Excellent");
    }
    else if(rubrica>=5){
        console.log(true);
    }
}

pass();


