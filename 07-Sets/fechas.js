//fechas
const fechaHoy = new Date();
const fechaNacimiento = new Date(1994,5,8);
let esMayor = fechaHoy > fechaNacimiento;
let dia = fechaNacimiento.getDate();
let mes = fechaNacimiento.getMonth()+1;
let anyo = fechaNacimiento.getFullYear();