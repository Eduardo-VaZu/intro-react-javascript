// Objeto de ejemplo para usar en las funciones
const usuario = {
  id: 42,
  nombre: "Juan",
  pais: "México",
  detalles: {
    rol: "Programador",
    salario: 50000,
  },
};

// === 1. FORMA TRADICIONAL (SIN DESESTRUCTURACIÓN) ===
// En este método, se accede a cada propiedad del objeto usando la notación de punto.
// El código puede volverse repetitivo y menos claro.

function mostrarInfoUsuarioTradicional(obj) {
  console.log("--- 1. Forma Tradicional ---");
  console.log(`ID: ${obj.id}`);
  console.log(`Nombre: ${obj.nombre}`);
  console.log(`País: ${obj.pais}`);
  console.log("----------------------------------");
}

mostrarInfoUsuarioTradicional(usuario);

// === 2. FORMA MODERNA (CON DESESTRUCTURACIÓN) ===
// Las propiedades del objeto se extraen directamente en los parámetros
// de la función, haciendo el código más conciso y legible.

function mostrarInfoUsuarioModerno({ id, nombre, pais }) {
  console.log("--- 2. Forma Moderna (con Desestructuración) ---");
  console.log(`ID: ${id}`);
  console.log(`Nombre: ${nombre}`);
  console.log(`País: ${pais}`);
  console.log("----------------------------------");
}

mostrarInfoUsuarioModerno(usuario);

// === 3. DESESTRUCTURACIÓN ANIDADA EN FUNCIONES ===
// Puedes desestructurar propiedades de objetos anidados de forma muy eficiente.

function mostrarDetallesUsuario({ nombre, detalles: { rol, salario } }) {
  console.log("--- 3. Desestructuración Anidada ---");
  console.log(`Nombre: ${nombre}`);
  console.log(`Rol: ${rol}`);
  console.log(`Salario: ${salario}`);
  console.log("----------------------------------");
}

mostrarDetallesUsuario(usuario);

// === 4. VALORES POR DEFECTO Y ALIAS EN FUNCIONES ===
// Puedes combinar la desestructuración con valores por defecto y aliases.
// Esto es muy útil cuando el objeto no contiene todas las propiedades.

const producto = {
  nombreProducto: "Laptop",
  precio: 1200,
};

function mostrarInfoProducto({ nombreProducto: nombre, precio, stock = 0 }) {
  console.log("--- 4. Valores por Defecto y Alias ---");
  console.log(`Nombre del producto: ${nombre}`);
  console.log(`Precio: $${precio}`);
  console.log(`Stock disponible: ${stock}`);
  console.log("----------------------------------");
}

// Aquí `stock` tomará el valor por defecto de 0
mostrarInfoProducto(producto);
