var obj = {}
var setPropsOnObj = function(obj){
    obj.p= 5;
    obj.plataforma= 5;
    obj.proximo= function(x){
        return x+1;
    }
    obj.la = {clave: 0}
    obj.la.clave={secreta:0}
    obj.la.clave.secreta={es:404}

    return obj;
};


var array=[]
var setPropsOnArr = function(array){
array.hola = function(){
    return "Hola!"; 
    };   
array["river"]="plate" 
array[0]=5;
array.doble= function(x){
    return x*2;
}
   return array;
};

var functionObject;


var setPropsOnFunc=function(fn){
 fn.year="2017"
 fn.mitad=function(x){
     return x/2;
     }
 fn.prototype.helloWorld=function(){
     return 'Hello World';
 }

      return fn();
}


 






    














