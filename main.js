  
const botao = document.querySelector(".botao")
botao.addEventListener("click" , jogo);

function perdeuOJogo () {
    alert(`Você PERDEU!`);
 }

function jogo () {
    let numeroAleatorio = Math.floor(Math.random()*5); 
   

    for ( let i = 1; i < 4; i++){
        let pergunta = parseInt(prompt('Insira um número de 1 à 5'));
        

        if ( pergunta == numeroAleatorio) {
            alert(`Você ACERTOU!!!`);
            break;   
        }
        else if ( i <= 2){ 
            alert(`Você usou ${i} vida de 3!`);
            alert(`Tente novamente.`);
            
        }  
        else if ( i <=3) {
            alert(`Você usou ${i} vida de 3!`);
            perdeuOJogo();
        }
        
    }

}

