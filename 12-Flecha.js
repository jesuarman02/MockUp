const obtenerNombre = (Nombre) => Nombre;

const saludar = (Nombre) => {
    return `Hola ${Nombre}`
}

console.log(saludar(obtenerNombre('Armando')));

const calificaciones = [100, 88, 75, 74, 68, 85];

calificaciones.forEach((valor, index, arr) => {
    console.log("valor", valor, "index", index, "arr", arr)
});
console.log(calificaciones.filter((calificaciones) => calificaciones <= 70))
console.log(calificaciones.join("-"));