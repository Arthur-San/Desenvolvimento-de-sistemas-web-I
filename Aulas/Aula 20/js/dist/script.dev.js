"use strict";

function calcularTudo() {
  var valor1 = parseInt(window.prompt("informe o valor 1: "));
  var valor2 = parseFloat(window.prompt("informe o valor 2: "));
  var soma = valor1 + valor2;
  var diferenca = valor1 - valor2;
  var produto = valor1 * valor2;
  var divisao = valor1 / valor2;
  var restoDaDivisao = valor1 & valor2;
  var potencia = Math.pow(valor1, valor2);
  var raiz = Math.pow(valor1, 1 / valor2);
  window.alert("Dados e cálculos\n" + "Valor 1: " + valor1 + "\n" + "Valor 2: " + valor2 + "\n" + "Soma: " + soma + "\n" + "Diferença: " + diferenca + "\n" + "Produto: " + produto + "\n" + "Divisão" + divisao + "\n" + "Resto da divisão: " + restoDaDivisao + "\n" + "Potência: " + potencia + "\n" + "Raiz: " + raiz);
}

function calcularSalario() {
  var nome = window.prompt("Informe o nome do funcionário: ");
  var valorHora = parseFloat(window.prompt("informe o valor hora: "));
  var cargaHoraria = parseFloat(window.prompt("informe a carga horaria base: "));
  var salarioBruto = valorHora * cargaHoraria;
  window.alert("Dados do funcionário\n" + "Nome: " + nome + "\n" + "Valor hora: " + valorHora + "\n" + "Carga Horaria: " + cargaHoraria + "\n" + "Salário bruto: " + salarioBruto);
}

function calcularMediaDoAluno() {
  var nome = window.prompt("Informe o nome do aluno: ");
  var nota1 = parseFloat(window.prompt("informe a nota 1"));
  var nota2 = parseFloat(window.prompt("informe a nota 2"));
  var media = (nota1 + nota2) / 2;
  window.alert("Dados do Aluno\n" + "Nome: " + nome + "\n" + "Nota 1: " + nota1 + "\n" + "Nota 2: " + nota2 + "\n" + "Média: " + media);
}

function trocarValores() {
  var a = parseInt(window.prompt("Informe o valor de a inteiro: "));
  var b = parseInt(window.prompt("Informe o valor de b inteiro: "));
  var c = parseInt(window.prompt("Informe o valor de c inteiro: "));
  var aux = a;
  a = b;
  b = c;
  c = aux;
  window.alert("Valores trocados\n" + "A: " + a + "\n" + "B: " + b + "\n" + "C: " + c);
}

function calcularPeso() {
  var peso = parseFloat(window.prompt("Informe o peso atual: "));
  var pesoMais15 = peso * 1.15;
  var pesoMenos20 = peso * 0.80;
  window.alert("Dados da pessoa \n" + "Peso atual: " + peso + "\n" + "Peso se engordar 15%: " + pesoMais15 + "Kg" + "\n" + "Peso se emagrecer 20%: " + pesoMenos20 + "Kg");
}

function calcularBaskara() {
  var a = parseInt(window.prompt("Informe o valor de a inteiro: "));
  var b = parseInt(window.prompt("Informe o valor de b inteiro: "));
  var c = parseInt(window.prompt("Informe o valor de c inteiro: "));
  var x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  var x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  window.alert("Dados da Baskara\n" + "A: " + a + "\n" + "B: " + b + "\n" + "C: " + c + "\n" + "X' = " + x1 + "\n" + "x'' = " + x2);
}

function testarPositivoNegativo() {
  var numero = parseFloat(window.prompt("Informe um número qualquer: "));

  if (numero > 0) {
    var resposta = "Positivo";
  } else if (numero < 0) {
    var resposta = "Negativo";
  } else {
    resposta = "Nulo";
  }

  window.alert("O número " + numero + " é: " + resposta);
}

function testarParImpar() {
  var numero = parseInt(window.prompt("Informe um número inteiro qualquer: "));

  if (numero == 0) {
    var resposta = "Nulo";
  } else if (numero & 2 != 0) {
    var resposta = "Impar";
  } else {
    var resposta = "Par";
  }

  window.alert("O número " + numero + " é: " + resposta);
}