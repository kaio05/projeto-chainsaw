// quando passar o mouse por cima de um personagem, selecione e deselecione os outros

const personagens = document.querySelectorAll('.personagem')
const foto = document.querySelector('.personagem-grande')
const nomePersonagem = document.getElementById('nome-personagem')
const descricaoPersonagem = document.getElementById('descricao-personagem')

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')

        foto.src = `./src/imagens/card-${personagem.id}.jpg`
        nomePersonagem.innerHTML = personagem.id
        descricaoPersonagem.innerHTML = personagem.getAttribute('data-description')
    })
})

// quando um personagem for selecionado, a imagem grande muda, junto com o nome e o texto

