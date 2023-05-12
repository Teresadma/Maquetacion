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
    // document.getElementById("print").innerHTML = nombre + apellidos;
    document.getElementById("print").innerHTML = `<div>${nombre}</div>
                                                <div>${apellidos}</div>
                                                <div>${origen}</div>
                                                <div>${destino}</div>
                                                <div>${numPers}</div>
                                                <div>${fecha}</div>` 
}
let arrayPersona = [];    

function filtrar(){
let arrayFiltrado = arrayPersona.filter(persona => (persona.destination == "mallorca")||(persona.destination == "galicia")||(persona.destination == "canarias"));      
console.log(arrayFiltrado);
let info = "";
for (let i=0;i<arrayFiltrado.length;i++){
    info += `<div>${nombre}</div>
    <div>${apellidos}</div>
    <div>${origen}</div>
    <div>${destino}</div>    
    <div>${fecha}</div>`;
}  
console.log(info)
document.getElementById("print").innerHTML = info
}





