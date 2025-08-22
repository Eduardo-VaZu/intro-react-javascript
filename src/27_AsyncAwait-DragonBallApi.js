// URL base de la API de Dragon Ball
const BASE_URL = "https://dragonball-api.com/api/characters";

// === 1. OBTENER TODOS LOS PERSONAJES (GET) ===
// Esta función lee una lista de todos los personajes.
async function obtenerPersonajes() {
  console.log(`\n--- Obteniendo todos los personajes ---`);
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error de servidor: ${response.status}`);
    }
    const data = await response.json();
    console.log("Personajes obtenidos exitosamente:", data);
  } catch (error) {
    console.error("Error al obtener los personajes:", error.message);
  }
}

// === 2. OBTENER UN PERSONAJE ESPECÍFICO (GET) ===
// Esta función lee un personaje por su ID y maneja los errores.
async function obtenerPersonajePorId(id) {
  console.log(`\n--- Obteniendo personaje con ID: ${id} ---`);
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error de servidor: ${response.status}`);
    }
    const data = await response.json();
    console.log("Personaje obtenido exitosamente:", data);
    console.log(`Nombre: ${data.name}`);
    console.log(`Planeta: ${data.originPlanet.name}`);
  } catch (error) {
    console.error("Error al obtener el personaje:", error.message);
  }
}

// === 3. CONCATENACIÓN DE AWAIT FETCH ===
// Esta función encadena múltiples llamadas `await fetch` para obtener
// las transformaciones de un personaje en particular.
async function obtenerTransformacionesDePersonaje(nombre) {
  console.log(`\n--- Obteniendo transformaciones de ${nombre} ---`);
  try {
    // Primer `await`: Obtener la lista de todos los personajes.
    const listaResponse = await fetch(`${BASE_URL}?name=${nombre}`);
    if (!listaResponse.ok) {
      throw new Error(`Error al buscar el personaje: ${listaResponse.status}`);
    }
    const personajes = await listaResponse.json();

    // Verificamos si encontramos el personaje
    if (personajes.length === 0) {
      throw new Error(`Personaje "${nombre}" no encontrado.`);
    }

    const personaje = personajes[0];
    console.log(
      `Personaje encontrado: ${personaje.name} con ki de ${personaje.id}.`
    );

    // Segundo `await`: Usar el ID del personaje para obtener sus transformaciones
    const transformacionesResponse = await fetch(
      `${BASE_URL}/${personaje.id}`
    );
    if (!transformacionesResponse.ok) {
      throw new Error(
        `Error al obtener transformaciones: ${transformacionesResponse.status}`
      );
    }
    const transformaciones = await transformacionesResponse.json();

    console.log(`Transformaciones de ${personaje.name}:`);
    transformaciones.transformations.forEach((trans) => {
      console.log(`- ${trans.name}`);
    });
  } catch (error) {
    console.error("Hubo un problema:", error.message);
  }
}

// === EJECUTANDO LAS FUNCIONES ===
(async () => {
  // 1. Obtener todos los personajes
  await obtenerPersonajes();

  // 2. Obtener un personaje específico (por ejemplo, Goku)
  await obtenerPersonajePorId(1);

  // 3. Obtener las transformaciones de un personaje
  await obtenerTransformacionesDePersonaje("Goku");

  // 4. Demostrar el manejo de errores con un ID que no existe
  await obtenerPersonajePorId(9999);
})();
