const numeros = [1, 2, 3, 4, 5];
const nombres = ["Ana", "Pedro", "Luis", "Ana"];
const productos = [
  { id: 1, nombre: "Laptop", precio: 1200 },
  { id: 2, nombre: "Mouse", precio: 50 },
  { id: 3, nombre: "Teclado", precio: 100 },
  { id: 4, nombre: "Monitor", precio: 300 }
];

// === 1. MÉTODOS DE ITERACIÓN ===
// Recorren cada elemento del arreglo. No retornan un nuevo arreglo.

console.log("--- 1. forEach() ---");
// `forEach()` ejecuta una función para cada elemento.
nombres.forEach((nombre) => {
  console.log(`- Hola, ${nombre}!`);
});
console.log("-----------------------------------------");

// === 2. MÉTODOS DE TRANSFORMACIÓN ===
// Crean y retornan un nuevo arreglo con los resultados de la operación.

console.log("--- 2. map() ---");
// `map()` crea un nuevo arreglo aplicando una función a cada elemento.
const numerosDobles = numeros.map((numero) => numero * 2);
console.log(`Números originales: ${numeros}`);
console.log(`Números dobles: ${numerosDobles}`);

const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
console.log(`Nombres en mayúsculas: ${nombresMayusculas}`);
console.log("-----------------------------------------");

// === 3. MÉTODOS DE FILTRADO ===
// Crean y retornan un nuevo arreglo con los elementos que cumplen una condición.

console.log("--- 3. filter() ---");
// `filter()` retorna los elementos que pasan una prueba.
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(`Números pares: ${numerosPares}`);

const productosCaros = productos.filter((producto) => producto.precio > 200);
console.log("Productos caros:", productosCaros);
console.log("-----------------------------------------");

// === 4. MÉTODOS DE BÚSQUEDA ===
// Buscan un elemento específico en el arreglo. Retornan un valor único.

console.log("--- 4. find() ---");
// `find()` retorna el primer elemento que cumple una condición.
const productoEncontrado = productos.find((producto) => producto.id === 3);
console.log("Producto con id 3:", productoEncontrado);

console.log("--- 5. indexOf() / lastIndexOf() ---");
// `indexOf()` retorna el índice de la primera ocurrencia.
console.log(`Índice de "Ana": ${nombres.indexOf("Ana")}`);
console.log(`Índice de la última "Ana": ${nombres.lastIndexOf("Ana")}`);
console.log("-----------------------------------------");

// === 6. MÉTODOS DE REDUCCIÓN ===
// Combinan todos los elementos del arreglo en un único valor.

console.log("--- 6. reduce() ---");
// `reduce()` aplica una función a un acumulador y cada valor del arreglo.
const sumaTotal = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(`Suma total de los números: ${sumaTotal}`);

const precioTotal = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(`Precio total de los productos: ${precioTotal}`);
console.log("-----------------------------------------");
