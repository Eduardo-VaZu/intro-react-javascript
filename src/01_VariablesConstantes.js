// === 1. DECLARACIÓN DE VARIABLES ===

// Usamos 'const' para un valor que NO va a cambiar.
// Es la forma preferida por defecto para evitar errores.
let nombre = 'Edaurdo'
const pi = 3.14159;
console.log("Mi nombre es:", nombre);
console.log("El valor de Pi:", pi);

// Usamos 'let' para un valor que SÍ puede cambiar más adelante.
let edad = 25;
console.log("Mi edad inicial es:", edad);

// Podemos reasignar el valor de una variable 'let'.
edad = 26;
console.log("Mi nueva edad es:", edad);

// Intentar cambiar una 'const' resultaría en un error.
//  const pi = 3.14; // Error: 'pi' ya ha sido declarada
// pi = 3.14; // Error: Asignación a variable constante

// La palabra clave 'var' es una forma antigua de declarar variables.
// Hoy en día, casi siempre se usa 'let' y 'const'.
var pais = "Perú";
console.log("Mi pais es:", pais);

// === 2. TIPOS DE DATOS ===

// String (cadena de texto) - Usado para texto.
const saludo = "¡Hola, mundo!";
console.log("Tipo de dato de 'saludo':", typeof saludo);

// Number (número) - Usado para valores numéricos.
const numero = 100;
const decimal = 3.14;
console.log("Tipo de dato de 'numero':", typeof numero);
console.log("Tipo de dato de 'numero':", typeof decimal);

// Boolean (booleano) - Usado para valores de verdad. Solo puede ser true o false.
const esProgramador = true;
console.log("Tipo de dato de 'esProgramador':", typeof esProgramador);

// Array (arreglo/lista) - Colección de elementos, accedidos por un índice.
const colores = ["rojo", "verde", "azul"];
console.log("El segundo color es:", colores[1]);
console.log("Tipo de dato de 'colores':", typeof colores);

// Object (objeto) - Colección de propiedades en formato clave-valor.
const persona = {
  nombre: "Ana",
  ciudad: "Madrid",
  esEstudiante: false,
};
console.log("El nombre de la persona es:", persona.nombre);
console.log("Tipo de dato de 'persona':", typeof persona);

// === 3. OPERADORES BÁSICOS ===

// Operadores aritméticos
const suma = 5 + 3;
const resta = 10 - 4;
const multiplicacion = 6 * 2;
const division = 9 / 3;
console.log(
  "Resultados de operaciones aritméticas:",
  suma,
  resta,
  multiplicacion,
  division
);

// Operadores de comparación (devuelven un booleano: true o false)
const esMayor = 10 > 5; // true
const esIgualDoble = 5 == "5"; // true (compara solo el valor, no el tipo de dato)
const esEstrictamenteIgual = 5 === "5"; // false (compara valor Y tipo de dato)
console.log(
  "Resultados de comparaciones:",
  esMayor,
  esIgualDoble,
  esEstrictamenteIgual
);
