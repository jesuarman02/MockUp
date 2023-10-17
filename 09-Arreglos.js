let calificaciones = [100, 85, 45, 76];
let arregloDiferentesTipos = ["Hola", 10, true, [1, 2, 3], function getNombre(){return "Armando"}]
let arregloNumeros = new Array(5);
let arregloLetras = new Array("a", "b", "c")

console.log("calificaciones", calificaciones);
console.log("arregloDiferentesTipos", arregloDiferentesTipos);
console.log("arregloNumeros", arregloNumeros);
console.log("arregloLetras", arregloLetras);

console.log(arregloDiferentesTipos[2]); //true
console.log(arregloDiferentesTipos[4]());
console.log(arregloDiferentesTipos[3][1]); //2

calificaciones.push(90);
console.log("calificaciones", calificaciones); //agrega un nuevo elemento al arreglo

calificaciones.unshift(0); //agregar elementos pero los agrega al principio del areglo
console.log("calificaciones", calificaciones);

let elementoEliminadoFinal = calificaciones.pop(); //quita el ultimo elemento del arreglo
console.log("calificaciones", calificaciones);

let elementoEliminadoInicio = calificaciones.shift(); //quita el primer elemento del arreglo
console.log("calificaciones", calificaciones);

console.log(elementoEliminadoFinal, elementoEliminadoInicio);

let arregloLetrasCopia = arregloLetras;
//arregloLetrasCopia.pop()
//console.log(arregloLetrasCopia, arregloLetras);

let arregloCopia2 = arregloLetras.slice();
//arregloLetrasCopia.pop()
//console.log(arregloCopia2, arregloLetras)

let arregloCopia3 = [...arregloLetras];
arregloCopia3.pop();
console.log(arregloCopia3, arregloLetras);

console.table(calificaciones);