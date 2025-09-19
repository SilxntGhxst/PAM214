const personas = [
   { nombre: "Ana", edad: 22 },
   { nombre: "Luis", edad: 35 },
   { nombre: "Maria", edad: 28 },
 ];

//Find
const buscarluis = personas.find(persona => persona.nombre === "Luis");
console.log(buscarluis);

//For each
personas.forEach(persona => console.log(persona.nombre + " tiene " + persona.edad + " años"));

//Reduce
const sumaEdades = personas.reduce((total, persona) => total + persona.edad, 0);
console.log(sumaEdades);
