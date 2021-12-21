function mathematicOperations() {
    num1=parseInt(prompt("Cual es el primer numero?"));
    num2=parseInt(prompt("Cual es el segundo numero?"));

    suma=num1+num2;
    resta=num1-num2;
    division=num1/num2;
    multi=num1*num2;
    resto=num1%num2;

    console.log("The sum is " + num1 + " + " + num2 + " -> " + suma + " is the calculated sum");
    console.log("The subtraction is " + num1 + " - " + num2 + " -> " + resta + " is the calculated difference");
    console.log("The multiplication is " + num1 + " * " + num2 + " -> " + multi + " is the calculated multiplication");
    console.log("The division is " + num1 + " / " + num2 + " -> " + division + " is the calculated division");
    console.log("The remainder is " + num1 + " % " + num2 + " -> " + resto + " is the calculated remainder");
}
