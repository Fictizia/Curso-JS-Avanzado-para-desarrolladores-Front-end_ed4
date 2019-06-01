var trenes = [true,true,true,false,false,false,false,false,false,true];

for (let i = 0; i < trenes.length; i++) {
    if(trenes[i] && i !== 9){
        console.log("El tren numero " + (i+1) + " está funcionando");
    }else if(i === 9 && trenes[i]){
        console.log("El tren numero " + (i+1) + " 'nocturno' está funcionando");        
    }else if(i === 9 && !trenes[i]){
        console.log("El tren numero " + (i+1) + " 'nocturno' no está funcionando");        
    }else{
        console.log("El tren numero " + (i+1) + " no está funcionando");
    }
}
