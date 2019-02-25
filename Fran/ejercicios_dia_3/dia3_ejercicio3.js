var trenes = [true,true,true,false,false,false,false,false];

for (let i = 0; i < trenes.length; i++) {
    console.log("El tren numero " + (i+1) + (trenes[i] ? "" : " no") + " está funcionando");
}

