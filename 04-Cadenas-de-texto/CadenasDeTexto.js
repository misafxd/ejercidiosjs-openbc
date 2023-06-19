let miNombre = "Misael";
let miApellido = "Flores";

let estudiante = `${miNombre} ${miApellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let numeroLetras = estudiante.length;
let primeraLetra = miNombre[0];
let ultimaLetra = miApellido[miApellido.length-1]

let sinEspacios = estudiante.replace(/ /g, "");
let estaElNombre = estudiante.includes(miNombre);

console.log(estaElNombre);


