function arraysExercise5(){
    var people = ["Maria","Dani","Luis","Juan","Camila"];
    console.log(people); // Write a command that prints out all of the people in the list.

    var value = people.indexOf("Dani"); //Write the command to remove "Dani" from the array.

    delete people[value];
    console.log(people);

    value = people.indexOf("Juan"); //Write the command to remove "Juan" from the array.
    delete people[value];
    console.log(people);

    people.push("Salvador");
    console.log(people);

    var value = people.indexOf("Maria"); 
    console.log("Maria se encuentra en la posicion: "+value);

    return;
    }
    arraysExercise5();
