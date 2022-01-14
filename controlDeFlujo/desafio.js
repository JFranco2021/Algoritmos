//desafio



const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
let numDia = d.getDay()
let numHora = d.getHours()
console.log(d);
console.log(day);

console.log("numero de dia: " + numDia);
console.log("numero de hora: " + numHora);

alert("Esta aplicasion valida si hoy, y ahora es horario comercial");

function getDayNumber (){


    if(numHora>=9 && numHora<=18){

    switch(numDia){
        case 0:
            alert("Domingo, No es horario comercial");
            break;
        case 1:
            alert("Lunes a las " + numHora + " horas, es horario comercial");
            break;
        case 2:
            alert("Martes a las " + numHora + " horas, es horario comercial");
            break;
        case 3:
            alert("Miercoles a las " + numHora + " horas, es horario comercial");
            break;
        case 4:
            alert("Jueves a las " + numHora + " horas, es horario comercial");
            break;
        case 5:
            alert("Viernes a las " + numHora + " horas, es horario comercial");
            break;
        case -1:
            alert("Sabado, No es horario comercial");
            break;
        default:
            alert("Error, dia inexistente");
    }
}else{
    alert("No esta dentro del horario comercial 9 a 18 horas");
}
}
getDayNumber ();