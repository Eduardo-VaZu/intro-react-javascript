// === 1. ARREGLOS BÁSICOS ===
// Un repaso rápido sobre cómo se declaran los arreglos y sus elementos.

console.log("--- 1. Arreglos Básicos ---");

const frutas = ["Manzana", "Naranja", "Banana"];
console.log("Arreglo original:", frutas);
console.log("-----------------------------------------");

// === 2. COPIAR UN ARREGLO (COPIA SUPERFICIAL) ===
// Antes se usaba `slice()`, ahora el operador spread es la forma más común.
// Esto crea una copia superficial del arreglo, lo que significa que el arreglo
// original no se modifica si se cambia la copia.

console.log("--- 2. Copiar un Arreglo ---");

const frutasCopia = [...frutas];
frutasCopia.push("Fresa");

console.log("Copia del arreglo con un nuevo elemento:", frutasCopia);
console.log("Arreglo original sin cambios:", frutas);
console.log("-----------------------------------------");

// === 3. COMBINAR MÚLTIPLES ARREGLOS ===
// Con el operador spread, puedes unir varios arreglos en uno solo de forma sencilla.
// Esta es la alternativa moderna al método `concat()`.

console.log("--- 3. Combinar Múltiples Arreglos ---");

const verduras = ["Lechuga", "Tomate"];
const legumbres = ["Garbanzo", "Lenteja"];

// Combinamos los tres arreglos en uno nuevo
const comidaSaludable = [...frutas, ...verduras, ...legumbres];
console.log("Arreglo combinado:", comidaSaludable);
console.log("-----------------------------------------");


// === 4. AÑADIR ELEMENTOS A UN ARREGLO DE FORMA INMUTABLE ===
// El operador spread te permite agregar elementos sin mutar el arreglo original.

console.log("--- 4. Añadir elementos de forma Inmutable ---");

const numeros = [1, 2, 3];
// Añadimos el 0 al principio sin modificar el arreglo `numeros`
const nuevosNumeros = [0, ...numeros];

console.log("Nuevo arreglo:", nuevosNumeros);
console.log("Arreglo original:", numeros);
console.log("-----------------------------------------");
