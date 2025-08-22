// === 1. DECLARACIÓN Y ACCESO ===
// Los arreglos se declaran con corchetes [].
// Se accede a sus elementos usando un índice basado en cero.

console.log("--- 1. Declaración y Acceso ---");

const frutas = ["Manzana", "Naranja", "Banana", "Uva"];
console.log(`El arreglo completo es: ${frutas.join(", ")}`);

// Acceso al primer elemento (índice 0)
console.log(`La primera fruta es: ${frutas[0]}`);

// Acceso al último elemento
console.log(`La última fruta es: ${frutas[frutas.length - 1]}`);
console.log("----------------------------------");

// === 2. MÉTODOS BÁSICOS PARA AGREGAR Y ELIMINAR ELEMENTOS ===
// Los arreglos son mutables, lo que significa que puedes cambiar su contenido.

const vegetales = ["Lechuga", "Tomate", "Zanahoria"];
console.log("--- 2. Métodos de Modificación ---");
console.log(`Arreglo inicial: ${vegetales}`);

// `push()`: Agrega un elemento al final
vegetales.push("Pimiento");
console.log(`Después de push(): ${vegetales.join(", ")}`);

// `pop()`: Elimina y retorna el último elemento
const ultimoVegetal = vegetales.pop();
console.log(`Elemento eliminado con pop(): ${ultimoVegetal}`);
console.log(`Después de pop(): ${vegetales.join(", ")}`);

// `unshift()`: Agrega un elemento al principio
vegetales.unshift("Cebolla");
console.log(`Después de unshift(): ${vegetales.join(", ")}`);

// `shift()`: Elimina y retorna el primer elemento
const primerVegetal = vegetales.shift();
console.log(`Elemento eliminado con shift(): ${primerVegetal}`);
console.log(`Después de shift(): ${vegetales.join(", ")}`);

// `splice()`: Un método poderoso para eliminar o agregar elementos en cualquier posición
// `splice(indice_inicio, numero_de_elementos_a_eliminar, elementos_a_agregar)`
vegetales.splice(1, 1, "Pepino"); // Reemplaza 'Tomate' con 'Pepino'
console.log(`Después de splice(): ${vegetales.join(", ")}`);
console.log("----------------------------------");

// === 3. MÉTODOS DE BÚSQUEDA ===
// `indexOf()`: Retorna el índice del primer elemento que coincide.
// `includes()`: Retorna un booleano (true/false) si el elemento existe.

const numeros = [10, 20, 30, 40, 50];
console.log("--- 3. Métodos de Búsqueda ---");
console.log(`El índice del número 30 es: ${numeros.indexOf(30)}`);
console.log(`¿El arreglo incluye el número 45?: ${numeros.includes(45)}`);
console.log("----------------------------------");

// === 4. ITERACIÓN DE ARREGLOS ===
// Usar bucles y métodos como `forEach`, `map` y `filter` para procesar elementos.

const nombres = ["Ana", "Pedro", "Luis", "Eduardo"];
console.log("--- 4. Iteración de Arreglos ---");

// Bucle `for` clásico
console.log("Con bucle `for`:");
for (let i = 0; i < nombres.length; i++) {
  console.log(`- ${nombres[i]}`);
}

// Método `forEach` (recomendado para iteraciones simples)
console.log("Con `forEach`:");
nombres.forEach((nombre) => {
  console.log(`- ${nombre}`);
});

// Método `map()` (Crea un nuevo arreglo transformado)
const nombresEnMayusculas = nombres.map((nombre) => nombre.toUpperCase());
console.log("Con `map()` para mayúsculas:", nombresEnMayusculas);

// Método `filter()` (Crea un nuevo arreglo con elementos que pasan una condición)
const nombresConA = nombres.filter((nombre) => nombre.includes("a"));
console.log("Con `filter()` para nombres con 'a':", nombresConA);
console.log("----------------------------------");

// === 5. SPREAD OPERATOR (...) CON ARREGLOS ===
// El operador spread es muy útil para copiar o combinar arreglos.

const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];

// Combinar arreglos
const combinado = [...arreglo1, ...arreglo2];
console.log("Combinando arreglos con spread:", combinado);

// Crear una copia superficial
const copiaArreglo1 = [...arreglo1];
copiaArreglo1.push(99);
console.log("Copia del arreglo:", copiaArreglo1);
console.log("Arreglo original sin cambios:", arreglo1);
console.log("----------------------------------");
