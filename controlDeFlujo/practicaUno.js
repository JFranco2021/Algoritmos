//Parte 1

function businessHours (){
    var hourNumber = parseInt(prompt("Dame la hora: "));

    if(hourNumber>=9 && hourNumber<=18){
        var dayNumber = parseInt(prompt("Dame el numero de dia: "));

        switch(dayNumber){
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
            case 6:
                alert("Sabado, No es horario comercial");
                break;
            default:
                alert("Error, dia inexistente");
        }
    }else{
        alert("No esta dentro del horario comercial 9 a 18 horas");
    }

}
businessHours();
