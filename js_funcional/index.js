function hello(nome){
    return "Hello " + nome;
};

var mensagem = hello("Raphael");

console.log(mensagem);



console.log("FUNCAO ANONIMA");
(function (a, b){
    return a + b;
})(5, 5);



console.log("FUNCTION EXPRESSION");
// var(uma variavel global) let(variavel local) const(constante)
const soma = function(x, y){
    return x + y;
};

let resultado = soma(2, 5);

console.log("O resultado e:", resultado);

console.log("arrow function");
const somaDois = (x, y) => {
    return x + y;
};

console.log("O resultado2 e:", somaDois(2, 5));

const somaTres = (x, y) => x + y;
console.log("O resultado3 e:", somaTres(2, 5));



console.log("FUNCAO INVOCADA"); //uma arrow function anonima
(() => {console.log("Hello World")})();



console.log("SPREAD");
const somaQuatro = (x = 0, y = 0, z = 0) => x + y + z;
console.log(somaQuatro(2, 2, 2));
console.log(somaQuatro(2, 2));

const somaCinco = (...numeros) => {
    let aux = 0;
    for (i of numeros){
        aux += i;
    };

    return aux;
};

console.log("Spread:", somaCinco(2, 8, 10, 30, 55));

console.log("operador consicional ternario");
const x = 7;
/*
if (x % 2 == 0){
    resultado = 'par';
}
else{
    resultado = 'impar';
}
*/
const paridade = x % 2 == 0 ? 'par' : 'impar';
console.log(paridade);



console.log("MAP"); // aplica uma func em todos os elementos de um array
var estudantes = [
    {nome: "Jose", nota: 5.7 },
    {nome: "Diego", nota: 4.8 },
    {nome: "Maria", nota: 7.5 },
    {nome: "Paula", nota: 6.7 },
];

//normalizar para maior nota ser 10
let notas = []
for (i of estudantes){
    notas.push(i.nota)
}

let maior_nota = Math.max(...notas)

let notas_normalizadas = estudantes.map(estudantes => (estudantes.nota * 10 / maior_nota).toFixed(2));

console.log(`Notas antigas: ${notas}`);
console.log(`Notas normalizadas: ${notas_normalizadas}`);

function normaliza(x){
    return (x * 10 / maior_nota).toFixed(2);
};

console.log(
    "Novas notas2: "+
        estudantes
            .map(i => i.nota)
            .map(normaliza)
);



console.log("FILTER");
meu_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const par = i => i % 2 == 0;
const impar = i => i % 2 == 1;

console.log("pares:", meu_array.filter(par));
console.log("impares:", meu_array.filter(impar));



console.log("REDUCE"); //funcao aplicada em todos os elementos de um array e da um resultado
num = [1, 2, 3, 4, 5];
const somaNum = (total, i) => total + i;
var somatorio = num.reduce(somaNum);

console.log(somatorio);

notas = [5.7, 6.4, 7.5, 5.9, 5.75];
var n = notas.length;
var media = notas.reduce(somaNum) / n;

console.log(`A media de notas e ${media}`);
