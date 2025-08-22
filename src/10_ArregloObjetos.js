// === 1. OBJETO CON UN ARREGLO DE STRINGS ===
// Este es un ejemplo básico de cómo un objeto puede tener un arreglo
// como una de sus propiedades.

const usuario = {
  id: 101,
  nombre: "Elena",
  email: "elena@correo.com",
  // La propiedad 'roles' es un arreglo de cadenas de texto
  roles: ["editor", "administrador", "supervisor"],
  // La propiedad 'permisos' es un arreglo de objetos
  permisos: [
    { tipo: "leer", estado: true },
    { tipo: "escribir", estado: false },
  ],
};

console.log("--- 1. Objeto con un Arreglo de Strings ---");
console.log(`El usuario ${usuario.nombre} tiene los siguientes roles:`);

// Accedemos al arreglo y lo recorremos con `forEach`
usuario.roles.forEach((rol) => {
  console.log(`- ${rol}`);
});
console.log("-----------------------------------------");

// === 2. ACCEDIENDO A ELEMENTOS ESPECÍFICOS DEL ARREGLO ===
// Puedes acceder a los elementos del arreglo usando la notación de corchetes.

console.log("--- 2. Acceso a Elementos Específicos ---");
console.log(`El primer rol del usuario es: ${usuario.roles[0]}`); // Salida: editor
console.log(
  `El segundo permiso del usuario es de tipo: ${usuario.permisos[1].tipo}`
); // Salida: escribir
usuario.permisos.forEach((tip)=>{
    console.log(tip.tipo)
})
console.log("-----------------------------------------");

// === 3. MANIPULANDO EL ARREGLO DENTRO DEL OBJETO ===
// Puedes usar los métodos de arreglo directamente en la propiedad del objeto.

const equipoFutbol = {
  nombre: "Los Dragones",
  ciudad: "Barcelona",
  jugadores: [
    { nombre: "Alex", edad: 25, posicion: "delantero" },
    { nombre: "Bruno", edad: 28, posicion: "defensa" },
    { nombre: "Carlos", edad: 22, posicion: "delantero" },
    { nombre: "Diego", edad: 30, posicion: "portero" },
  ],
};

console.log("--- 3. Manipulando el Arreglo ---");

// Usando el método `filter` para encontrar a los delanteros
const delanteros = equipoFutbol.jugadores.filter(
  (jugador) => jugador.posicion === "delantero"
);
console.log("Jugadores delanteros:", delanteros);

// Usando el método `map` para obtener solo los nombres
const nombresJugadores = equipoFutbol.jugadores.map(
  (jugador) => jugador.nombre
);
console.log("Nombres de todos los jugadores:", nombresJugadores);
console.log("-----------------------------------------");
