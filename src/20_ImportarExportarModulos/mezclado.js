// Un archivo puede tener una exportación por defecto y varias nombradas.
const constanteMezcla = "Valor exportado";
function funcionMezcla() {
  return "Esta es una función por defecto.";
}

export { constanteMezcla, funcionMezcla as default };
