var asientos = [
    "Alicia Gutierrez",
    "Alfonso Gomez",
    "Luis Navarro",
    "Oscar Garcia",
    "Andres Fernandez",
    "Lucia Mellado",
    "libre",
    "libre",
    "libre",
    "libre",
    "libre",
    "libre",
    "libre",
    "libre",
    "libre",
    "libre"
];

function seatReserved(elemento) {
    return elemento != "libre";
}

//Question
var pasajeros = asientos.filter(seatReserved);

console.log(pasajeros);


function addPassenger(pasajero, array){
    array.push(pasajero);
}

function deletePassenger(pasajero, array){
    array[pasajeros.indexOf(pasajero)] = "libre";
}

function printPassengerList(){
    
    for (let i = 0; i < pasajeros.length; i++) {
        console.log("El pasajero " + pasajeros[i] + " tiene reservado el asiento " + (i+1));
    }
}


printPassengerList();

console.log(
"\n---------------------------------------------------------------------------------\n"
+ "Agregamos el pasajero (Pepito grillo) mas a la lista y eliminamos a Luis Navarro\n"
+ "---------------------------------------------------------------------------------\n "
);

addPassenger("Pepito Grillo", pasajeros);

deletePassenger("Luis Navarro", pasajeros);

printPassengerList();

