// Objeto de ejemplo
const usuario = {
  id: 1,
  nombre: "Alice",
  edad: 25,
  email: "alice@example.com",
  ciudad: "París",
  habilidades: {
    lenguaje: "JavaScript",
    nivel: "Avanzado",
  },
};

// === 1. ASIGNACIÓN BÁSICA ===
// Se extraen las propiedades del objeto directamente en variables con el mismo nombre.

console.log("--- 1. Asignación Básica ---");
const { nombre, edad } = usuario;

console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log("----------------------------------");

// === 2. ASIGNACIÓN CON NOMBRES DE VARIABLES DIFERENTES ===
// Si quieres que la variable tenga un nombre diferente al de la propiedad,
// puedes usar la sintaxis `propiedad: nuevoNombre`.

console.log("--- 2. Asignación con Nombres de Variables Diferentes ---");
const { nombre: nombreUsuario, ciudad } = usuario;

console.log(`Nombre del usuario: ${nombreUsuario}`);
console.log(`Vive en: ${ciudad}`);
console.log("----------------------------------");

// === 3. VALORES POR DEFECTO ===
// Puedes asignar un valor por defecto si la propiedad no existe en el objeto,
// evitando que la variable sea `undefined`.

console.log("--- 3. Valores por Defecto ---");
const { trabajo = "Desempleado", email } = usuario;

console.log(`Email del usuario: ${email}`);
console.log(`Trabajo del usuario: ${trabajo}`);
console.log("----------------------------------");

// === 4. DESESTRUCTURACIÓN DE OBJETOS ANIDADOS ===
// Puedes desestructurar propiedades de un objeto que está anidado en otro.

console.log("--- 4. Desestructuración de Objetos Anidados ---");
const {
  habilidades: { lenguaje, nivel },
} = usuario;

console.log(`Lenguaje: ${lenguaje}`);
console.log(`Nivel: ${nivel}`);
console.log("----------------------------------");

// === 5. DESESTRUCTURACIÓN CON PARÁMETROS REST ===
// Puedes usar la sintaxis rest (`...`) para agrupar las propiedades restantes
// de un objeto en uno nuevo.

console.log("--- 5. Desestructuración con Parámetros Rest ---");
const { id, ...restoDeDatos } = usuario;

console.log(`ID: ${id}`);
console.log(`Resto de datos:`, restoDeDatos);
console.log("----------------------------------");
