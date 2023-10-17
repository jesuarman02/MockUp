function despedir(nombre){
    return `Adios ${nombre}` //interpolar es inyectar una variable dentro de una cadena, son estrictamente necesario los bactic
}
console.log(despedir("Armando"));

let functionAlmacenada = function saludar(Nombre) {
    return `Hola ${Nombre}`
}
console.log(functionAlmacenada("Armando"));

let functionAnonimaAlmacenada = function (Nombre) { //No ocupa un espacio de memoria 
    return `Hola ${Nombre}`
}
console.log(functionAnonimaAlmacenada("Jesus"));

console.log(function () {return "Ejecucion"}());

function obtenerPotencia(base, exponente = 2){
    return base ** exponente
}
console.log(obtenerPotencia(2,2));
console.log(obtenerPotencia(2,3));

let funcionFlecha = nombre => `Hola ${nombre}`
console.log(funcionFlecha("Jesus"));




