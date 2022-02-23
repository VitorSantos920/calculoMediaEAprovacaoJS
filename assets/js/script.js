var nomeUser = prompt("Olá, digite seu nome: "); // Requisitando o nome do usuário.

// Boas vindas e instruções
window.alert("Seja bem-vindo (a): " + nomeUser + ", ao sistema de verificação de aprovação por média!" );
window.alert("Por gentileza, digite as 4 notas do aluno, para obter sua média.")

// Requisitando as notas 1,2,3,4 e armazenando nas respectivas variáveis (Entrada de Dados)
var nota1 = parseFloat(window.prompt("Digite a 1ª nota: "));
window.alert("A nota: " + nota1 + " foi inserida com sucesso!");

var nota2 = parseFloat(window.prompt("Digite a 2ª nota: "));
window.alert("A nota: " + nota2 + " foi inserida com sucesso!");

var nota3 = parseFloat(window.prompt("Digite a 3ª nota: "));
window.alert("A nota: " + nota3 + " foi inserida com sucesso!");

var nota4 = parseFloat(window.prompt("Digite a 4ª nota: "));
window.alert("A nota: " + nota4 + " foi inserida com sucesso!");

// Realizando o cáculo da média aritmética (Processamento)
var media =  (nota1 + nota2 + nota3 + nota4) / 4;

// Exibindo os resultados (média e status de aprovação) ao usuário (Saída de Dados)
document.getElementById("media").innerHTML = "A média do aluno foi: " + media;

if(media <= 6){ 
    document.getElementById("status").innerHTML = "REPROVADO!";
    document.getElementById("status").style.color = "red";
}else {
    document.getElementById("status").innerHTML = "APROVADO!";
    document.getElementById("status").style.color = "green";
}