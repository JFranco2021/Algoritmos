
//Posiciones actuales

var carreritas = ["Lucía","Roberto","María","Jesús","Andrea","José"];

console.log("CLASIFICACION ACTUAL");
carreritas.forEach(function(corredor, posicion) {
    console.log(corredor, (posicion+1));
})
console.log("");

//Andrea adelanta a María

let indice = carreritas.indexOf
("María");
console.log("este es el indice de María"+indice);
console.log("");


carreritas[2]="Andrea"
carreritas[3]="María"
carreritas[4]="Jesús"

console.log("ANDREA ADELANTA A MARIA");

carreritas.forEach(function(corredor, posicion) {
    console.log(corredor, (posicion+1));
})
console.log("");

//José es descalificado

carreritas.pop();

console.log("JOSE ES DESCALIFICADO");

carreritas.forEach(function(corredor, posicion) {
    console.log(corredor, (posicion+1));
})
console.log("");

//Clasidican 3 nuevos corredores entre Lucia y Roberto

console.log("TRES CORREDORES NUEVOS ENTRE LUCIA Y ROBERTO");

carreritas.unshift("Lucía","Cristóbal","Fernanda","Armando");
carreritas.splice(4,1);

carreritas.forEach(function(corredor, posicion) {
    console.log(corredor, (posicion+1));
})
console.log("");

//Nuevo concursante Federico, tomo el primer puesto

console.log("NUEVO CORREDOR, TOMA EL PRIMER LUGAR");

carreritas.unshift("Federico");

carreritas.forEach(function(corredor, posicion) {
    console.log(corredor, (posicion+1));
})
console.log("");
