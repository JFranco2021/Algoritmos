function partOne(){
    respuesta=parseInt(prompt("How many task have you completed?"));
    if(respuesta <= 6 && respuesta >= 0 ){
        console.log("**Failed**")
    }else if(respuesta > 6 && respuesta <= 9){
        console.log("**Insufficiente**"); 
    }else if(respuesta > 9 && respuesta <= 14){
        console.log("**Good**");
    }else if(respuesta == 15){
        console.log("**Excellent**")
    }else{
        console.log("**Error**")
        return;
    }
}
partOne();
