var i = 1;
var factorial = 1;

while(true){
    if(i<=10){
        factorial=factorial*i;
    }
    if(i===10){
        break
    }
    i++;
}

console.log(factorial);