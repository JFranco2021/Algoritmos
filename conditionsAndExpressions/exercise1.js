//Parte 1

var nombres = ["María","Antony","Joy","Juan"];
console.log(nombres);
console.log("\n");

nombres.unshift("Salvador");
console.log(nombres);
console.log("\n\n");


//Parte 2

var nom = "Joy"
console.log(nom+" se encuentra en la lista? ")
function incluyeNombre(){
    nombr = nombres.includes(nom);
    console.log(nombr);
}
incluyeNombre();
console.log("\n\n");

//Parte 3

function comparar(){
    const array1 = ["María","Antony","Joy","Juan"];
    const array2 = ["Ricardo","Margarita"];
    const array3 = array1.concat(array2);
    console.log(array3);
}
comparar();



//Parte 4

function logNombres(){
    noms = parseInt(prompt("Dame la cantidad de nombres a ingresar: "))
    for(i=0; i<noms; i++){
        var ms = prompt("dame el nombre");
        console.log( ms+" longitud "+ms.length);
    }
}
logNombres();
