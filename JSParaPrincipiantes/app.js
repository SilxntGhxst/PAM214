console.log("Hola Mundo");
console.log(1234);
console.log(true);
console.log([1,2,3,4]);
console.log({"Username" : "Ryan", "Score" : 1000});

var nameUser = "Ryan";
let lastName = "Carter";

console.log(nameUser + ' ' + lastName);

const pi = 3.1416;// Declaración de una constante
//pi = 3.14; // Esta línea generará un error porque 'pi' es una constante

console.log(pi);

let numUno = 10;
let numDos = 20;
let resultadoSuma = numUno + numDos;
let resultadoResta = numUno - numDos;
let resultadoMultiplicacion = numUno * numDos;
let resultadoDivision = numUno / numDos;
let resultadoModulo = numUno % numDos;
console.log("El resultado de la suma es: " + resultadoSuma);
console.log("El resultado de la resta es: " + resultadoResta);
console.log("El resultado de la multiplicación es: " + resultadoMultiplicacion);
console.log("El resultado de la división es: " + resultadoDivision);
console.log("El resultado del módulo es: " + resultadoModulo);

let comparacion1 = numUno > numDos; // false
let comparacion2 = numUno < numDos; // true
let comparacion3 = numUno == numDos; // false
let comparacion4 = numUno != numDos; // true

console.log("numUno es mayor que numDos: " + comparacion1);
console.log("numUno es menor que numDos: " + comparacion2);
console.log("numUno es igual a numDos: " + comparacion3);
console.log("numUno es diferente de numDos: " + comparacion4);

let contraseña = "admin123";
if (contraseña == "admin123") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

