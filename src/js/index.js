const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes"); 

botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener("click", () =>{

        const botaoSelecionado = document.querySelector(".selecionado");

        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const imagemVirtual = document.querySelector(".virtual");
        imagemVirtual.classList.remove("virtual");

        imagens[indice].classList.add("virtual");  

        const informacoesVirtual = document.querySelector(".informacoes.virtual");
        informacoesVirtual.classList.remove("virtual");

        informacoes[indice].classList.add("virtual");

    })
})