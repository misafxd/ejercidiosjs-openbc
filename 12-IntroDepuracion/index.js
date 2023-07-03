function lista1(num){
    const lista = [1,1];
    for(let i=1; i<num-1; i++){
        lista.push(lista[i]+(lista[i-1]))
    }
    return lista;
}

const fibonacci = lista1(15);
console.log(fibonacci);