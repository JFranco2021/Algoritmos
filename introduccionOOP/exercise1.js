class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    get Describe(){
        return this.nombre +", "+this.edad +" years old"

    }
}


function agregar(){

var x = document.getElementById("nombre").value;
var y = document.getElementById("edad").value;

let individuo = new Persona(x,y);


var x = document.createElement("LI");
var t = document.createTextNode(individuo.Describe);
    x.appendChild(t);
    document.querySelector("#container ol").appendChild(x);

document.getElementById("nombre").value="";
document.getElementById("edad").value="";
}