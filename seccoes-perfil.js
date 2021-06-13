// ALTERNAR SECÇÕES PERFIL
const dadosPessoaisSeccao = document.getElementById('dados-pessoais-seccao')
const listaFavoritosSeccao = document.getElementById('lista-favoritos-seccao')
const pedidosFaturasSeccao = document.getElementById('pedidos-faturas-seccao')
const dadosPessoaisBtn = document.getElementById('dados-pessoais-btn')
const listaFavoritosBtn = document.getElementById('lista-favoritos-btn')
const pedidosFaturasBtn = document.getElementById('pedidos-faturas-btn')

if (dadosPessoaisBtn != null) {
  dadosPessoaisBtn.addEventListener('click', () => {
    pedidosFaturasBtn.classList.remove('negrito')
    pedidosFaturasBtn.classList.remove('primária')
    listaFavoritosBtn.classList.remove('negrito')
    listaFavoritosBtn.classList.remove('primária')
    dadosPessoaisBtn.classList.add('negrito')
    dadosPessoaisBtn.classList.add('primária')
    dadosPessoaisSeccao.classList.remove('hidden')
    listaFavoritosSeccao.classList.add('hidden')
    pedidosFaturasSeccao.classList.add('hidden')
  })
}

if (listaFavoritosBtn != null) {
  listaFavoritosBtn.addEventListener('click', () => {
    pedidosFaturasBtn.classList.remove('negrito')
    pedidosFaturasBtn.classList.remove('primária')
    listaFavoritosBtn.classList.add('negrito')
    listaFavoritosBtn.classList.add('primária')
    dadosPessoaisBtn.classList.remove('negrito')
    dadosPessoaisBtn.classList.remove('primária')
    dadosPessoaisSeccao.classList.add('hidden')
    listaFavoritosSeccao.classList.remove('hidden')
    pedidosFaturasSeccao.classList.add('hidden')
  })
}

if (pedidosFaturasBtn != null) {
  pedidosFaturasBtn.addEventListener('click', () => {
    pedidosFaturasBtn.classList.add('negrito')
    pedidosFaturasBtn.classList.add('primária')
    listaFavoritosBtn.classList.remove('negrito')
    listaFavoritosBtn.classList.remove('primária')
    dadosPessoaisBtn.classList.remove('negrito')
    dadosPessoaisBtn.classList.remove('primária')
    dadosPessoaisSeccao.classList.add('hidden')
    listaFavoritosSeccao.classList.add('hidden')
    pedidosFaturasSeccao.classList.remove('hidden')
  })
}

// UPLOAD FOTO DE PERFIL
const utilizadorContentor = document.getElementById('utilizador-contentor')
const utilizadorFoto = document.getElementById('utilizador-foto')
const uploadFotoInput = document.getElementById('upload-foto-input')
const uploadFotoBtn = document.getElementById('upload-foto-btn')

utilizadorContentor.addEventListener('mouseenter', () => {
  uploadFotoBtn.style.display = 'block'
})
utilizadorContentor.addEventListener('mouseleave', () => {
  uploadFotoBtn.style.display = 'none'
})
