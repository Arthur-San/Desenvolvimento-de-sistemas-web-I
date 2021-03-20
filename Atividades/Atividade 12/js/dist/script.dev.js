"use strict";

function question01() {
  var value01 = parseInt(window.prompt("informe o valor de value01: "));
  var value02 = parseFloat(window.prompt("informe o valor de value02: "));
  var soma = value01 + value02;
  var diferenca = value01 - value02;
  var produto = value01 * value02;
  var divisao = value01 / value02;
  var restodadivisao = value01 & value02;
  var potencia = Math.pow(value01, value02);
  var raiz = Math.sqrt(value01, value02);
  window.alert("o valor dos valores é: " + "\n" + soma + "\n" + diferenca + "\n" + produto + "\n" + divisao + "\n" + potencia + "\n" + raiz);
}

function question02() {
  var nome = window.prompt("informe o seu nome");
  var valorhora = parseFloat(window.prompt("informe o valor hora"));
  var cargahoraria = parseFloat(window.prompt("informe a carga horaria"));
  var salariobruto = valorhora * cargahoraria;
  window.alert("\nseu nome é: " + nome + "\n" + "seu valor por hora é: R$" + valorhora + "\n" + "sua carga horária é: " + cargahoraria + "h" + "\n" + "seu salário bruto é: R$" + salariobruto);
}

function question03() {
  var nome = window.prompt("informe o seu nome");
  var nota1 = parseFloat(window.prompt("informe a nota 1"));
  var nota2 = parseFloat(window.prompt("informe a nota 2"));
  window.alert("nota 1 é: " + nota1 + "\n nota 2 é: " + nota2 + "\n média é: " + (nota1 + nota2) / 2);
}

function question04() {
  var a = parseFloat(window.prompt("informe o valor A"));
  var b = parseFloat(window.prompt("informe o valor B"));
  var c = parseFloat(window.prompt("informe o valor C"));
  window.alert("\nOs valores \n" + "A= " + a + " B= " + b + " C= " + c + "\nforam modificados para:" + "\n A= " + b + " B= " + c + " C= " + a);
}