function peso(){
    var nome = document.getElementById('nome').value;
    var altura = document.getElementById('altura').valueAsNumber;
    var peso = document.getElementById('peso').valueAsNumber;
    const select = document.getElementById('objetivo');
    const value = select.options[select.selectedIndex].value;
    var IMC = (peso)/(altura*altura);
    var pesoideal;

    if(value<2){
       
        if(IMC<18.5){
            pesoideal = 'é '+((altura*altura)*18.5).toFixed(2) + 'kg'
            pesoideal2 = ((altura*altura)*18.5).toFixed(2);
            calculo = (pesoideal2 - peso).toFixed(2);
            emagrecer='precisa engordar '+calculo+' kg';
            ideal=' ideal ';
        }else if(IMC<25){
           pesoideal = 'é manter o seu peso'
            emagrecer = 'não precisa engordar';
            ideal=' ideal ';
        }else{
           pesoideal = 'não é alinhado ao seu perfil, é necessário emagrecer e neste caso escolher outro objetivo como manutenção de uma vida saudável';
            emagrecer = 'precisa verificar outro objetivo'
            ideal=' ideal ';
            
        }

        comentario = 'Este objetivo serve para pessoas muito magras que precisam engordar para manter a saúde.'

    }else if(value<3){
        
        if(IMC<18.5){
            pesoideal = 'não é alinhado ao seu perfil, é necessário engordar e neste caso escolher outro objetivo como ganhar peso e manter à saúde';
            emagrecer = 'precisa verificar outro objetivo'
        }else if(IMC<25){
            emagrecer = 'não precisa emagracer';
            pesoideal = 'é manter seu peso atual';
            ideal=' ideal ';
            
        }else{
            pesoideal = 'é '+peso*0.9 +' kg';
            pesoideal2= peso*0.9;
            calculo = (peso - pesoideal2).toFixed(2);
            emagrecer='precisa emagrecer '+calculo+' kg';
            ideal=' ideal ';
        }
        comentario = 'Este objetivo serve para pessoas que estão em obesidade e sobrepeso e só querem melhorar os índices metabólicos'
    }else if(value<4){
        if(IMC<18.5){
            pesoideal = 'não é alinhado ao seu perfil, é necessário engordar e neste caso escolher outro objetivo como ganhar peso e manter à saúde';
            emagrecer = 'precisa verificar outro objetivo'
            ideal=' ideal ';
        }else if(IMC<25){
            emagrecer = 'não precisa emagracer';
            pesoideal = 'é manter seu peso atual';
            ideal=' ideal ';
        }else{
            pesoideal = 'é '+((altura*altura)*25).toFixed(2) +' kg';
            pesoideal2= ((altura*altura)*25).toFixed(2);
            calculo = (peso - pesoideal2).toFixed(2);
            emagrecer='precisa emagrecer '+calculo+' kg';
            ideal=' ideal ';
        }

        comentario = 'Este objetivo serve para pessoas que estão com sobrepeso e obesidade e gostariam de emagrecer para manter a saúde.'
        }else if(value<5){
            if(IMC<22.5){
                pesoideal = 'é '+((altura*altura)*22.5).toFixed(2) +' kg';
                pesoideal2 = ((altura*altura)*22.5).toFixed(2);
                calculo=(pesoideal2-peso).toFixed(2);
                emagrecer = 'precisa engordar '+calculo+' kg'
                ideal=' ideal ';
            }else{
                pesoideal = 'é '+((altura*altura)*22.5).toFixed(2) +' kg';
                pesoideal2= ((altura*altura)*25).toFixed(2);
                calculo = (peso - pesoideal2).toFixed(2);
                emagrecer='precisa emagrecer '+calculo+' kg';
                ideal=' ideal ';
            }
    
            comentario = 'Este objetivo serve para todas as pessoas que gostariam de chegar no peso mais saudável.'
        }else{
        if(IMC<18.5){
            pesoideal = 'não é alinhado ao seu perfil, é necessário engordar e neste caso escolher outro objetivo como engordar e manter à saúde.';
            emagrecer='precisa verificar outro objetivo';
            ideal=' ideal ';
        }else{
            pesoideal = 'é '+((altura*altura)*18.5).toFixed(2) + 'kg ,sendo a faixa de peso saudável entre '+ ((altura*altura)*18.5).toFixed(2) +' kg e '+((altura*altura)*25).toFixed(2)+' kg';
            pesoideal2 = ((altura*altura)*18.5).toFixed(2);
            calculo = (peso - pesoideal2).toFixed(2);
            emagrecer=' pode emagrecer mais '+calculo+' kg';
            ideal=' mínimo ';

          
        comentario = 'Este objetivo serve para pessoas que querem emagrecer para estética e mostra o peso mínimo saudável';

        }

        }
    
    function substituicao(s){
        return s.replace('.',',');
    }
    
    resultado.textContent=nome+' os seus resultados são:';
    resultado2.textContent= substituicao('O peso'+ ideal +'para este objetivo  '+pesoideal);
    resultado3.textContent=substituicao('Você '+emagrecer) ;
    resultado4.textContent=comentario
}    
