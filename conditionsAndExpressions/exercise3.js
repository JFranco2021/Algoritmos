//Ecercise 3


function numberRange(num){
    if(num>=0&&num<=25){
        console.log(num+" is between 0 and 25");
    }else if(num>=26&&num<=100){
        console.log(num+" is between 26 and 100");
        }else if(num>100){
            console.log(num+" is greater than 100");
            }else{
                console.log(num+" is less than 0");
            }
        
    }
numberRange(-4);