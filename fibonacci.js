
/* funcion para calcular fibonacci */
function fibonacci(number){
    var fn1=0;
    var fn2=1;
    var ftemp;
    var index=1;
    if(number>0){
        while(index<number){
            ftemp=fn2;
            fn2=fn2+fn1;
            fn1=ftemp;
            index++;
        }
        return fn2;
    }
    else{
        console.log("Numero invalido");
        return 0;
    }
}



/* con lectura de archivo */
fs = require('fs')
fs.readFile('./file.txt', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var respuesta = fibonacci(data);
    
    if(respuesta>0){
        console.log("El numero del archivo: "+data);
        console.log("El valor de fibonacci   f("+data+") =",respuesta);
    }
    else{
        console.log("Compruebe el que el archivo tenga solo un numero valido");
    }
});



/* con input de teclado */
var number=1;
while(number!='0'){
    const prompt = require("prompt-sync")({ sigint: true });
    number = prompt("ingrese numero: ");
    if(number !='0'){
        respuesta = fibonacci(number)
        if(number>0){
            console.log("El valor de fibonacci   f("+number+") =",respuesta);
        }
    }   
}



