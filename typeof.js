// Definición de variables con diferentes tipos de datos de variables
let nombre = "Lisbeth"; // string
let edad = 30; // number
let esEstudiante = true; // boolean
let simbolo = Symbol("id"); // symbol
let objeto = { nombre: "Lisbeth", edad: 30, pais:'Venezuela'}; // object
let funcion = () => {
  console.log("Hola Lisbeth");
}; // function
let datos = null; // null
let colores = ['verde', 'azul', 'amarillo']; // object (array)

 console.log(typeof nombre); //string
 console.log(typeof edad); //number
 console.log(typeof esEstudiante ); //boolean
 console.log(typeof simbolo); //symbol
 console.log(typeof objeto); //objeto
 console.log(typeof funcion); //function
 console.log(typeof datos); //objeto "ojo es null"
 console.log(datos === null);//devuelve true (Verificacion correcta para null)
 console.log(typeof colores);// Error devuelve que es un objeto 
 console.log(Array.isArray(colores));//devuelve true (Verificacion correcta para array)






// Función para mostrar el tipo de dato de una variable
// function mostrarTipo(variable, nombreVariable) {
//   let tipo = typeof variable;

  // Caso especial para null y arrays
//   if (variable === null) {
//     console.log(`El tipo de dato de "${nombreVariable}" es: null`);
//   } else if (Array.isArray(variable)) {
//     console.log(`El tipo de dato de "${nombreVariable}" es: array`);
//   } else {
//     console.log(`El tipo de dato de "${nombreVariable}" es: ${tipo}`);
//   }
// }

// Mostrar el tipo de dato de cada variable
// mostrarTipo(nombre, "nombre"); // string
// mostrarTipo(edad, "edad"); // number
// mostrarTipo(esEstudiante, "esEstudiante"); // boolean
// mostrarTipo(datos, "datos"); // null
// mostrarTipo(simbolo, "simbolo"); // symbol
// mostrarTipo(objeto, "objeto"); // object
// mostrarTipo(array, "array"); // array
// mostrarTipo(funcion, "funcion"); // function
