// Arreglo de ejemplo
const colores = ["Rojo", "Verde", "Azul"];

// === 1. ASIGNACIÓN BÁSICA ===
// Se extraen los elementos del arreglo en variables por su posición.

console.log("--- 1. Asignación Básica ---");
const [primerColor, segundoColor] = colores;

console.log(`El primer color es: ${primerColor}`);
console.log(`El segundo color es: ${segundoColor}`);
console.log("-----------------------------------------");

// === 2. IGNORAR ELEMENTOS DEL ARREGLO ===
// Puedes ignorar elementos en la desestructuración simplemente dejando un espacio
// en blanco con una coma.

console.log("--- 2. Ignorar Elementos ---");
const [, , tercerColor] = colores; // Ignoramos los dos primeros elementos

console.log(`El tercer color es: ${tercerColor}`);
console.log("-----------------------------------------");

// === 3. INTERCAMBIAR VALORES DE VARIABLES ===
// Una aplicación muy común de la desestructuración es intercambiar valores
// entre dos variables sin necesidad de una variable temporal.

console.log("--- 3. Intercambiar Valores ---");
let a = 1;
let b = 2;

console.log(`Valores iniciales: a=${a}, b=${b}`);

[a, b] = [b, a]; // Intercambiamos los valores

console.log(`Valores después del intercambio: a=${a}, b=${b}`);
console.log("-----------------------------------------");

// === 4. ASIGNAR CON PARÁMETROS REST ===
// Puedes usar la sintaxis rest (...) para agrupar los elementos restantes
// del arreglo en uno nuevo. Siempre debe ser el último elemento de la lista.

console.log("--- 4. Parámetros Rest ---");
const numeros = [1, 2, 3, 4, 5];
const [uno, dos, ...restoDeNumeros] = numeros;

console.log(`Primeros dos números: ${uno}, ${dos}`);
console.log(`El resto de números es: ${restoDeNumeros}`);
console.log("-----------------------------------------");

// === 5. VALORES POR DEFECTO ===
// Puedes asignar un valor por defecto si un elemento en la posición
// correspondiente del arreglo no existe.

console.log("--- 5. Valores por Defecto ---");
// eslint-disable-next-line no-unused-vars
const [d, e, f, g = "Cuarto"] = ["Primero", "Segundo", "Tercero"];

console.log(d);
console.log(g);
console.log("-----------------------------------------");
