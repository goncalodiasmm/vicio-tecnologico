const novidadesProduto = document.getElementById('novidades-produto')
const destaquesProduto = document.getElementById('destaques-produto')

// BUSCAR PRODUTOS
class Produtos {
  async buscarProdutos() {
    try {
      let resultado = await fetch('produtos.json')
      let data = await resultado.json()
      let produtos = data.produtos
      return produtos
    } catch (error) {
      console.log(error)
    }
  }
}

// MOSTRAR PRODUTOS
class UI {
  mostrarDestaques(produtos) {
    let resultado = ''
    produtos.destaques.forEach((produto) => {
      resultado += `
      <!-- CARTÃO DE PRODUTO -->
         <a href="detalhe-produto.html">
            <div class="flex-v">
               <img src=${produto.imagem} alt="${produto.nome}" class="w-16">
               <div class="flex-v">
                  <p class="categoria-pequeno">${produto.categoria}</p>
                  <p>${produto.nome}</p>
               </div>
               <div class="flex-h alinhar-centro sucesso">
                  <i class="ri-check-line"></i>
                  <p class="subtexto">Entrega prevista a 30 de Fevereiro</p>
               </div>
               <div class="flex-h alinhar-centro justificar-entre">
                  <h3>${produto.preco}€</h3>
                  <p class="cruzado">${produto.preco}€</p>
               </div>
               <div class="flex-h alinhar-centro">
                  <i class="ri-heart-line alerta"></i>
                  <p class="subtexto">Favoritos</p>
               </div>
            </div>
         </a>
      `
      destaquesProduto.innerHTML = resultado
    })
  }
  mostrarNovidades(produtos) {
    let resultado = ''
    produtos.novidades.forEach((produto) => {
      resultado += `
      <!-- CARTÃO DE PRODUTO -->
         <a href="detalhe-produto.html">
            <div class="flex-v">
               <img src=${produto.imagem} alt="${produto.nome}" class="w-16">
               <div class="flex-v">
                  <p class="categoria-pequeno">${produto.categoria}</p>
                  <p>${produto.nome}</p>
               </div>
               <div class="flex-h alinhar-centro sucesso">
                  <i class="ri-check-line"></i>
                  <p class="subtexto">Entrega prevista a 30 de Fevereiro</p>
               </div>
               <div class="flex-h alinhar-centro justificar-entre">
                  <h3>${produto.preco}€</h3>
                  <p class="cruzado">${produto.preco}€</p>
               </div>
               <div class="flex-h alinhar-centro">
                  <i class="ri-heart-line alerta"></i>
                  <p class="subtexto">Favoritos</p>
               </div>
            </div>
         </a>
      `
      novidadesProduto.innerHTML = resultado
    })
  }
}
// LOCAL STORAGE
class Storage {}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI()
  const produtos = new Produtos()

  // BUSCAR PRODUTOS
  produtos.buscarProdutos().then((produtos) => ui.mostrarDestaques(produtos))
  produtos.buscarProdutos().then((produtos) => ui.mostrarNovidades(produtos))
})

// ALTERNAR BARRA DE NAVEGAÇÃO LATERAL
const navegacaoLateral = document.getElementById('navegacao-lateral')
const hamburgerBtn = document.getElementById('hamburger-btn')
const fecharBtn = document.getElementById('fechar-btn')

if (hamburgerBtn != null) {
  hamburgerBtn.addEventListener('click', () => {
    navegacaoLateral.classList.remove('-left-24')
    navegacaoLateral.classList.add('left-0')
  })
}

if (fecharBtn != null) {
  fecharBtn.addEventListener('click', () => {
    navegacaoLateral.classList.add('-left-24')
    navegacaoLateral.classList.remove('left-0')
  })
}

// ALTERNAR SECÇÃO DE DETALHES E OPINIÕES
const seccaoDetalhes = document.getElementById('seccao-detalhes')
const seccaoOpinioes = document.getElementById('seccao-opinioes')
const detalhesBtn = document.getElementById('detalhes-btn')
const opinioesBtn = document.getElementById('opinioes-btn')

if (detalhesBtn != null) {
  detalhesBtn.addEventListener('click', () => {
    seccaoOpinioes.classList.add('ocultar')
    seccaoDetalhes.classList.remove('ocultar')
    detalhesBtn.classList.add('borda-primária')
    detalhesBtn.classList.remove('borda-cinzento')
    opinioesBtn.classList.add('borda-cinzento')
    opinioesBtn.classList.remove('borda-primária')
  })
}

if (opinioesBtn != null) {
  opinioesBtn.addEventListener('click', () => {
    seccaoDetalhes.classList.add('ocultar')
    seccaoOpinioes.classList.remove('ocultar')
    opinioesBtn.classList.add('borda-primária')
    opinioesBtn.classList.remove('borda-cinzento')
    detalhesBtn.classList.add('borda-cinzento')
    detalhesBtn.classList.remove('borda-primária')
  })
}
