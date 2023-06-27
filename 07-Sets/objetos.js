//Ejercicio 2
const obj = {
    nombre: 'Misael',
    apellido: 'Flores',
    edad: 29,
    altura: 170,
    eresDesarrollador: true
};

let miEdad = obj.edad;


const miLista = [
    {...obj}, 
    {nombre: 'Angel', apellido: 'Rosas', edad: 39, altura: 168, eresDesarrollador: true},
    {nombre: 'erika', apellido: 'Martinez', edad: 30, altura: 155, eresDesarrollador: true}
];

const listaOrdenada = miLista.sort((a,b)=> b.edad -a.edad);
