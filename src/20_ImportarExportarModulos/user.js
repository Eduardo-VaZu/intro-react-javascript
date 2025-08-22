// En otro archivo, podemos tener una exportación por defecto.
// Solo puede haber una exportación por defecto por archivo.
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    return `Hola, soy ${this.nombre}.`;
  }
}
// Exportación por defecto
export default Usuario;
