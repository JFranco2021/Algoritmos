class book{
    constructor(titulo,genero,autor,leer,leerFecha){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leer = leer;
        this.leerFecha = leerFecha;
    }

    get Describe(){
        return "TITULO: "+this.titulo +" GENERO: "+ this.genero +" AUTOR: "+ this.autor +" YA LEIDO: "+ this.leer +" FECHA: "+ this.leerFecha
    }
}

function agregar(){

    var a = document.getElementById("titulo").value;
    var b = document.getElementById("genero").value;
    var c = document.getElementById("autor").value;
    var d = document.getElementById("leer").value;
    var e = document.getElementById("leerFecha").value;

    
    let libro = new book(a,b,c,d,e);
    
    var x = document.createElement("li");
    var t = document.createTextNode(libro.Describe);
        x.appendChild(t);
        document.querySelector("#container ol").appendChild(x);
    
        document.getElementById("titulo").value="";
        document.getElementById("genero").value="";
        document.getElementById("autor").value="";
        document.getElementById("leer").value="";
        document.getElementById("leerFecha").value="";


    }
