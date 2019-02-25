var pasajeros = [
    "Alicia Gutierrez",
    "Alfonso Gomez",
    "Luis Navarro",
    "Oscar Garcia",
    "Andres Fernandez",
    "Lucia Mellado"
];

function addPassenger(pasajero, array){
    array.push(pasajero);
}

function deletePassenger(pasajero, array){
    array.splice(pasajeros.indexOf(pasajero), 1);
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

