// Criar variáveis com o DOM chamando os elementos HTML necessários
const imagensPainel = document.querySelectorAll('.imagem-painel'); // Nodelist com todas as imagens do painel
const setaAvancar = document.getElementById('btn-avancar'); 
const setaVoltar = document.getElementById('btn-voltar');

// CONTADOR PARA SABER EM QUAL IMAGEM ESTOU PELO NUMERO DO INDICE
let imagemAtual = 0; // Começa na primeira imagem, que é o índice 0

// FUNÇÃO PARA ESCONDER A IMAGEM
function esconderImagens (){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

// FUNÇÃO PARA MOSTRAR A IMAGEM
function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

// FUNÇÃO PARA AVANÇAR A IMAGEM (1 quando clicar na seta "avaçar" temos que esconder todas as imagens e mostrar a proxima imagem)
setaAvancar.addEventListener('click', function () {

    // Se o contador de imagemAtual for igual ao número total de imagens - 1 (porque começa do 0), ou seja, se estiver na última imagem, não faça nada
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens){ // condição de parada para não avançar mais
        console.log('não pode avançar mais');
        return; // Sai da função
    }

// 2-A imagem atual começa do 0, pq é a primeira imagem assim que for clicado no avançar, preciso adicionar mais 1 ao contador de imagns para saber que agora vou mostrar a segunda imagem. 
// (O ++ VAI ADICIONAR MAIS 1 TODA VEZ QUE CLICARMOS NO ELEMENTO DA SETA INCREMENTANDO)
    imagemAtual++;

// 3- Esconder todas as imagens, pegar todas as imagens usando o DOM e remover a classe mostrar
    esconderImagens();

// 4- Mostrar a imagem atual, pegar a imagem atual do painel e adicionar a classe mostrar
    mostrarImagem();

});

// FUNÇÃO PARA VOLTAR A IMAGEM (1 quando clicar na seta "voltar" temos que esconder todas as imagens e mostrar a imagem anterior)
setaVoltar.addEventListener('click', function(){

    if(imagemAtual === 0){
        console.log('não pode voltar mais');
        return; // Sai da função
    }

    //decrementar o contador de imagens
    imagemAtual--;

    //3 esconder todas a imganes, pegar todas as imagens usando o DOM e remover a classe mostrar
   esconderImagens();

    //6 mostrar a proxima imagem 
    //pegar todas as imganes, descobrir qual é a proxima, e colocar a classe mostrar nela

    mostrarImagem();
})