// === 1. COPIAR UN OBJETO CON SPREAD ===
// El uso más común del operador spread es crear una copia superficial de un objeto.
// Esto es útil para evitar modificar el objeto original.

console.log("--- 1. Copiar un Objeto con Spread ---");

const personaOriginal = {
  nombre: "Pablo",
  edad: 30,
  profesion: "Desarrollador",
};

// Creamos una copia del objeto `personaOriginal`
const copiaPersona = { ...personaOriginal };

console.log("Objeto original:", personaOriginal);
console.log("Copia del objeto:", copiaPersona);

// Ahora, si modificamos la copia, el original no se ve afectado.
copiaPersona.edad = 35;
console.log("Copia modificada:", copiaPersona);
console.log("Original sin cambios:", personaOriginal);
console.log("-----------------------------------------");

// === 1.1. LA COPIA SUPERFICIAL (SHALLOW COPY) ===
// Es importante entender que el operador spread solo realiza una copia superficial.
// Si un objeto tiene propiedades que son otros objetos, se copia la REFERENCIA.
// Esto significa que un cambio en la copia anidada afectará al original.

console.log("--- 1.1. Demostración de Copia Superficial ---");

const usuarioOriginal = {
  nombre: "Elena",
  direccion: {
    calle: "Calle Principal",
    numero: 123,
  },
};

// Creamos una copia superficial
const copiaUsuario = { ...usuarioOriginal };

// Si modificamos una propiedad de primer nivel, no hay problema.
copiaUsuario.nombre = "Laura";
console.log(`Original.nombre: ${usuarioOriginal.nombre}`);
console.log(`Copia.nombre: ${copiaUsuario.nombre}`);

// Sin embargo, al modificar una propiedad anidada...
copiaUsuario.direccion.calle = "Avenida Central";

// Ambos objetos se ven afectados, porque comparten la misma referencia a la propiedad 'direccion'.
console.log(`Original.direccion.calle: ${usuarioOriginal.direccion.calle}`);
console.log(`Copia.direccion.calle: ${copiaUsuario.direccion.calle}`);
console.log("-----------------------------------------");

// === 2. COMBINAR MÚLTIPLES OBJETOS ===
// El operador spread también te permite fusionar las propiedades de dos o más
// objetos en uno nuevo.

console.log("--- 2. Combinar Múltiples Objetos ---");

const datosPersonales = {
  nombre: "María",
  edad: 28,
};

const datosContacto = {
  email: "maria@correo.com",
  telefono: "123-456-789",
};

const datosEmpleo = {
  puesto: "Diseñadora",
  empresa: "Tech Solutions",
};

// Combinamos todos los objetos en uno solo
const perfilCompleto = {
  ...datosPersonales,
  ...datosContacto,
  ...datosEmpleo,
};

console.log("Perfil completo:", perfilCompleto);
console.log("-----------------------------------------");

// === 3. SOBRESCRIBIR PROPIEDADES ===
// Si dos objetos tienen la misma propiedad, el valor del último objeto
// en la lista de spread sobrescribirá al anterior.

console.log("--- 3. Sobrescribir Propiedades ---");

const configuracionBasica = {
  tema: "claro",
  fuente: "Arial",
  notificaciones: true,
};

const configuracionUsuario = {
  tema: "oscuro", // Este valor sobrescribirá el tema 'claro'
  fuente: "Verdana",
};

const configuracionFinal = {
  ...configuracionBasica,
  ...configuracionUsuario,
};

console.log("Configuración final:", configuracionFinal);
console.log("-----------------------------------------");

// === 4. AÑADIR NUEVAS PROPIEDADES AL COPIAR ===
// Puedes añadir nuevas propiedades a la vez que copias un objeto.

console.log("--- 4. Añadir Nuevas Propiedades ---");

const producto = {
  id: 1,
  nombre: "Laptop",
  precio: 1200,
};

// Copiamos el producto y añadimos una nueva propiedad
const productoConDescuento = {
  ...producto,
  descuento: 0.15,
  precioFinal: producto.precio * (1 - 0.15),
};

console.log("Producto original:", producto);
console.log("Producto con descuento:", productoConDescuento);
console.log("-----------------------------------------");
