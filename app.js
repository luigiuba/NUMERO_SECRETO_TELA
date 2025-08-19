let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = AleatorioNumero();
console.log(numeroSecreto);

let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
  {rate:1.2});
  // A função responsiveVoice.speak é usada para ler o texto em voz alta.
}
function mensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();

function AleatorioNumero() {
  let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
  let QuantidadeNumerosSorteados = listaDeNumerosSorteados.length;

  if(QuantidadeNumerosSorteados == numeroMaximo) {
     listaDeNumerosSorteados = [];

  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
return AleatorioNumero();
  } else {
   listaDeNumerosSorteados.push(numeroEscolhido);
   console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Você acertou!');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Parabens!! o número secreto era ${numeroSecreto} e voce usou ${tentativas} ${palavraTentativas}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    // mudar atributo do botão para novo jogo
    document.getElementById('reiniciar').removeAttribute('disabled');

  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor!');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior!');
    }
    tentativas++;
    limparCampo();
  }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
  // mudar atributo do botão para novo jogo}
  function novoJogo() {
    numeroSecreto = AleatorioNumero();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
  }


