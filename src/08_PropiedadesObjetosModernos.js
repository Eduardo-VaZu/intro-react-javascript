// === 1. SINTAXIS ABREVIADA DE PROPIEDAD (PROPERTY SHORTHAND) ===
// Si el nombre de la variable es el mismo que el nombre de la propiedad
// que quieres asignar, puedes omitir la propiedad.

console.log("--- 1. Sintaxis Abreviada de Propiedad ---");

const nombre = "Pablo";
const edad = 30;
const ciudad = "Buenos Aires";

// Antes (sintaxis tradicional)
const personaAntigua = {
  nombre: nombre,
  edad: edad,
  ciudad: ciudad,
};
console.log(personaAntigua);

// Ahora (sintaxis abreviada)
const personaModerna = {
  nombre,
  edad,
  ciudad,
};

console.log(personaModerna);
console.log("-----------------------------------------");

// === 2. SINTAXIS ABREVIADA DE MÉTODOS ===
// Para definir métodos (funciones dentro de un objeto), ya no es necesario
// usar la palabra clave 'function'.

console.log("--- 2. Sintaxis Abreviada de Métodos ---");

const mascota = {
  nombre: "Fido",
  // Sintaxis tradicional
  saludar: function () {
    return `¡Guau! Soy ${this.nombre}.`;
  },
  // Sintaxis abreviada de ES6
  ladrar() {
    return "¡Guau guau!";
  },
};

console.log(mascota.saludar());
console.log(mascota.ladrar());
console.log("-----------------------------------------");

// === 3. NOMBRES DE PROPIEDAD CALCULADOS (COMPUTED PROPERTY NAMES) ===
// Puedes usar una variable o una expresión como nombre de una propiedad.
// Esto es útil cuando el nombre de la propiedad no se conoce de antemano.

console.log("--- 3. Nombres de Propiedad Calculados ---");

const prefijo = "codigo_";
const valorId = 12345;

const producto1 = {
  nombre: "Laptop",
  [prefijo + "sku"]: "ABC-001", // Propiedad calculada
  [`id_` + valorId]: "Identificador",
};

console.log(producto1);
console.log(`El código de SKU es: ${producto1.codigo_sku}`);
console.log("-----------------------------------------");

// === 4. OPERADOR SPREAD EN OBJETOS ===
// El operador spread (...) permite copiar las propiedades de un objeto
// en otro. Esto es muy útil para combinar objetos sin mutar el original.

console.log("--- 4. Operador Spread en Objetos ---");

const usuarioBasico = {
  id: 1,
  nombre: "Luis",
};

const datosAdicionales = {
  email: "luis@correo.com",
  rol: "admin",
};

// Combinar los dos objetos en uno nuevo
const usuarioCompleto = { ...usuarioBasico, ...datosAdicionales };
console.log(usuarioCompleto);

// También puedes sobrescribir propiedades
const usuarioConRolActualizado = { ...usuarioCompleto, rol: "editor" };
console.log(usuarioConRolActualizado);
console.log("-----------------------------------------");

// === 5. DESESTRUCTURACIÓN DE OBJETOS ===
// (Aunque es un tema aparte, está muy relacionado con los objetos)
// Permite extraer propiedades de un objeto y asignarlas a variables.

console.log("--- 5. Desestructuración de Objetos (Relacionado) ---");

const configuracion = {
  tema: "oscuro",
  notificaciones: true,
  idioma: "es",
};

// Extraer propiedades del objeto en variables
const { tema, notificaciones } = configuracion;

console.log(`El tema de la interfaz es: ${tema}`);
console.log(
  `Las notificaciones están: ${notificaciones ? "activadas" : "desactivadas"}`
);
console.log("-----------------------------------------");

console.log("--------------------------------------");

// =========================================================
// === 3. DESESTRUCTURACIÓN DE OBJETOS (DESTRUCTURING) ===
// =========================================================
// Permite extraer propiedades de un objeto a variables separadas.

console.log("--- 3. Desestructuración de Objetos ---");

const producto2 = {
  id: "ABC-123",
  nombreProducto: "Laptop",
  precio: 1200,
  disponible: true,
};

// Extraer propiedades a variables
const { nombreProducto, precio } = producto2;
console.log(`Nombre del producto: ${nombreProducto}, Precio: ${precio}`);

// También puedes renombrar las variables al desestructurar
const { nombreProducto: nombreDelItem } = producto2;
console.log(`Nombre renombrado: ${nombreDelItem}`);
console.log("--------------------------------------");

// =========================================================
// === 4. OPERADOR SPREAD (`...`) ===
// =========================================================
// Permite copiar un objeto o fusionar varios objetos de forma sencilla.

console.log("--- 4. Operador Spread (...) ---");

const infoPersonal = { nombre: "Ana", apellido: "Gómez" };
const infoTrabajo = { profesion: "Diseñadora", empresa: "Innovate LLC" };

// Fusionar objetos
const personaCompleta = { ...infoPersonal, ...infoTrabajo, ciudad: "Bogotá" };
console.log("Objeto fusionado:", personaCompleta);

// Crear una copia del objeto (sin mutar el original)
const copiaPersona = { ...personaCompleta };
console.log("Copia del objeto:", copiaPersona);
console.log("--------------------------------------");

// =========================================================
// === 5. ENCADENAMIENTO OPCIONAL (`?.`) ===
// =========================================================
// Accede de forma segura a propiedades anidadas sin errores si un objeto
// o propiedad es 'null' o 'undefined'.

console.log("--- 5. Encadenamiento Opcional (?. ) ---");

const tienda = {
  nombre: "Mi Tienda",
  sucursal: {
    nombre: "Sucursal Principal",
    gerente: {
      nombre: "Luis",
    },
  },
};
const tiendaSinSucursal = { nombre: "Tienda sin sucursal" };

// Acceso seguro: no da error si 'sucursal' o 'gerente' no existen
const nombreGerente = tienda.sucursal?.gerente?.nombre;
console.log(`Nombre del gerente (con encadenamiento): ${nombreGerente}`);

const nombreGerenteInexistente = tiendaSinSucursal.sucursal?.gerente?.nombre;
console.log(
  `Nombre del gerente (en tienda sin sucursal): ${nombreGerenteInexistente}`
);
console.log("--------------------------------------");
