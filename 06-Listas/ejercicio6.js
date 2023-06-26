const listaCompras = ['leche', 'huevo', 'carne', 'pan', 'queso'];
listaCompras.unshift('Aceite de Girasol');
listaCompras.shift();

const listaPeliculas = [
    {titulo: 'Child"s play 2', Director: 'Jonh Lafia', fecha: new Date(1990, 10, 9)},
    {titulo: 'Back to the future 2', Director: 'Robert Zemeckis', fecha:new Date(1989, 10, 22)},
    {titulo: 'Spiderman 2', Director: 'Marc Webb', fecha:new Date(2014, 3, 18)},
    
]
    
const filtroPelicula = listaPeliculas.filter(valor => valor.fecha > new Date (2010, 1, 10)); 

const listaDirectores = listaPeliculas.map(valor => valor.Director);
const listaTitulos = listaPeliculas.map(valor => valor.titulo);
const listaTituloAutor = listaDirectores.concat(listaTitulos);
const listaPropagacion = [...listaDirectores,...listaTitulos];

