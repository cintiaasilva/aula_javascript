                    /* Primeira aula de JS*/

/*var nome = "Cintia";
var idade = 21;
var idade1 = 24;
var frase = "Deus é incrivel"

//alert("Bem vinda "+ nome);
//alert(idade + idade1);
//alert(frase.replace("incrivel", "único"))

console.log(nome);
console.log(idade+idade1);
console.log(frase.toUpperCase);
console.log(frase.toLowerCase);
console.log(frase.replace("incrivel" , "único"));*/


                    /* Segunda aula de JS*/

/*Array*/

/*var lista = ["maça","pera","laranja"];

console.log(lista);
lista.push("uva");

console.log(lista);

lista.pop();
console.log(lista);

console.log(lista[1]);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));


alert(lista[1]);*/


/*Dicionario*/

/*var fruta = {nome: "maça", cor: "vermelha" };

console.log(fruta);
console.log(fruta.nome);

alert(fruta.cor);*/


/*Lista de dicionarios*/

/*var frutas = [ {nome: "maça", cor: "vermelha" } , {nome: "banana", cor: "amarela" } , {nome: "pera", cor: "verde claro" } ];

console.log(frutas);
console.log(frutas.nome);

alert(frutas.cor);*/

                    /* Terceira aula de JS*/

//var idade = prompt("Qual a sua idade? ")
//var idade = 18;


/*Condições*/
/*if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};*/



/*Laços de repetições*/

//var count = 0;

/*while (count <= 5){
    console.log(count);
    count++;
}; */

/*for(count; count <= 5; count++){
    alert(count);
}*/


/*Data*/

/*var d = new Date();

alert(d);
alert(d.getMonth());
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
alert(d.getTimezoneOffset());

console.log("Hoje é "+ d.getDate() + "/" + (d.getMonth()+1) ) */


                    /* Quarta aula de JS*/

/*function soma(n1 , n2){
    return n1 + n2;
}

alert(soma(5 ,10));

function setRepleace(frase, nome, novo_nome){
    return frase.repleace(nome, novo_nome);
}

alert(setRepleace("aaaaa eeeee", "eeeee", "iiiii"));*/

/*var validar; // variavel global

function validaIdade(idade){

    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }

    return validar;
}

var idade = prompt("Qual sua idade? ");

validaIdade(idade);

console.log(validar);*/

                    /* Quinta aula de JS*/

function botao(){
    alert("Vc clicou no botão");
}

function clicou(){
    document.getElementById("agradecimento");
    document.getElementById("agradecimento").innerHTML = "<b>Click com a injetar um texto com innerHtml</b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.canva.com/colors/color-palettes/forever-fields/"); //abre em outro guia
    window.location.href = "https://www.canva.com/colors/color-palettes/forever-fields/"; //abre no mesmo guia

}

/*function trocar(){
    document.getElementById("mousemove").innerHTML = "Trocando a mensagem";
   // alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
   // alert("trocar texto");
}*/


//OU

/*function trocar(elemento){
    elemento.innerHTML = "Trocando a mensagem";
}

function voltar(elemento){
   elemento.innerHTML = "Passe o mouse aqui";
}*/

function load(){
    alert("Pag carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}