"use strict";
//variaveis
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var nome = "ana";
var idade = 17;
var estudante = true;
//Arrays
var listaDeCompra = ["batata", "feijão", "carne"];
var notas = [10, 8, 20];
//objetos
var professor = {
    nome: 'ana',
    idade: 17,
    disciplinas: ["UC1", "UC2"]
};
//funcões
function mensagem() {
    console.log("ola pessoal");
}
function frase(nome) {
    return 'ola ${nome}, como vai voçe?';
}
function fraseOpcional(nome) {
    console.log("ola " + (nome || "Mundo!"));
}
fraseOpcional("ana");
function cacularValor(valor, desconto) {
    if (desconto === void 0) { desconto = 5; }
    console.log(valor - desconto);
}
cacularValor(100);
cacularValor(100, 10);
var fulano = new Pessoa_1.Pessoa("ana", 17);
console.log(fulano.getAge());
