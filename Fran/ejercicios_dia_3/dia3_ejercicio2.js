var trenes = [true,true,true,false,false,false,false,false]
var i = 0;

do{
    console.log("El tren numero " + (i+1) + (trenes[i] ? "" : " no") + " está funcionando");
    i++;
}
while(trenes.length > i);