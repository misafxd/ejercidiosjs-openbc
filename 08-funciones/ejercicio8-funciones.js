function sinPar(){
    return true;
}

const miPromesa = new Promise((resolve, reject) => {
    if (true){
        resolve();
    } else {
        reject();
    }
})

function hola(){
    console.log("Hola soy una promesa");
}

miPromesa
    .then(() => setTimeout(hola, 5000))
    .catch(() => console.log("ERROR"))


function* generarIndices(){
    let indice = 0;
    while(true){
        yield indice;
        indice +=2;
        if (indice === 100){
            return indice;
        }
    }
}

const generar = generarIndices();

console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);



