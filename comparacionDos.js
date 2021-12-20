function exerciseTwo(number){
    resto_Cuatro=number%4;
    resto_Nueve=number%9;
    if(resto_Cuatro==0 || resto_Nueve==0){
    console.log("true")
    }else{
    console.log("false")
    return;
    } 
}
