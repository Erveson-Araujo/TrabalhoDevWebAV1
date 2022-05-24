function calcularfatorial(fatorial){
    if (isNaN(fatorial)){
        return 'Não existe fatorial de um texto';
    }
    if (!Number.isInteger(fatorial) || fatorial < 0){
        return 'Não existe fatorial de um número não natural';
    }
    if (fatorial === 0 || fatorial === 1){
        return 1;
    }
    const resultado = fatorial;
    const multiplicador = fatorial - 1;
    for (const i = multiplicador; i > 1; i--){
        resultado *= i;
    }
    return resultado;
}

console.log(calcularfatorial(5));




const max = 120;
function soma(a,b){
    const c = a + b;
    if (c < 120){
        return soma(c, (a+b));
    }
    return c;
}
const resultado = soma(1,2);

console.log(resultado);





const a = 10
const b = 8

function menor(a,b){
    if (a < b){
        return a;
    }
    else{
        return b;
    }
}

console.log(menor(a,b));





const a = 40

function tipo(a){
    const teste = a % 2;
    if (teste == 0){
        return 1;
    }
    else{
        return 0;
    }
}

console.log(tipo(a));






const F = 100

function conversor(F){
    const C = ((F - 32) * 5) / 9;
    return C;
}

console.log(conversor(F));






function fibonacci(num){
    if (n === 1){
        return 1;
    }
    if (n === 2){
        return 2;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(55));