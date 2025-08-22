// === 1. OBJETO CON PROPIEDADES ANIDADAS ===
// Creamos un objeto 'autor' que luego será una propiedad dentro de 'libro'.

const autor = {
  nombre: "Gabriel García Márquez",
  nacionalidad: "Colombiano",
};

const libro = {
  titulo: "Cien años de soledad",
  anioPublicacion: 1967,
  // Aquí, el objeto 'autor' se convierte en una propiedad anidada.
  autor: autor,
  // Un método que accede a las propiedades del objeto anidado.
  mostrarInfo() {
    return `"${this.titulo}" fue escrito por ${this.autor.nombre}.`;
  },
};

console.log("--- 1. Objeto con Propiedades Anidadas ---");
console.log(libro.mostrarInfo());
console.log(`La nacionalidad del autor es: ${libro.autor.nacionalidad}`);
console.log("-----------------------------------------");

// === 2. OBJETO ANIDADO CON MÉTODOS ===
// Los objetos anidados también pueden tener sus propios métodos.

const motor = {
  cilindros: 4,
  potencia: "150 HP",
  encender() {
    return "El motor ha sido encendido.";
  },
  apagar() {
    return "El motor ha sido apagado.";
  },
};

const coche = {
  marca: "Honda",
  modelo: "Civic",
  // El objeto 'motor' es una propiedad del objeto 'coche'.
  motor: motor,
  // Un método del objeto 'coche' que llama a un método del objeto 'motor'.
  arrancar() {
    console.log(`Arrancando el ${this.marca} ${this.modelo}...`);
    return this.motor.encender();
  },
};

console.log("--- 2. Objeto Anidado con Métodos ---");
console.log(coche.arrancar());
console.log(`La potencia del motor es: ${coche.motor.potencia}`);
console.log("-----------------------------------------");

// === 3. RELACIÓN ENTRE MÉTODOS DEL MISMO OBJETO ===
// Un método puede llamar a otro método dentro del mismo objeto.

const calculadora = {
  valor: 0,
  sumar(a, b) {
    this.valor = a + b;
    return this.valor;
  },
  multiplicarPor(factor) {
    // Aquí, el método 'multiplicarPor' llama al método 'sumar'
    // para obtener un resultado inicial antes de multiplicarlo.
    this.valor = this.valor * factor;
    return this.valor;
  },
};

console.log("--- 3. Relación entre Métodos del Mismo Objeto ---");
const resultadoSuma = calculadora.sumar(5, 3);
console.log(`Resultado de la suma: ${resultadoSuma}`);

const resultadoMultiplicacion = calculadora.multiplicarPor(2);
console.log(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
console.log("-----------------------------------------");
