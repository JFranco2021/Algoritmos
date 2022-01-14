//Parte 2


function getDayNumber (){
    var janFirstDay = parseInt(prompt("Dame el dia de la semana del 1ro de enero: "));
    var yearDayNumber = parseInt(prompt("Dame el numero de dia del año: "));
    var res = ((yearDayNumber + janFirstDay ) % 7) - 1;
    console.log("numero 1ro ene: " + janFirstDay);
    console.log("resto de semana: " + res);

    switch(res){
        case 0:
            alert("Domingo");
            break;
        case 1:
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miercoles");
            break;
        case 4:
            alert("Jueves");
            break;
        case 5:
            alert("Viernes");
            break;
        case -1:
            alert("Sabado");
            break;
        default:
    }
}
getDayNumber ();