const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    const resultado2 = document.getElementById('resultado2');
    const resultado3 = document.getElementById('resultado3');
    const total = document.getElementById('total');
    const resultado4 = document.getElementById('resultado4');
    var valorIMC = (peso / (altura * altura)).toFixed(1);
    const select = document.getElementById('tipo');
    const value = select.options[select.selectedIndex].value;

    

if (value < 2) {

    
const alt2 = altura*altura


var classificacao ='';

 if (valorIMC < 18.5){

            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'eutrófico (saudável).';
        }else if (valorIMC < 30){
            classificacao = 'sobrepeso.';
        }else if (valorIMC < 35){
            classificacao = 'obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'obesidade grau II';
        }else {
            classificacao = 'obesidade grau III. Cuidado!!';
        }

let ganho2 = '';

        if (valorIMC < 18.5){
            ganho2 = ((18.5*alt2) - peso).toFixed(2);
        }else if (valorIMC < 25) {
            ganho2 = '0';
        }else {
            ganho2 = (peso - (25*alt2)).toFixed(2);
        }

let ganho3 = '';

        if (valorIMC < 18.5){
            ganho3 = 'engordar ';
        }else if (valorIMC < 25) {
            ganho3 = 'perder';
        }else {
            ganho3 = 'emagrecer';
        }

let ola = '';

        if (valorIMC < 18.5){
            ola = 'Cuidado!!! ';
        }else if (valorIMC < 25) {
            ola = 'Parabéns!!!';
        }else if (valorIMC < 30){
            ola = 'Fique de olho!!!';
        }else{ ola='Cuidado!!!'
        }
        resultado.textContent = `${nome} seus resultados são:`;
        resultado2.textContent = `IMC = ${valorIMC} kg/m²`;
        resultado3.textContent = `Sua classicação é ${classificacao}`;
        total.textContent = `O ideal é você ${ganho3} ${ganho2} kg`;
        resultado4.textContent = ` ${ola}`;
        
    }else if (value <3){
        
       const alt2 = altura*altura


let classificacao ='';

 if (valorIMC < 22){
            classificacao2 = 'abaixo do peso.';
        }else if (valorIMC < 27) {
            classificacao2 = 'eutrófico (saudável).';
        }else {
            classificacao2 = 'sobrepeso.';
        }

let ganho4 = '';

        if (valorIMC < 22){
            ganho4 = ((22*alt2) - peso).toFixed(2);
        }else if (valorIMC < 27) {
            ganho4 = '0';
        }else {
            ganho4 = (peso - (27*alt2)).toFixed(2);
        }

let ganho5 = '';

        if (valorIMC < 22){
            ganho5 = 'engordar ';
        }else if (valorIMC < 27) {
            ganho5 = 'perder';
        }else {
            ganho5 = 'emagrecer';
        }

let ola2 = '';

        if (valorIMC < 22){
            ola2 = 'Cuidado!!! ';
        }else if (valorIMC < 27) {
            ola2 = 'Parabéns!!!';
        }else{ ola2='Cuidado!!!'
        }
        resultado.textContent = `${nome} seus resultados são:`;
        resultado2.textContent = `IMC = ${valorIMC} kg/m²`;
        resultado3.textContent = `Sua classicação é ${classificacao2}`;
        total.textContent = `O ideal é você ${ganho5} ${ganho4} kg`;
        resultado4.textContent = ` ${ola2}`;

	}else if (value < 4) {

              let ganho7 = '';

        if (valorIMC < 18.5){
            ganho7 = '2,3 kg';
        }else if (valorIMC < 25) {
            ganho7 = '1,6 kg';
        }else if (valorIMC < 30){
            ganho7 = '0,9 kg';
        }else if (valorIMC < 80){
            ganho7 = '0 kg';
        }

	let ganho8 = '';

        if (valorIMC < 18.5){
            ganho8 = '0,5 kg';
        }else if (valorIMC < 25) {
            ganho8 = '0,4 kg';
        }else if (valorIMC < 30){
            ganho8 = '0,3 kg';
        }else if (valorIMC < 80){
            ganho8 = '0,3 kg';
        }

	let total8 = '';

        if (valorIMC < 18.5){
            total8 = '12,5 - 18,0 kg';
        }else if (valorIMC < 25) {
            total8 = '11,5 - 16,0 kg';
        }else if (valorIMC < 30){
            total8 = '7,0 - 11,5 kg';
        }else if (valorIMC < 80){
            total8 = '5,0 - 9,0 kg';
        }


	resultado.textContent = `${nome} seus resultados são:`;
        resultado2.textContent = `IMC = ${valorIMC} kg/m²`;
        resultado3.textContent = `Ganho de peso 1º trimestre = ${ganho7}`;
	total.textContent = `Ganho de peso 2º e 3º trimestre = ${ganho8} por semana`;
        resultado4.textContent = `Ganho de peso total = ${total8}`;

    }

	
}

