/*
var nome = "Mônica Rodrigues"
var idade = 52
var idade2 = 10
var n1 = 5
var n2 = 8
var frase = "Japão é o maior time do mundo"
var lista = ["maça","banana","morango","uva"]
var pet = [{nome:"Laila", raça:"poodle", sexo:"F"},{nome:"Thor", raça:"Shih tzu", sexo:"M"}]

console.log(`Idade ${idade}`)
console.log(`Idade ${idade2}`)
console.log(frase)
console.log(frase.replace("Japão","Brasil"))
console.log(frase.toLocaleUpperCase())
console.log(n1 * n2)
alert(frase.replace("Japão","Brasil"))
lista.push("uva")
console.log(lista)
lista.pop();
console.log(lista)
console.log(lista.length)
console.log(lista)
console.log(lista.reverse())
console.log(lista.length)
console.log(lista.toString()[0])
console.log(lista.join(" - "))
console.log(pet)
console.log(pet[1].nome)
console.log(pet[1].raça)
*/

/*CONDICIONAL
var idade = prompt("Informe sua idade")

if(idade >= 18){
    alert("Maior de idade")
}
else{
    alert("Menor de idade")
}
*/

//ESTRITURA DE REPETIÇÃO
/*
var count = 0

while( count < 5) {
    console.log(count)
    count++
}
*/

/*
for(count=1; count<5; count++){
    console.log(count)
}
*/

//MANIPULANDO DATAS
/*
var data = new Date()

console.log("Data atual :" + data)
console.log(data.getMonth()+1)
*/

//CRIANDO FUNÇÕES
/*
function soma (n1 , n2) {
   return n1 + n2
}

alert(soma(5,8))

alert(setReplace("Vai Japão", "Japão", "Brasil"))

*/

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function clicou(){
   document.getElementById("obrigada").innerHTML = "<b>Obrigada por clicar</b>"
}

function redirecionar(){
    //window.open("https://www.banhosoft.com.br/")
    window.location.href = "https://www.banhosoft.com.br/"
}

function trocar(elemento){
    elemento.innerHTML = "TEXTO DEPOIS"
}

function voltar(elemento){
    elemento.innerHTML = "TEXTO ANTES"
}

function hello(){
    alert("Hello! Wellcome to this Home Page")
}

function escolha(x){
    console.log(x.value)
}
