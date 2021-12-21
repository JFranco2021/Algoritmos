function partThree(){
    let num = [];
    let menor1=0,menor2=0;

    for(let i=0 ; i<3 ; i++){
        num.push(parseInt(prompt("What is the price of the " + (i+1) + " item ?")));
        console.log(num[i]);
        comp=num[i];

        if(i==0){
            menor1=num[i];
        }else if(i==1){
            menor2=num[i];
        }else{
            if(comp < menor1 && comp > menor2){
                menor1=comp;
            }
            else if (comp > menor1 && comp < menor2){
                menor2=comp;

            }
            else if(comp < menor1 && comp < menor2){
                if(menor1<menor2){
                    menor2=comp;
                }
                else{
                    menor1=comp; 
                }

            }
        }
    }
    console.log("The  2 lowest priced items were $" + menor1 + " and $" + menor2);
    return;
}

partThree();
