//muda o nome a paritr do seletor de classe
var paciente = document.querySelector(".subtitulo");
		paciente.textContent = "Meus Pacientes";  
var Enzin = document.querySelector(".titulo");
			Enzin.textContent = "Enzin nutriçao";
//acessar a tag tr
            var paciente =document.querySelector("#primeiro-paciente");
            console.log (paciente);
//seleciona o peso
            var tdpeso = paciente.querySelector(".info-peso");
            var peso = tdpeso.textContent;
            
			var tdaltura = paciente.querySelector(".info-altura")
            var altura = tdaltura.textContent;
            
//calcula o imc
            var imc = peso / (altura * altura);

// acessa e altera o imc
            var tdimc = paciente.querySelector(".info-imc");
            tdimc.textContent = imc;

            if(peso < 0 || peso > 1000){
                alert("peso inválido");
            }
            if(altura < 0 || altura > 3.00){
                alert("altura inválida");
            }

