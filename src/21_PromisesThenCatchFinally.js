// === 1. PROMESA QUE SE RESUELVE CON ÉXITO ===
// Cuando una promesa se cumple (se resuelve), el código dentro del `.then()` se ejecuta.

console.log("--- 1. Promesa exitosa ---");
const promesaExitosa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("¡Promesa cumplida!");
  }, 1000);
});

promesaExitosa.then((mensaje) => {
  console.log(`Mensaje de .then(): ${mensaje}`);
  console.log("-----------------------------------------");
});

// === 2. PROMESA QUE ES RECHAZADA ===
// Cuando una promesa falla (es rechazada), el código dentro del `.catch()` se ejecuta.

console.log("--- 2. Promesa rechazada ---");
const promesaRechazada = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("¡Error: La promesa fue rechazada!");
  }, 1500);
});

promesaRechazada
  .then((mensaje) => {
    // Este bloque no se ejecutará
    console.log(`Mensaje de .then(): ${mensaje}`);
  })
  .catch((error) => {
    // Este bloque sí se ejecuta, capturando el error
    console.error(`Error de .catch(): ${error}`);
    console.log("-----------------------------------------");
  });

// === 3. ENCANDENAMIENTO DE PROMESAS (PROMISE CHAINING) ===
// Puedes encadenar múltiples llamadas a `.then()`. El valor de retorno de
// un `.then()` se convierte en el valor de entrada para el siguiente.
// Un único `.catch()` al final puede capturar errores de cualquier `then` en la cadena.

function operacionAsincronica1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Operación 1 completada.");
      resolve(10); // El valor 10 se pasa al siguiente .then()
    }, 1000);
  });
}

function operacionAsincronica2(valor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = valor * 2;
      console.log(`Operación 2 completada. Resultado: ${resultado}`);
      resolve(resultado);
    }, 1000);
  });
}

console.log("--- 3. Encadenamiento de Promesas ---");
operacionAsincronica1()
  .then((resultado1) => {
    // El valor de `resultado1` es 10
    return operacionAsincronica2(resultado1); // Se retorna una nueva promesa
  })
  .then((resultado2) => {
    // El valor de `resultado2` es 20
    console.log(`Resultado final del encadenamiento: ${resultado2}`);
  })
  .catch((error) => {
    // Si cualquier promesa falla, el control salta a este .catch()
    console.error("Un error ocurrió en la cadena:", error);
  })
  .finally(() => {
    console.log("Fin del encadenamiento.");
    console.log("-----------------------------------------");
  });

// === 4. EL MÉTODO .finally() ===
// El bloque `.finally()` siempre se ejecuta al final de una promesa,
// sin importar si se resolvió o se rechazó. Es útil para limpiar recursos.

console.log("--- 4. Uso de .finally() ---");
const promesaConFinally = new Promise((resolve, reject) => {
  const exito = false;
  setTimeout(() => {
    if (exito) {
      resolve("Éxito!");
    } else {
      reject("Fallo!");
    }
  }, 500);
});

promesaConFinally
  .then((valor) => console.log(valor))
  .catch((error) => console.error(error))
  .finally(() => {
    // Esto siempre se ejecuta después de .then() o .catch()
    console.log("¡El finally se ejecuta sin importar el resultado!");
    console.log("-----------------------------------------");
  });
