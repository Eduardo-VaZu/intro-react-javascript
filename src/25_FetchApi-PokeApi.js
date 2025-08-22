// URL base de la PokeAPI
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

// === 1. CONCATENACIÓN DE PROMESAS ===
// Aquí encadenamos dos llamadas a `fetch`. La primera obtiene los datos
// de un Pokémon, y la segunda usa esos datos para obtener la descripción
// de la especie del Pokémon.
console.log("--- 1. Obteniendo datos de un Pokémon y su especie ---");
const pokemonNombre = "2";

// Primer `fetch`: obtiene los datos del Pokémon
fetch(`${BASE_URL}${pokemonNombre}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: No se encontró el Pokémon (${response.status})`);
    }
    // Retornamos la promesa para procesar el JSON
    return response.json();
  })
  .then((pokemonData) => {
    // Aquí tenemos los datos del Pokémon.
    console.log(`Datos obtenidos para ${pokemonData.name.toUpperCase()}.`);
    console.log(`Altura: ${pokemonData.height / 10} m`);
    console.log(`Peso: ${pokemonData.weight / 10} kg`);

    // Usamos el URL de la especie que obtuvimos en la primera llamada
    // y retornamos una nueva promesa con el segundo `fetch`.
    return fetch(pokemonData.species.url);
  })
  .then((speciesResponse) => {
    if (!speciesResponse.ok) {
      throw new Error(
        `Error: No se encontró la especie (${speciesResponse.status})`
      );
    }
    // Retornamos la promesa para procesar el JSON de la especie
    return speciesResponse.json();
  })
  .then((speciesData) => {
    // Aquí tenemos los datos de la especie.
    // Buscamos la descripción en español.
    const descripcionEspanol = speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === "es"
    );
    console.log(`--- Descripción ---`);
    console.log(descripcionEspanol.flavor_text.replace(/\n/g, " "));
  })
  .catch((error) => {
    // Un solo `catch` al final de la cadena maneja cualquier error de
    // cualquiera de las promesas.
    console.error("Hubo un problema con la cadena de peticiones:", error);
  });

// === 2. MANEJO DE ERRORES (POKÉMON INVÁLIDO) ===
// Demostramos cómo `fetch` maneja un error del servidor, como cuando
// el Pokémon no existe (status 404 Not Found).
console.log("\n--- 2. Manejo de errores (Pokémon no encontrado) ---");
const pokemonInvalido = "not-a-pokemon";

fetch(`${BASE_URL}${pokemonInvalido}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Error de servidor: No se encontró el Pokémon (${response.status})`
      );
    }
    return response.json();
  })
  .then((data) => {
    console.log("Datos obtenidos:", data);
  })
  .catch((error) => {
    console.error("Hubo un problema con la petición:", error.message);
  });
