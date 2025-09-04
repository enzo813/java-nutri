//muda o nome a paritr do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Pacientes";  
var Enzin = document.querySelector(".titulo");
Enzin.textContent = "Enzin nutriçao";
//acessar a tag tr
var paciente =document.querySelectorAll(".paciente");

for(var i = 0 ; i < paciente.length; i++){
   //seleciona o peso
var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;
            
var tdaltura = paciente.querySelector(".info-altura")
var altura = tdaltura.textContent;
            
//calcula o imc
var imc = peso / (altura * altura);
//váriaveis com valor true
var pesoValido = true;
var alturaValida = true; 
//define limites de peso e altura
if(pesoValido && alturaValida){
console.log ("altura invalida");
        // acessa e altera o imc
var tdimc = paciente.querySelector(".info-imc");
tdimc.textContent = imc;
 }if(peso < 0 || peso > 1000){
console.log ("peso invalido");
var pesoValido = false;
tdimc.textContent = "peso invalido"
}
if(altura <= 0 || altura >= 3.00){
var alturaValida = false;
tdimc.textContent = "altura invalida";
}
}


