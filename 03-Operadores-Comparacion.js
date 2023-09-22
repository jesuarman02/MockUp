/* 
    | Nombre   | Sintaxis   |
    |----------|------------|
    |Igual     | ==         |
    | No es I  | !=         |
    |Comp.Est  | ===        |
    |Desi. Est | !==        |
    |Mayor que | >          |
    |Menor que | <          |
    |Mayor igu | >=         |
    |Menor igu | <=         |
*/

console.info('Igual')
console.log (1 == 0) //false
console.log (true == 1) //true
console.log (false == 0) //true
console.log ('1' == 1) //true
console.log (0 == 0) //true

console.info('No es Igual')
console.log (1 != 0) //false
console.log (true != 1) //true
console.log (false != 0) //true
console.log ('1' != 1) //true
console.log (0 != 0) //true

console.info('Comparación Estricta')
console.log (1 === 0) //false
console.log (true === 1) //false
console.log (false === 0) //false
console.log ('1' === 1) //false
console.log (0 === 0) //true

console.info('Desigualdad Estricta')
console.log (1 !== 0) //true
console.log (true !== 1) //true
console.log (false !== 0) //true
console.log ('1' !== 1) //true
console.log (0 !== 0) //falso

console.info('Mayor que ')
console.log(5 > 5)//falso
console.log(5 > 0)//true
console.log(4 > 3)//true

console.info('Menor que ')
console.log(5 < 5)//falso
console.log(5 < 0)//falso
console.log(1 < 3)//true

console.info('Mayor igual que ')
console.log(5 >= 5)//true

console.info('Menor igual que ')
console.log(4 <= 6)//true
console.log(4 <= 4)//true

console.log(3 > 2 >1)//falso
