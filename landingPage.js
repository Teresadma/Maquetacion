function info () {
    let nombre = document.getElementById("nombre").value.toLowerCase();
    let apellidos = document.getElementById("apellidos").value.toLowerCase();
    let origen = document.getElementById("origen").value.toLowerCase();
    let destino = document.getElementById("destino").value.toLowerCase();
    let numPers = document.getElementById("numPersonas").value.toLowerCase();
    let fecha = document.getElementById("fecha").value.toLowerCase();
    
    let objPersona = {name: nombre,
                    surname: apellidos,
                    origin: origen,
                    destination: destino,
                    number: numPers,
                    date: fecha}
    // console.log(objPersona)
    arrayPersona.push(objPersona)
    console.log(arrayPersona)
    document.getElementById("print").innerHTML = nombre + apellidos;
}
let arrayPersona = [];    

function filtrar(){
let arrayFiltrado = arrayPersona.filter(Persona => (Persona.destination == "mallorca")||(Persona.destination == "galicia")||(Persona.destination == "canarias"));      
console.log(arrayFiltrado)
}




