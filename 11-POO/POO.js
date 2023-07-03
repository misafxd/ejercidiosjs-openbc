class Estudiante {
    #nombre;
    #asignaturas = ["Javascript", "HTML", "CSS"];

    constructor(nombre){
        this.#nombre = nombre;
    }

    getData(){
        return (`Hola mi nombre es ${this.#nombre} y mis asignaturas son: ${this.#asignaturas}`)
    }
}

const nuevoEstudiante = new Estudiante("Misa");

console.log(nuevoEstudiante.getData());