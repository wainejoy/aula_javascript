function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar.")
}

function redirecionar(){
    window.open("https://www.globo.com");
    window.location.href = "https://www.globo.com";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por ter passado o mouse!";
    //alert("Trocar Nome!");
    elemento.innerHTML = "Obrigado por passar o mouse!"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    //alert("Trocar Nome!");
    elemento.innerHTML = "Passe o mouse aqui!"
}

function load(){
    alert("Carregando página!");
}

function change(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual a sua idade?: ");
console.log(validaIdade(idade));
alert(soma(5,10));
*/

//alert(setReplace("Vai Japão", "Japão", "Brasil"));

//var d = new Date();
//alert(d.getMonth()+1); //impimir o mês, adiciona mais 1 pois começa sempre do 0
//alert(d.getMinutes()); //imprimir os minutos
//alert(d.getDay());
//alert(d.getFullYear());

/*
var count;
for(count=0; count <=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1;
    alert(count);
    count++;
}
*/

/*
var idade = prompt("Qual a sua idade?: ");
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade.");
}else {
    alert("Menor de idade")
}
*/
//lista de dicionário
//var frutas = [{nome:"maçã", cor:"vermelho"},{nome:"uva", cor:"roxo"}]
//console.log(frutas);
//alert(frutas[1].nome);

//dicionário
//var fruta = {nome:"maçã", cor:"vermelho"};
//console.log(fruta.nome);
//alert(fruta.cor);

//array
//var lista = ["maçã", "pêra", "laranja"]; //criar array
//lista.push("uva"); //push para adicionar elementos ao array 
//lista.pop(); //pop remove o último elemento no array
//console.log(lista.length); //mostra o tamanho do array
//console.log(lista.reverse()); //mostra o array na ordem inversa
//alert(lista);
//console.log(lista);
//console.log(lista.toString()); //imprime array em formato de string
//console.log(lista.join(" - ")); // imprime array, rm formato de stringo, alterando o separador.

//var nome = "Waine Joy";
//var idade = 37;
//var idade2 = 26;
//var frase = "Japão é o melhor time do mundo."
//alert("Bem Vindo " + nome + ", sua idade é " + idade);
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"))
//console.log(frase.toLocaleUpperCase());
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Japão", "Brasil"));