//var trenes = [true,true,true,true,true,true,true,true,true,true];
//var trenes = [false,false,false,false,false,false,false,false,false,false];
var trenes = [true,true,true,false,false,false,false,false,false,true,false,true,true];
var allTrainAreActive = false;
var allTrainAreNotActive = false;

function allTrain(elemento){
    return elemento;
}

function noneTrain(elemento){
    return !elemento;
}

function areTrainsSameValues(i){
    if(trenes.every(allTrain)){
        allTrainAreActive = true;
        console.log("Todos los trenes están funcionando");
    }
    if(trenes.every(noneTrain)){
        allTrainAreNotActive = true;
        console.log("Ninguno de los trenes están funcionando");
    }           
}

function train12Status(i){
    if(trenes[9] && trenes[i]){
        console.log("El tren numero " + (i+1) + " 'nocturno' está funcionando");
    }else{
        console.log("El tren numero " + (i+1) + " 'nocturno' no está funcionando");
    }
}

function isSaturday(i){
    var diaSemana = new Date().getUTCDay();
    return diaSemana === 6;
}

function train13Status(i){

    if(isSaturday() && trenes[i]){
        console.log("El tren numero " + (i+1) + " 'fiestero' está funcionando");
    }else{
        console.log("El tren numero " + (i+1) + " 'fiestero' no está funcionando");
    }
}

function trainsStatus(i){
    if(trenes[i] && i !== 9 && i !== 11 && i !== 12){
        console.log("El tren numero " + (i+1) + " está funcionando");
    }else if(i === 9 && trenes[i]){
        console.log("El tren numero " + (i+1) + " 'nocturno' está funcionando");        
    }else if(i === 9 && !trenes[i]){
        console.log("El tren numero " + (i+1) + " 'nocturno' no está funcionando");        
    }else if(i === 11){
        train12Status(i);
    }else if(i === 12){
        train13Status(i);
    }else{
        console.log("El tren numero " + (i+1) + " no está funcionando");
    }
}

areTrainsSameValues(i);

if(!allTrainAreActive && !allTrainAreNotActive){
    for (let i = 0; i < trenes.length; i++) {
        trainsStatus(i);
    }
}






