var calculadora = crearCalculadora()

function crearCalculadora(){
var obj={};

var inicio=0
obj.valor=function(){
    return obj.valor=0;
}         
     
obj.sumar=function(x){   
var entrada=x;
var valor = entrada + inicio
obj.valor=valor
obj.valor=function(){    
    obj.valor = valor;
    return obj.valor
}
inicio=valor;

}
obj.restar=function(x){   
    var entrada=x;
    var valor = inicio - entrada
    obj.valor=valor
    obj.valor=function(){    
        obj.valor = valor;
        return obj.valor
    }
    inicio=valor;    
    }



obj.reset=function(){   
     var valor=0;
     obj.valor=valor
     obj.valor=function(){
         obj.valor = valor;
         return obj.valor
    }      
    }
return obj
}





    



