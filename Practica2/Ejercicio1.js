const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
      ciudad: "Qro",
      pais: "Mexico"
   }
};

const { nombre, edad, direccion: { ciudad } } = persona;
console.log("Hola, mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ".");
