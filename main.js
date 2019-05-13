function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1;
}

function falaUmAPraVcVer() {
    let num = Math.floor(Math.random() * 101);
    return isPrime(num) ?  "Faça" : "Não faça";
}

const pElement = document.querySelector("main section p");
const btnElement = document.querySelector("main button");
const textoInicial =  'Sua resposta é...';

pElement.innerHTML = textoInicial;

btnElement.onclick = function() {
    pElement.innerHTML = '';
    let texto = document.createTextNode(falaUmAPraVcVer());
    pElement.appendChild(texto);
    setTimeout(function() {
        pElement.innerHTML = textoInicial;
    }, 1000)
    
}

