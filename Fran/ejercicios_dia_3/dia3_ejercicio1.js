var trenes = [true,true,true,false,false,false,false,false]

var i = 0;

/*while(trenes.length > i){
    if(trenes[i]){
        console.log("El tren numero " + (i+1) + " está funcionando");
    }else{
        console.log("El tren numero " + (i+1) + " no está funcionando");
    }
    i++;
}*/

// Con operador ternario pero almo menos legible xD
while(trenes.length > i){
    console.log("El tren numero " + (i+1) + (trenes[i] ? "" : " no") + " está funcionando");
    i++;
}