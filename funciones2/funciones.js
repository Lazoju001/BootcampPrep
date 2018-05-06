

function concatenar(nombre, apellido){
 var string= nombre + " " + apellido
return string;
}

var string = concatenar("Juan", "Lazo");



   
   function concatenar(){
       var string="";
      for(var i=0 ;i<arguments.length; i++){ 
            string =string + arguments[i];   
      }   
      return string;
    }
    
var string = concatenar('Esto', ' ', 'tendría que', ' ', 'usar join');


var funcionparainvocar=function(){
    return "Me llamaron!";
}

var otraFuncion=function(){
    return " y despues otra!";
}

var invocarFunciones=function(){
    var string = "";
    var otro = []
    for(var i=0 ;i<arguments.length; i++){
        otro[i]= arguments[i](); 
     string=  string + otro[i]  
    } 
    return  string;
}


function creadorDeIncrementos(x){
    var incremento=x
  return function(valor){
    var resultado=valor+incremento;
    return resultado;
  }     
}
var incrementarPor2 =creadorDeIncrementos(2)
var incrementarPor5 =creadorDeIncrementos(5)




var num = 0;


function invocacionUnica(x){

    var ejecuta = x();
    return function(){
        return ejecuta
    } 
} 

var incrementar = invocacionUnica(function() {
    num++;
  });

var decrementar = invocacionUnica(function() {
    num--;
  });


/////// objeto con closure



var obj;
var num=0;


function objetoConClousure(){

return function(){
    var otro={}
    otro.incremento=function(){
        num++;
    }
    otro.incrementoPor10=function(){
        num=num+10;
    }
    otro.pedirValor=function(){
        return num;
    }
    otro.cambiarValor=function(x){
        num=x;
    }
    return otro;
}();
}

function ListaDeFuncionesInvitados(arr,arg){
    var invitado=arr.slice();
    var nombre=arr.slice();
    var codigo=arg;    
    for(var i=0; i<nombre.length;i++){ 
        function ejecutar(){
            var z=i;      
    nombre[i]= function(x){
         if(x===codigo){
             console.log(z)
            return invitado[z]
         }
         return 'código secreto: invalido'
    }    
}
ejecutar();
}
return nombre;
}


var listaOficial = armarListaDeInvitados(funcionesInvitados,codigoSecreto);

function armarListaDeInvitados (fn,codigo){
    var array=[];
    for(var i=0;i<fn.length;i++){
        array[i] = fn[i](codigo);
    }
    return array
};



    
    
    












