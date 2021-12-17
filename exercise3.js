
        function contentExercise3(){
            numbersOne=[3,5,7,1,6];
            numbersTwo=[7,5,6,2,5];
        
            numbersOne.sort(function (x,y){
                return y-x;
            });
        
            numbersTwo.sort(function (x,y){
                return y-x;
            });
            if(numbersOne[0]>numbersTwo[0]){
                console.log("The greatest number is " + numbersOne[0]);
            }else if(numbersOne[0]==numbersTwo[0]){
                console.log("The greatest number is shared in both lists and it is " + numbersTwo[0]);
            }else{
                console.log("The greatest number is " + numbersTwo[0]);
            }
        }
            contentExercise3();
        
