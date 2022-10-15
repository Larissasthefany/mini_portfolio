/*
OBJETIVO - Quando clicarmos na aba temos que mostrar o conteúdo da aba que foi  clicada pelo usuário e esconder o conteúdo da aba anterior
*/  

// Passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML.

const abas = document.querySelectorAll(".aba")


abas.forEach((aba => {
    // Passo 2- Dar um jeito d eidentificar o clique no elemento da aba

    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

        SelectionarAba(aba)

        mostrarInformacaoesDaAba(aba)
    })
}))

function SelectionarAba(aba){
    // Passo 3 - Quando usar o clicar, desmarca a aba selecionada.
     const abaSelecionada = document.querySelector(".aba.selecionado");
    
     abaSelecionada.classList.remove("selecionado")

    // Passo 4 - Marcar a aba clicada como selecionada
    aba.classList.add("selecionado")
}

function mostrarInformacaoesDaAba(aba){
    // Passo 5 - Esconder o conteúdo anterior
const informacaoSelecionada = document.querySelector(".informacao.selecionado")

informacaoSelecionada.classList.remove("selecionado")

//  Passo 6 - Mostrar o conteúdo da aba selecionada
const idDoElementoDeInformacaoDasAba = `informacao-${aba.id}`

const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacaoDasAba)

informacaoASerMostrada.classList.add("selecionado")
}

