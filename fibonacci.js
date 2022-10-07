const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("ingrese numero entero positivo: ");

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
        /* console.log("f("+index+") =",fn2); */
    }
console.log("f("+number+") =",fn2);
}
else{
    console.log("numero invalido");
}



