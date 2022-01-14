//parte 3


function getDayNumber (){
    var janFirstDay = parseInt(prompt("Dame el dia de la semana del 1ro de enero: "));
    var yearDayNumber = parseInt(prompt("Dame el numero de dia del año: "));
    

    var res = ((yearDayNumber + janFirstDay ) % 7) - 1;
    console.log("numero 1ro ene: " + janFirstDay);
    console.log("resto de semana: " + res);

    var hourNumber = parseInt(prompt("Dame la hora: "));

    if(hourNumber>=9 && hourNumber<=18){

    switch(res){
        case 0:
            alert("Domingo, No es horario comercial");
            break;
        case 1:
            alert("Lunes a las " + hourNumber + " horas, es horario comercial");
            break;
        case 2:
            alert("Martes a las " + hourNumber + " horas, es horario comercial");
            break;
        case 3:
            alert("Miercoles a las " + hourNumber + " horas, es horario comercial");
            break;
        case 4:
            alert("Jueves a las " + hourNumber + " horas, es horario comercial");
            break;
        case 5:
            alert("Viernes a las " + hourNumber + " horas, es horario comercial");
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
