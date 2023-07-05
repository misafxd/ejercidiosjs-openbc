let nombre = "Misa";
let apellido = "Flores";

const objNombre = {nombre, apellido}

// sessionStorage.setItem("objNombre", JSON.stringify(objNombre))
// localStorage.setItem("objNombre", JSON.stringify(objNombre))

const fecha = new Date()
// document.cookie = `objNombre=${JSON.stringify(objNombre)};expires${new Date(fecha).getTime() + 120000}`