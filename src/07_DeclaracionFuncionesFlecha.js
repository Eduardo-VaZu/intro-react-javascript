// === 1. SINTAXIS BÁSICA ===
// Las funciones de flecha simplifican la declaración de funciones.

// Función de flecha sin parámetros
const saludar = () => {
  return "¡Hola a todos!";
};

console.log("--- 1. Sintaxis Básica ---");
console.log(saludar());

// --- 1.1. Con un solo parámetro ---
// Si hay un solo parámetro, los paréntesis son opcionales.
const cuadrado = (numero) => {
  return numero * numero;
};

console.log(`El cuadrado de 5 es: ${cuadrado(5)}`);

// --- 1.2. Con múltiples parámetros ---
// Con dos o más parámetros, los paréntesis son obligatorios.
const sumar = (a, b) => {
  return a + b;
};

console.log(`La suma de 10 y 20 es: ${sumar(10, 20)}`);
console.log("----------------------------");

// === 2. SINTAXIS CONCISA (RETORNO IMPLÍCITO) ===
// Si la función de flecha solo tiene una línea de código que retorna un valor,
// puedes omitir las llaves ({}) y la palabra clave 'return'.

// Función de flecha de una línea con retorno implícito
const doble = (numero) => numero * 2;

console.log("--- 2. Sintaxis Concisa ---");
console.log(`El doble de 8 es: ${doble(8)}`);

// Retorno implícito con múltiples parámetros
const restar = (a, b) => a - b;

console.log(`La resta de 50 y 15 es: ${restar(50, 15)}`);
console.log("----------------------------");

// === 3. EL CONTEXTO DE 'this' EN FUNCIONES DE FLECHA ===
// Este es un punto crucial. A diferencia de las funciones tradicionales,
// las funciones de flecha no tienen su propio 'this'. En su lugar,
// heredan el 'this' del contexto léxico (la función o bloque de código que las rodea).

const persona = {
  nombre: "Ana",
  // Función tradicional: 'this' se refiere al objeto 'persona'
  mostrarNombreTradicional: function () {
    console.log(`--- 3. Contexto de 'this' ---`);
    console.log(`Hola, soy ${this.nombre}.`);
  },
  // Función de flecha: 'this' se hereda del contexto global (window en el navegador)
  // lo cual puede llevar a un comportamiento inesperado.
  mostrarNombreFlecha: (nombre) => {
    console.log(`--- 3. Contexto de 'this' ---`);
    console.log(`Hola, soy ${nombre}.`); // 'this' no es el objeto 'persona'
  },
};

persona.mostrarNombreTradicional(); // Salida: Hola, soy Ana.
persona.mostrarNombreFlecha(persona.nombre); // Salida: Hola, soy undefined. (En el contexto del navegador, this.nombre del objeto global no existe)

// Otro ejemplo del beneficio de 'this' en funciones de flecha con setTimeout
function Temporizador() {
  this.contador = 0;

  // En una función tradicional, 'this' dentro del setTimeout sería 'window'
  // y no tendríamos acceso a 'this.contador'. Se necesitaría 'bind' o guardar 'this' en una variable.
  // const self = this;
  // setInterval(function() {
  //   self.contador++;
  // }, 1000);

  // Con una función de flecha, 'this' se hereda de 'Temporizador',
  // lo que hace que el código sea más limpio y directo.
  setInterval(() => {
    this.contador++;
    console.log(`Contador: ${this.contador}`);
  }, 1000);
}
 const temporizador = new Temporizador();
 console.log(temporizador)
// NOTA: Descomenta las líneas de arriba para ver el contador en acción.
