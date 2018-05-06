var calculadora;
calculadora=new CalculadoraNPI();

function CalculadoraNPI(){
    array=[];
    var valor=0;
}


    
CalculadoraNPI.prototype.agregar=function(x){
        array.push(x);}           
         
CalculadoraNPI.prototype.sumar=function(){
        if(array.length<2){
            throw 'La calculadoraNPI necesita por lo menos 2 números';
        }else if(array.length==2){
        valor = array[array.length -2] + array[array.length-1];
        }else if(array.length==3){
        valor = array[array.length -2] + array[array.length-1];
        array.pop();
        array.pop();
        array.push(valor);  
        }
    
    };
        
CalculadoraNPI.prototype.restar=function(){
        if(array.length<2){
            throw 'La calculadoraNPI necesita por lo menos 2 números';
        }else if(array.length==2){
        valor = array[array.length -2] - array[array.length-1];
        }else if(array.length==3){
        valor = array[array.length -2] - array[array.length-1];
        array.pop();
        array.pop();
        array.push(valor);  
        }
    
    };

CalculadoraNPI.prototype.multiplicar=function(){
        if(array.length<2){
            throw 'La calculadoraNPI necesita por lo menos 2 números';
        }else if(array.length==2){
        valor = array[array.length -2] * array[array.length-1];
        }else if(array.length==3){
        valor = array[array.length -2] * array[array.length-1];
        array.pop();
        array.pop();
        array.push(valor);  
        }
    
    };

CalculadoraNPI.prototype.dividir=function(){
        if(array.length<2){
            throw 'La calculadoraNPI necesita por lo menos 2 números';
        }else if(array.length==2){
        valor = array[array.length -2] / array[array.length-1];
        }else if(array.length==3){
        valor = array[array.length -2] / array[array.length-1];
        array.pop();
        array.pop();
        array.push(valor);  
        }
    
    };

CalculadoraNPI.prototype.valor=function(){return valor};      




