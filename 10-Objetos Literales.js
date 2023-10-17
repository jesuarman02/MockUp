const persona = {
    nombre : "Jesus Armando",
    edad : 22,
    sexo : "H",
    casado: false,
    telefonos: [5536461323, 5523422478, 5540992287],
    saludar: function saludar() {return "Hola"}
}
console.log(persona.edad); //22
console.log(persona.telefonos[1]); //22
console.log(persona.saludar());

persona.apellidos = "Ambrosio Garcia";
console.log(persona);

delete persona.saludar;
console.log(persona);           