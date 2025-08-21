//variaveis

import { Pessoa } from "./Pessoa"

let nome:string = "ana"
let idade:number = 17
let estudante:boolean = true

//Arrays
let listaDeCompra:string[]= ["batata" , "feijão" , "carne"]
let notas:Array<number> = [10 , 8, 20]

//objetos
let professor: {nome:string, idade:number, disciplinas:string[]}={
  nome:'ana',
  idade:17,
  disciplinas:["UC1" , "UC2"]
}

//funcões
function mensagem():void{
  console.log("ola pessoal")
}

function frase(nome:string):string{
  return 'ola ${nome}, como vai voçe?'
}

function fraseOpcional(nome?:string):void{
  console.log("ola " + (nome || "Mundo!"))
}
fraseOpcional("ana")

function cacularValor(valor:number, desconto:number = 5):void{
  console.log(valor - desconto)
}

cacularValor(100)
cacularValor(100 , 10)

const fulano:Pessoa = new Pessoa("ana", 17)
console.log( fulano.getAge())