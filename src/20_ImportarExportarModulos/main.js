// En el archivo principal (ej. 'main.js'), importaríamos lo anterior:
console.log("--- 1. Importaciones Nombradas ---");
// Importamos las exportaciones nombradas usando las llaves {}
import { PI, sumar } from "./utils.js";

console.log(`El valor de PI es: ${PI}`);
console.log(`El resultado de la suma es: ${sumar(10, 5)}`);

// También puedes importar todas las exportaciones con un alias
import * as utils from "./utils.js";
console.log(`El resultado de la resta es: ${utils.restar(10, 5)}`);
console.log("-----------------------------------------");

// En el archivo principal, importamos la exportación por defecto.
// La importación por defecto no usa llaves y puede tener cualquier nombre.
import MiUsuario from "./user.js";

console.log("--- 2. Importación y Exportación por Defecto ---");
const nuevoUsuario = new MiUsuario("Carlos");
console.log(nuevoUsuario.saludar());
console.log("-----------------------------------------");

// Para importarlas juntas, se usa la siguiente sintaxis:
import funcionMezcla, { constanteMezcla } from "./mezclado.js";
console.log("--- 3. Mezcla de Exportaciones ---");
console.log(funcionMezcla());
console.log(`El valor importado es: ${constanteMezcla}`);
console.log("-----------------------------------------");