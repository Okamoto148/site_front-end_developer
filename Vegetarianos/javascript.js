

function vegetarianos(){
var nome=document.getElementById('nome').value;
var select = document.getElementById('tipo');
var value = select.options[select.selectedIndex].value;
    if(value<3){
        micro = 'Ferro';
        justificativa='O ferro falta nesta dieta porque a sua principal fonte é a carne vermelha. Muitos alimentos vegetais possuem ferro, no entanto não são muito biodisponíveis. Principalmente as mulheres precisam ficar atentas com esse micronutriente. É preciso o acompanhamento de um profissional.';
    }else if(value<4){
        micro='Ferro e cálcio';
        justificativa='O ferro e o cálcio faltam nesta dieta porque as suas principais fontes são respectivamente a carne vermelha e leite e seus derivados. É preciso o acompanhamento de um profissional. ';
    }else{
        micro='Ferro, cálcio e vitamina B12';
        justificativa='O ferro, cálcio e vitamina B12 faltam nesta dieta porque as suas principais fontes são respectivamente a carne vermelha, leite e derivados e alimentos de origem animal em geral. É preciso o acompanhamento de um profissional.';
    }


resultado.textContent=nome+', você precisa tomar cuidado com os seguintes micronutrientes:'
resultado2.textContent=micro;
resultado3.textContent=justificativa;

}