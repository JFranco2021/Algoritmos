
function arraysExercise5(){
    var people = ["Maria","Dani","Luis","Juan","Camila"];
    console.log(people); // Write a command that prints out all of the people in the list.

    var value = people.indexOf("Juan"); //Write the command to remove "Dani" from the array.
    console.log(value);
    people.splice(value,value+1);
    console.log(people);

    value = people.indexOf("Dani"); //Write the command to remove "Juan" from the array.
    people.splice(value,value);
    console.log(people);

    return;
    }
    arraysExercise5();
