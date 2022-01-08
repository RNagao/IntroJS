// comentario
/*
Hello World

var mensagem = "Hello World";
alert(mensagem);
*/

/* operacoes matematicas
var a = 2;
var b = 3;

var soma = a + b;
var sub = a - b;
var mult = a * b;
var div = a / b;

alert(soma);
alert(sub);
alert(mult);
alert(div);
*/

/*Condicional
var a = 2;
var b = 3;
var c = "Hello World";

var soma = a + b;
var sub = a - b;
var mult = a * b;
var div = a / b;

if (a % 2 == 1){
    alert("Numero Impar");
}
else if (c % 2 == 0){
    alert("Numero Par");
}
else{
    alert("Numero Invalido")
}
*/

/*loop
var i = 0;

while (i < 3){
    alert(i);
    i = i + 1;
}

for (var j = 0; j < 3; j++){
    alert(j);
}
*/

/*array
var lista = ["laranja", "maca", "banana"];

alert(lista);
alert(lista[0]);

for (i in lista){
    alert(lista[i]);
}
*/

/*funcao
function soma(a, b){
    console.log(a + b);
}

soma(2, 2);

function sub(a, b){
    return a - b;
}

var s = sub(5, 3);
console.log(s);

function mult(a, b){
    return a * b;
}

console.log(mult(5, 5));
*/

function mensagem(nome){
    alert("Hello " + nome);
}

function mudaCor(cor){
    var elemento = document.getElementById("frase");
    elemento.style.color = cor;
}

function valida(){
    var nome = document.getElementById("nome");
    
    if (nome.value == ""){
        alert("Campo Invalido - Nome em Branco");
    }
    else{
        alert("Form enviado com sucesso");
    }
}