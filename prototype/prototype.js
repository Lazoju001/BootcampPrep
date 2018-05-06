function Mamifero(nombre){
    this.nombre=nombre;
    this.descendencia=[];    
};
Mamifero.prototype.saludar=function(){
    return ("Hola, mi nombre es " + this.nombre+ "");
};

Mamifero.prototype.nuevoHijo = function(){ 
    var hijito = {};
    hijito.nombre = this.nombre + " Jr";
    this.descendencia.push(hijo);  
    return hijito;      
};


var miMamifero= new Mamifero("Manny");
var otroMamifero=new Mamifero("Toby");
var hijo=miMamifero.nuevoHijo();
var perro= new Mamifero("perro");
var perrito= perro.nuevoHijo();

function Gato (nombre,color){
    Mamifero.call(this,nombre);
    this.color=color;
}
var gato= new Gato("Capitan", "Blanco");

var otroGato=new Mamifero("Manny");

Gato.prototype=Object.create(Mamifero.prototype)
Gato.prototype.constructor = Gato

Gato.prototype.nuevoHijo=function(color){
    var hijo= new Gato (this.nombre + " Jr", color )
    this.descendencia.push(hijo)
    return hijo;
}











