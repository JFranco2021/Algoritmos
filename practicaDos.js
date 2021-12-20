function partTwo(){
    let num = [];
    let mayor=0;
    for(let i=0 ; i<5 ; i++){
        num.push(parseInt(prompt("What is your" + (i+1) + " number ?")));
        console.log(num[i]);
        comp=num[i];
        if(mayor<comp){
        mayor=comp;
        }else{}
    }
    console.log("The greatest number found was " + mayor);
    return;
    }
    
    partTwo();
