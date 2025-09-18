const nombre = "Armando";
const edad = 25;

let nombreActual = "Ana Maria";

const saludo = "Hola, " + nombreActual + ". Tienes " + edad + " años.";

console.log(saludo);


const cuadrado = numero => numero * numero;

console.log(cuadrado(3));
console.log(cuadrado(5));
console.log(cuadrado(10));

const saludoPersonalizado = (nombre, edad) => {
  return `Hola, me llamo ${nombre} y tengo ${edad} años.`;
};

const saludoDeSan = saludoPersonalizado("Santiago", 19);
console.log(saludoDeSan);