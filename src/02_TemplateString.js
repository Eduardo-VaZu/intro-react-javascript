// === 1. DECLARACIÓN DE VARIABLES ===

// Usaremos estas variables para nuestros ejemplos.
const nombre = "Juan";
const edad = 30;
const producto = "Laptop";
const precio = 850;
const descuento = 0.15; // 15% de descuento

// === 2. CONCATENACIÓN CLÁSICA (Método Antiguo) ===

// Usando el operador '+' para unir texto y variables.
// A menudo, esto puede ser difícil de leer y propenso a errores.
const saludoAntiguo =
  "Hola, mi nombre es " + nombre + " y tengo " + edad + " años.";
console.log("Método Antiguo:");
console.log(saludoAntiguo);

// === 3. TEMPLATE STRINGS (Método Moderno) ===
// Usando comillas invertidas (backticks: `` ` ``) y la sintaxis `${}`.
// Esto es mucho más limpio y legible.
const saludoModerno = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log("Método Moderno (Template String):");
console.log(saludoModerno);

// === 4. FUNCIONALIDADES CLAVE DE LOS TEMPLATE STRINGS ===

// A) Inserción de Expresiones:
// Puedes poner expresiones de JavaScript complejas dentro de ${}.
const precioFinal = precio - precio * descuento;
const mensajeCompra = `El producto es una ${producto} y su precio con descuento es de $${precioFinal.toFixed(
  2
)}.`;
console.log("Ejemplo con expresiones:");
console.log(mensajeCompra);

// B) Múltiples Líneas:
// Los Template Strings permiten crear strings de varias líneas
// sin necesidad de usar el carácter de escape '\n'.
const poema = `
            Las estrellas brillan,
            la luna sonríe,
            el código se ejecuta.
        `;
console.log("Ejemplo con múltiples líneas:");
console.log(poema);
