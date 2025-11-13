/** Exibir aviso na página ->*/
alert('Boas vindas ao meu jogo');
/**declarar variável -> */ 
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativas = 1;
console.log(numeroSecreto); 
/**declarar uma caixa de textos -> */
let chute = prompt(`Adivinhe o número secreto entre 1 e ${numeroMaximo}`);
//Enquanto chute for difente de numero secreto continuar repetindo o aviso
while (chute != numeroSecreto) {
    chute = prompt (`Adivinhe o número secreto entre 1 e ${numeroMaximo}`);
//Se chute for igual ao número secreto exibir o aviso
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}.`);
        } else {
            alert (`O número secreto é maior que ${chute}.`);
        }
        //tentativas = tentativas + 1
        tentativas++
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1){
//    alert (`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//}else{
//    alert (`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}

