// PRODUTOS PÁGINA INICIAL
const novidadesProduto = document.getElementById('novidades-produto')
const destaquesProduto = document.getElementById('destaques-produto')

// OPINIÕES PÁGINA INICIAL
const opinioesWebsite = document.getElementById('opinioes-website')

// DETALHE DE PRODUTO
const apresentacaoProduto = document.getElementById('apresentacao-produto')

// LISTA FAVORITOS
const listaFavoritos = document.getElementById('lista-favoritos-seccao')
function mostrarFavoritos() {
  let resultado = ''
  const items = JSON.parse(localStorage.getItem('favoritos'))
  items.forEach((item) => {
    resultado += `<div class="flex-h alinhar-inicio">
        <img src="${item.imagem1}" class="w-12">
        <div class="flex-h justificar-entre">
            <div class="flex-v">
              <p class="negrito">${item.nome}</p>
              <div class="flex-h alinhar-centro espaço-0.25">
                <i class="ri-check-line sucesso"></i>
                <p class="subtexto sucesso">Entrega entre 3 a 5 dias úteis</p>
              </div>
              <div class="flex-h espaço-0-5">
                  <a href="#"><button class="btn-primário mt-1 categoria-pequeno">Adicionar ao
                        Carrinho</button></a>
                  <a href="#"><button class="btn-alerta mt-1 categoria-pequeno">Remover</button></a>
              </div>
            </div>
        </div>
        <p class="negrito">${item.preco}€</p>
      </div>`

    if (listaFavoritos != null) {
      listaFavoritos.innerHTML = resultado
    }
  })
}
// LISTA DE COMPRAS
const listaCompras = document.getElementById('lista-compras')
const pedidoCompras = document.getElementById('pedido-compras')
const listaCarrinhoNumero = document.getElementById('lista-carrinho-numero')
const rodapeCompras = document.getElementById('rodape-compras')
let carrinhoTotal = document.getElementById('carrinho-total')
const contadorQuantidade = document.querySelector('.contador-quantidade')

function mostrarCarrinho() {
  let resultado = ''
  const items = JSON.parse(localStorage.getItem('carrinho'))
  items.forEach((item) => {
    resultado += `
    <div class="flex-h flex-inicial alinhar-centro espaço-4">
        <div class="flex-h alinhar-centro">
          <div class="w-16">
              <img src="${item.imagem1}"
                alt="auriculares xiaomi">
          </div>
          <div class="flex-v">
              <p class="negrito">${item.nome}</p>
              <div class="flex-h alinhar-centro espaço-0.25">
                <i class="ri-check-line sucesso"></i>
                <p class="subtexto sucesso">Entrega entre 3 a 5 dias úteis</p>
              </div>
          </div>
        </div>
        <p class="subtítulo">${item.preco}€</h3>
    </div>`

    if (listaCompras != null) {
      listaCompras.innerHTML = resultado
    }

    // PAGAMENTO 1 - QUANTIDADE PRODUTO
    let adicionarQuantidade = document.getElementById('adicionar-quantidade')
    let subtrairQuantidade = document.getElementById('subtrair-quantidade')
    let produtoQuantidade = document.getElementById('produto-quantidade')
    let removeCarrinho = document.getElementById('remove')

    if (adicionarQuantidade) {
      adicionarQuantidade.addEventListener('click', () => {
        produtoQuantidade.value = parseInt(produtoQuantidade.value) + 1
        carrinhoTotal.innerHTML = parseFloat(
          item.preco * produtoQuantidade.value
        ).toFixed(2)
        localStorage.setItem('carrinhoTotal', carrinhoTotal.innerHTML)
        localStorage.setItem('produtoQuantidade', produtoQuantidade.value)
      })
    }

    if (subtrairQuantidade) {
      subtrairQuantidade.addEventListener('click', () => {
        if (produtoQuantidade.value < 1) {
          produtoQuantidade = 0
        } else {
          produtoQuantidade.value = parseInt(produtoQuantidade.value) - 1
          carrinhoTotal.innerHTML = parseFloat(
            item.preco * produtoQuantidade.value
          ).toFixed(2)
          localStorage.setItem('carrinhoTotal', carrinhoTotal.innerHTML)
        }
      })
    }

    if (removeCarrinho) {
      removeCarrinho.addEventListener('click', () => {
        removeCarrinho = localStorage.removeItem('carrinho')
        listaCompras.classList.add('hidden')
        contadorQuantidade.classList.add('hidden')
        remove.classList.add('hidden')
        localStorage.setItem('carrinhoTotal', 0)
        carrinhoTotal.innerHTML = 0
      })
    }
  })
}

// CARRINHO E FAVORITOS
let carrinho = []
let favoritos = []

function lerId() {
  let url = new URL(window.location)
  let id = url.searchParams.get('id')
  return id
}

// BUSCAR PRODUTOS
class Produtos {
  async buscarProdutos() {
    try {
      let resultado = await fetch('data.json')
      let data = await resultado.json()
      let produtos = data.produtos
      return produtos
    } catch (error) {
      console.log(error)
    }
  }
}

// BUSCAR OPINIÕES
class Opinioes {
  async buscarOpinioes() {
    try {
      let resultado = await fetch('data.json')
      let data = await resultado.json()
      let opinioes = data.opinioes
      return opinioes
    } catch (error) {
      console.log(error)
    }
  }
}

// MOSTRAR PRODUTOS
class UI {
  mostrarNovidades(produtos) {
    let resultado = ''
    produtos.forEach((produto) => {
      if (produto.seccao == 'Novidades') {
        resultado += `
        <!-- CARTÃO DE PRODUTO -->
           <a href="detalhe-produto.html?id=${produto.id}">
              <div class="flex-v">
                 <img src=${produto.imagem1} alt="${produto.nome}" class="w-16">
                 <div class="flex-v">
                    <p class="categoria-pequeno">${produto.categoria}</p>
                    <p>${produto.nome}</p>
                 </div>
                 <div class="flex-h alinhar-centro sucesso">
                    <i class="ri-check-line"></i>
                    <p class="subtexto">Entrega entre 3 a 5 dias úteis</p>
                 </div>
                 <div class="flex-h alinhar-centro justificar-entre">
                    <h3>${produto.preco}€</h3>
                    <p class="cruzado">${(produto.preco * 1.5).toFixed(2)}€</p>
                 </div>
                 <div class="flex-h alinhar-centro">
                    <i class="ri-heart-line alerta"></i>
                    <p class="subtexto">Favoritos</p>
                 </div>
              </div>
           </a>
        `
        if (novidadesProduto != null) {
          novidadesProduto.innerHTML = resultado
        }
      }
    })
  }

  mostrarDestaques(produtos) {
    let resultado = ''
    produtos.forEach((produto) => {
      if (produto.seccao == 'Destaques') {
        resultado += `
        <!-- CARTÃO DE PRODUTO -->
           <a href="detalhe-produto.html?id=${produto.id}">
              <div class="flex-v">
                 <img src=${produto.imagem1} alt="${produto.nome}" class="w-16">
                 <div class="flex-v">
                    <p class="categoria-pequeno">${produto.categoria}</p>
                    <p>${produto.nome}</p>
                 </div>
                 <div class="flex-h alinhar-centro sucesso">
                    <i class="ri-check-line"></i>
                    <p class="subtexto">Entrega entre 3 a 5 dias úteis</p>
                 </div>
                 <div class="flex-h alinhar-centro justificar-entre">
                    <h3>${produto.preco}€</h3>
                    <p class="cruzado">${(produto.preco * 1.5).toFixed(2)}€</p>
                 </div>
                 <div class="flex-h alinhar-centro">
                    <i class="ri-heart-line alerta"></i>
                    <p class="subtexto">Favoritos</p>
                 </div>
              </div>
           </a>
        `
        if (destaquesProduto != null) {
          destaquesProduto.innerHTML = resultado
        }
      }
    })
  }

  mostrarProduto(produto) {
    let resultado = `
    <!-- BREADCRUMBS -->
    <section id="breadcrumbs">
      <div class="flex-h alinhar-centro my-2">
         <i class="ri-home-line"></i>
         <p class="categoria-pequeno">/ ${produto.categoria}</p>
         <p class="categoria-pequeno">/ ${produto.subCategoria}</p>
      </div>
    </section>

    <!-- APRESENTAÇÃO PRODUTO -->
    <section id="apresentacao-produto">
      <div class="mt-2 mb-4">
         <div class="flex-h flex-ajustar">
            <!-- FOTOGRAFIAS PRODUTO -->
            <div class="flex-h">
               <div class="flex-v espaço-1" id="fotografias-mini-produto">
                  <div class="w-6 border-2 border-solid border-cinzento-10 rounded">
                     <img src="${produto.imagem1}"
                        alt="${produto.nome}">
                  </div>
                  <div class="w-6 border-2 border-solid border-cinzento-10 rounded">
                     <img src="${produto.imagem2}"
                        alt="${produto.nome}">
                  </div>
                  <div class="w-6 border-2 border-solid border-cinzento-10 rounded">
                     <img src="${produto.imagem3}"
                        alt="${produto.nome}">
                  </div>
                  <div class="w-6 border-2 border-solid border-cinzento-10 rounded">
                     <img src="${produto.imagem4}"
                        alt="${produto.nome}">
                  </div>
               </div>
               <div>
                  <img src="${produto.imagem1}" alt="${produto.nome}">
               </div>
            </div>
            <!-- INFORMAÇÃO PRODUTO -->
            <div class="flex-v espaço-0-5">
               <div class="flex-h espaço-2">
                  <div class="flex-h">
                     <i class="ri-check-line sucesso"></i>
                     <div>
                        <p class="subtexto negrito">Produto Disponível</p>
                        <p class="subtexto">${
                          produto.stock
                        } restantes em stock</p>
                     </div>
                  </div>
                  <div class="flex-h">
                     <i class="ri-truck-line sucesso"></i>
                     <div>
                        <p class="subtexto negrito">Envio Grátis</p>
                        <p class="subtexto">Entrega entre 3 a 5 dias úteis</p>
                     </div>
                  </div>
               </div>
               <div class="etiqueta-primária categoria-pequeno alinhar-item-inicio mt-1 mb-1">Novidade</div>
               <h3>${produto.nome}</h3>
               <div class="flex-h alinhar-centro justificar-entre">
                  <h2>${produto.preco}€</h2>
                  <h3 class="cruzado cinzento-60 regular">${(
                    produto.preco * 1.5
                  ).toFixed(2)}€</h3>
               </div>
               <div class="flex-h alinhar-centro espaço-1">
                  <div class="flex-h alinhar-centro espaço-0-25">
                     <div class="rating">${produto.classificacaoEstrelas}</div>
                     <p>${produto.classificacaoValor}</p>
                  </div>
                  <div class="divisória-vertical"></div>
                  <div class="flex-h alinhar-centro espaço-0-25">
                     <i class="ri-user-fill"></i>
                     <p>${produto.opinioes} opiniões</p>
                  </div>
               </div>
               <p class="subtexto">ID Produto: ${produto.id}</p>
               <div class="flex-h alinhar-centro espaço-2">
                  <button onclick="adicionarCarrinho()" class="btn-primário flex-h alinhar-centro espaço-0-25" data-id=${
                    produto.id
                  }
                     id="adicionar-carrinho-btn">
                     <i class="ri-shopping-cart-2-fill"></i>
                     <p class="categoria-pequeno">Adicionar ao Carrinho</p>
                  </button>
                  <button>
                     <i id="adicionar-favoritos-btn" data-id=${
                       produto.id
                     } class="ri-heart-line texto-lg alerta" onclick="adicionarFavoritos()"></i>
                  </button>
               </div>
            </div>
         </div>
      </div>
    </section>
    
    <!-- OPINIÕES -->
    <button class="flex-v alinhar-centro borda-primária w-total mb-4 mx-auto">
      <p class="categoria-médio mb-0-5">Opiniões</p>
    </button>
    <section id="seccao-opinioes">
      <div class="flex-h justificar-centro espaço-8 ml-4 flex-ajustar">
         <!-- CLASSIFICAÇÃO GERAL -->
         <div class="flex-v espaço-0-5">
            <h1>${produto.classificacaoValor}</h1>
            <div class="rating">${produto.classificacaoEstrelas}</div>
            <div class="flex-h alinhar-centro">
               <i class="ri-user-fill cinzento-60"></i>
               <p>${produto.opinioes} opiniões</p>
            </div>
            <a href="#" class="btn-secundário categoria-pequeno">Adicionar opinião</a>
         </div>
         <!-- COMENTÁRIOS -->
         <div class="flex-v espaço-2 w-50p">
            <!-- COMENTÁRIO -->
            <div class="flex-h alinhar-inicio espaço-1">
               <div class="flex-v espaço-0-25">
                  <p class="categoria-pequeno">${
                    produto.comentario1Utilizador
                  }</p>
                  <div class="rating">${produto.comentario1Estrelas}</div>
                  <p>${produto.comentario1Descricao}</p>
               </div>
            </div>
            <!-- COMENTÁRIO -->
            <div class="flex-h alinhar-inicio espaço-1">
               <div class="flex-v espaço-0-25">
                  <p class="categoria-pequeno">${
                    produto.comentario2Utilizador
                  }</p>
                  <div class="rating">${produto.comentario2Estrelas}</div>
                  <p>${produto.comentario2Descricao}</p>
               </div>
            </div>
            <!-- COMENTÁRIO -->
            <div class="flex-h alinhar-inicio espaço-1">
               <div class="flex-v espaço-0-25">
                  <p class="categoria-pequeno">${
                    produto.comentario3Utilizador
                  }</p>
                  <div class="rating">${produto.comentario3Estrelas}</div>
                  <p>${produto.comentario3Descricao}</p>
               </div>
            </div>
         </div>
      </div>
    </section>`

    if (apresentacaoProduto != null) {
      apresentacaoProduto.innerHTML = resultado
    }
  }

  adicionarProduto() {
    const adicionarCarrinhoBtn = document.getElementById(
      'adicionar-carrinho-btn'
    )
    let id = adicionarCarrinhoBtn.dataset.id
    adicionarCarrinhoBtn.addEventListener('click', (e) => {
      e.target.innerHTML = 'Produto Adicionado'
      e.target.disabled = true
      let produtoCarrinho = { ...Storage.apresentarProduto(id), quantidade: 1 }
      carrinho = [...carrinho, produtoCarrinho]
      Storage.guardarCarrinho(carrinho)
    })
  }

  adicionarFavoritos() {
    const adicionarFavoritosBtn = document.getElementById(
      'adicionar-favoritos-btn'
    )
    let id = adicionarFavoritosBtn.dataset.id
    adicionarFavoritosBtn.addEventListener('click', () => {
      adicionarFavoritosBtn.classList.remove('ri-heart-line')
      adicionarFavoritosBtn.classList.add('ri-heart-fill')
      let produtoFavoritos = { ...Storage.apresentarProduto(id), quantidade: 1 }
      favoritos = [...favoritos, produtoFavoritos]
      Storage.guardarFavoritos(favoritos)
    })
  }

  mostrarOpinioes(opinioes) {
    let resultado = ''
    opinioes.forEach((opiniao) => {
      resultado += `
      <!-- CARTAO SINGULAR -->
         <div class="flex-v justificar-redor borda-cartao p-1 espaço-1 max-w-28">
            <div class="flex-h justificar-entre">
               <div class="rating">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
               </div>
               <div class="flex-h alinhar-centro">
                  <i class="ri-time-line"></i>
                  <p class="subtexto">${opiniao.tempo}</p>
               </div>
            </div>
            <div>
               <p class="categoria-pequeno">${opiniao.titulo}</p>
               <p class="subtexto">${opiniao.comentario}</p>
            </div>
            <div class="flex-h alinhar-centro espaço-0-25 mt-2">
               <img src="${opiniao.imagem}" class="w-1">
               <p class="subtexto">${opiniao.utilizador}</p>
            </div>
         </div>
      `
      if (opinioesWebsite != null) {
        opinioesWebsite.innerHTML = resultado
      }
    })
  }
}

// LOCAL STORAGE
class Storage {
  static guardarProdutos(produtos) {
    localStorage.setItem('produtos', JSON.stringify(produtos))
  }

  static apresentarProduto(id) {
    let produtos = JSON.parse(localStorage.getItem('produtos'))
    return produtos.find((produto) => produto.id == id)
  }

  static apresentarProduto2(categoria) {
    let produtos = JSON.parse(localStorage.getItem('produtos'))
    return produtos.find((produto) => produto.categoria == categoria)
  }

  static guardarCarrinho(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
  }

  static guardarFavoritos(favoritos) {
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI()
  const produtos = new Produtos()
  const opinioes = new Opinioes()

  // PRODUTOS
  produtos
    .buscarProdutos()
    .then((produtos) => {
      Storage.guardarProdutos(produtos)
      Storage.apresentarProduto(lerId())
      ui.mostrarDestaques(produtos)
      ui.mostrarNovidades(produtos)
      ui.mostrarProduto(Storage.apresentarProduto(lerId()))
      ui.adicionarProduto()
      ui.adicionarFavoritos()
    })
    .catch((error) => {
      console.log(error)
    })
  // OPINIÕES
  opinioes.buscarOpinioes().then((opinioes) => ui.mostrarOpinioes(opinioes))

  definirUtilizador()
})

//////////////// NAVEGAÇÃO LATERAL ////////////////

// ABRIR E FECHAR BARRA DE NAVEGAÇÃO LATERAL
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

// GERAR URL BASEADO NA CATEGORIA ESCOLHIDA
function categoriaEscolhida() {
  if (window.location.search == '?categoria=Perifericos') {
    let categoriaNome = document.getElementById('categoria-nome')
    categoriaNome.innerHTML = window.location.search.substring(11)
    let resultado = ''
    const produtosEncontrados = document.getElementById('produtos-encontrados')
    let produtos = JSON.parse(localStorage.getItem('produtos'))
    produtos.forEach((produto) => {
      if (produto.categoria == 'Periféricos') {
        resultado += `<!-- PRODUTO -->
                 <div class="flex-v">
                    <img src="${produto.imagem1}">
                    <div class="flex-v">
                       <p class="categoria-pequeno">${produto.categoria}</p>
                       <p>${produto.nome}</p>
                    </div>
                    <div class="flex-h alinhar-centro sucesso">
                       <i class="ri-check-line"></i>
                       <p class="subtexto">Entrega entre 3 a 5 dias úteis</p>
                    </div>
                    <div class="flex-h alinhar-centro justificar-entre">
                       <h3>${produto.preco}€</h3>
                       <p class="cruzado">${(produto.preco * 1.5).toFixed(
                         2
                       )}€</p>
                    </div>
                    <div class="flex-h alinhar-centro">
                       <i class="ri-heart-line alerta"></i>
                       <p class="subtexto">Favoritos</p>
                    </div>
                 </div>`

        if (produtosEncontrados != null) {
          produtosEncontrados.innerHTML = resultado
        }
      }
    })
  }

  if (window.location.search == '?categoria=Mobilidade') {
    let categoriaNome = document.getElementById('categoria-nome')
    categoriaNome.innerHTML = window.location.search.substring(11)
    let resultado = ''
    const produtosEncontrados = document.getElementById('produtos-encontrados')
    let produtos = JSON.parse(localStorage.getItem('produtos'))
    produtos.forEach((produto) => {
      if (produto.categoria == 'Mobilidade') {
        resultado += `<!-- PRODUTO -->
                 <div class="flex-v">
                    <img src="${produto.imagem1}">
                    <div class="flex-v">
                       <p class="categoria-pequeno">${produto.categoria}</p>
                       <p>${produto.nome}</p>
                    </div>
                    <div class="flex-h alinhar-centro sucesso">
                       <i class="ri-check-line"></i>
                       <p class="subtexto">Entrega entre 3 a 5 dias úteis</p>
                    </div>
                    <div class="flex-h alinhar-centro justificar-entre">
                       <h3>${produto.preco}€</h3>
                       <p class="cruzado">${(produto.preco * 1.5).toFixed(
                         2
                       )}€</p>
                    </div>
                    <div class="flex-h alinhar-centro">
                       <i class="ri-heart-line alerta"></i>
                       <p class="subtexto">Favoritos</p>
                    </div>
                 </div>`

        if (produtosEncontrados != null) {
          produtosEncontrados.innerHTML = resultado
        }
      }
    })
  }
  if (window.location.search == '?categoria=Computadores') {
    let categoriaNome = document.getElementById('categoria-nome')
    categoriaNome.innerHTML = window.location.search.substring(11)
    let resultado = ''
    const produtosEncontrados = document.getElementById('produtos-encontrados')
    let produtos = JSON.parse(localStorage.getItem('produtos'))
    produtos.forEach((produto) => {
      if (produto.categoria == 'Computadores') {
        resultado += `<!-- PRODUTO -->
                 <div class="flex-v">
                    <img src="${produto.imagem1}">
                    <div class="flex-v">
                       <p class="categoria-pequeno">${produto.categoria}</p>
                       <p>${produto.nome}</p>
                    </div>
                    <div class="flex-h alinhar-centro sucesso">
                       <i class="ri-check-line"></i>
                       <p class="subtexto">Entrega entre 3 a 5 dias úteis</p>
                    </div>
                    <div class="flex-h alinhar-centro justificar-entre">
                       <h3>${produto.preco}€</h3>
                       <p class="cruzado">${(produto.preco * 1.5).toFixed(
                         2
                       )}€</p>
                    </div>
                    <div class="flex-h alinhar-centro">
                       <i class="ri-heart-line alerta"></i>
                       <p class="subtexto">Favoritos</p>
                    </div>
                 </div>`

        if (produtosEncontrados != null) {
          produtosEncontrados.innerHTML = resultado
        }
      }
    })
  }
  if (window.location.search == '?categoria=Componentes') {
    let categoriaNome = document.getElementById('categoria-nome')
    categoriaNome.innerHTML = window.location.search.substring(11)
    let resultado = ''
    const produtosEncontrados = document.getElementById('produtos-encontrados')
    let produtos = JSON.parse(localStorage.getItem('produtos'))
    produtos.forEach((produto) => {
      if (produto.categoria == 'Componentes') {
        resultado += `<!-- PRODUTO -->
                 <div class="flex-v">
                    <img src="${produto.imagem1}">
                    <div class="flex-v">
                       <p class="categoria-pequeno">${produto.categoria}</p>
                       <p>${produto.nome}</p>
                    </div>
                    <div class="flex-h alinhar-centro sucesso">
                       <i class="ri-check-line"></i>
                       <p class="subtexto">Entrega entre 3 a 5 dias úteis</p>
                    </div>
                    <div class="flex-h alinhar-centro justificar-entre">
                       <h3>${produto.preco}€</h3>
                       <p class="cruzado">${(produto.preco * 1.5).toFixed(
                         2
                       )}€</p>
                    </div>
                    <div class="flex-h alinhar-centro">
                       <i class="ri-heart-line alerta"></i>
                       <p class="subtexto">Favoritos</p>
                    </div>
                 </div>`

        if (produtosEncontrados != null) {
          produtosEncontrados.innerHTML = resultado
        }
      }
    })
  }
  if (window.location.search == '?categoria=Imagem-e-Som') {
    let categoriaNome = document.getElementById('categoria-nome')
    categoriaNome.innerHTML =
      window.location.search.substring(11, 17) +
      ' ' +
      window.location.search.substring(18, 19) +
      ' ' +
      window.location.search.substring(20, 23)
    let resultado = ''
    const produtosEncontrados = document.getElementById('produtos-encontrados')
    let produtos = JSON.parse(localStorage.getItem('produtos'))
    produtos.forEach((produto) => {
      if (produto.categoria == 'Imagem e Som') {
        resultado += `<!-- PRODUTO -->
                 <div class="flex-v">
                    <img src="${produto.imagem1}">
                    <div class="flex-v">
                       <p class="categoria-pequeno">${produto.categoria}</p>
                       <p>${produto.nome}</p>
                    </div>
                    <div class="flex-h alinhar-centro sucesso">
                       <i class="ri-check-line"></i>
                       <p class="subtexto">Entrega entre 3 a 5 dias úteis</p>
                    </div>
                    <div class="flex-h alinhar-centro justificar-entre">
                       <h3>${produto.preco}€</h3>
                       <p class="cruzado">${(produto.preco * 1.5).toFixed(
                         2
                       )}€</p>
                    </div>
                    <div class="flex-h alinhar-centro">
                       <i class="ri-heart-line alerta"></i>
                       <p class="subtexto">Favoritos</p>
                    </div>
                 </div>`

        if (produtosEncontrados != null) {
          produtosEncontrados.innerHTML = resultado
        }
      }
    })
  }
  if (window.location.search == '?categoria=Armazenamento') {
    let categoriaNome = document.getElementById('categoria-nome')
    categoriaNome.innerHTML = window.location.search.substring(11)
    let resultado = ''
    const produtosEncontrados = document.getElementById('produtos-encontrados')
    let produtos = JSON.parse(localStorage.getItem('produtos'))
    produtos.forEach((produto) => {
      if (produto.categoria == 'Armazenamento') {
        resultado += `<!-- PRODUTO -->
                 <div class="flex-v">
                    <img src="${produto.imagem1}">
                    <div class="flex-v">
                       <p class="categoria-pequeno">${produto.categoria}</p>
                       <p>${produto.nome}</p>
                    </div>
                    <div class="flex-h alinhar-centro sucesso">
                       <i class="ri-check-line"></i>
                       <p class="subtexto">Entrega entre 3 a 5 dias úteis</p>
                    </div>
                    <div class="flex-h alinhar-centro justificar-entre">
                       <h3>${produto.preco}€</h3>
                       <p class="cruzado">${(produto.preco * 1.5).toFixed(
                         2
                       )}€</p>
                    </div>
                    <div class="flex-h alinhar-centro">
                       <i class="ri-heart-line alerta"></i>
                       <p class="subtexto">Favoritos</p>
                    </div>
                 </div>`

        if (produtosEncontrados != null) {
          produtosEncontrados.innerHTML = resultado
        }
      }
    })
  }
  if (window.location.search == '?categoria=Casa-e-Ar-Livre') {
    let categoriaNome = document.getElementById('categoria-nome')
    categoriaNome.innerHTML =
      window.location.search.substring(11, 15) +
      ' ' +
      window.location.search.substring(16, 17) +
      ' ' +
      window.location.search.substring(18, 20) +
      ' ' +
      window.location.search.substring(21, 26)
    let resultado = ''
    const produtosEncontrados = document.getElementById('produtos-encontrados')
    let produtos = JSON.parse(localStorage.getItem('produtos'))
    produtos.forEach((produto) => {
      if (produto.categoria == 'Casa e Ar Livre') {
        resultado += `<!-- PRODUTO -->
                 <div class="flex-v">
                    <img src="${produto.imagem1}">
                    <div class="flex-v">
                       <p class="categoria-pequeno">${produto.categoria}</p>
                       <p>${produto.nome}</p>
                    </div>
                    <div class="flex-h alinhar-centro sucesso">
                       <i class="ri-check-line"></i>
                       <p class="subtexto">Entrega entre 3 a 5 dias úteis</p>
                    </div>
                    <div class="flex-h alinhar-centro justificar-entre">
                       <h3>${produto.preco}€</h3>
                       <p class="cruzado">${(produto.preco * 1.5).toFixed(
                         2
                       )}€</p>
                    </div>
                    <div class="flex-h alinhar-centro">
                       <i class="ri-heart-line alerta"></i>
                       <p class="subtexto">Favoritos</p>
                    </div>
                 </div>`

        if (produtosEncontrados != null) {
          produtosEncontrados.innerHTML = resultado
        }
      }
    })
  }
}

//////////////// FORMULÁRIOS ////////////////
const loginForm = document.getElementById('login-form')
const registoForm = document.getElementById('registo-form')
const detalheEnvio = document.getElementById('detalhe-envio')
const email = document.getElementById('email')
const palavraPasse = document.getElementById('palavra-passe')
const nome = document.getElementById('nome')
const apelido = document.getElementById('apelido')
const confirmarPalavraPasse = document.getElementById('confirmar-palavra-passe')
const morada = document.getElementById('morada')
const codPostal = document.getElementById('codigo-postal')
const pais = document.getElementById('pais')
const cidade = document.getElementById('cidade')
const telemovel = document.getElementById('telemovel')
const nif = document.getElementById('nif')
const nomeCartao = document.getElementById('nome-cartao')
const numeroCartao = document.getElementById('numero-cartao')
const dataCartao = document.getElementById('valido-ate')
const cvvCartao = document.getElementById('codigo-cvv')
const dataHoje = new Date().toLocaleDateString('en-CA')

// FORMULÁRIO LOGIN
if (loginForm != null) {
  loginForm.addEventListener('submit', (e) => {
    if (email.value != localStorage.getItem('utilizadorEmail')) {
      definirErro(
        email,
        'Algo nao correu bem. O username ou palavra-passe nao estao correctos.'
      )
      e.preventDefault()
    } else {
      definirSucesso(email, 'Email aceite')
    }

    if (palavraPasse.value != localStorage.getItem('utilizadorPalavraPasse')) {
      definirErro(palavraPasse, 'A palavra-passe não está correcta.')
      e.preventDefault()
    } else {
      definirSucesso(palavraPasse, 'Palavra-passe aceite.')
    }
  })
}

// FORMULÁRIO REGISTO
if (registoForm != null) {
  registoForm.addEventListener('submit', (e) => {
    //validar nome
    if (nome.value === '') {
      definirErro(nome, 'O nome é obrigatório.')
      e.preventDefault()
    } else {
      definirSucesso(nome, 'O nome é válido.')
      localStorage.setItem('utilizadorNome', nome.value)
    }

    //validar apelido
    if (apelido.value === '') {
      definirErro(apelido, 'O apelido é obrigatório.')
      e.preventDefault()
    } else {
      definirSucesso(apelido, 'O apelido é válido.')
      localStorage.setItem('utilizadorApelido', apelido.value)
    }

    //validar email
    if (email.value === '') {
      definirErro(email, 'O email é obrigatório.')
      e.preventDefault()
    } else if (!emailValido(email.value)) {
      definirErro(email, 'O email não é válido.')
      e.preventDefault()
    } else {
      definirSucesso(email, 'O email é válido.')
      localStorage.setItem('utilizadorEmail', email.value)
    }

    //Validar tamanho da palavra passe
    if (palavraPasse.value === '') {
      definirErro(palavraPasse, 'A palavra-passe é obrigatória.')
      e.preventDefault()
    } else if (!passwordValida(palavraPasse.value)) {
      definirErro(
        palavraPasse,
        'A palavra-passe tem que ter pelo menos 8 caracteres, 1 letra minuscula, 1 maiuscula, 1 caractere especial e 1 número.'
      )
      e.preventDefault()
    } else {
      definirSucesso(palavraPasse, 'A palavra-passe é válida')
      localStorage.setItem('utilizadorPalavraPasse', palavraPasse.value)
    }

    //revalidar palavra-passe
    if (confirmarPalavraPasse.value === '') {
      definirErro(confirmarPalavraPasse, 'Confirme a palavra-passe')
      e.preventDefault()
    } else if (confirmarPalavraPasse.value != palavraPasse.value) {
      definirErro(confirmarPalavraPasse, 'A palavra passe não corresponde.')
      e.preventDefault()
    } else {
      definirSucesso(confirmarPalavraPasse)
    }
  })
}

// FORMULÁRIO DETALHE ENVIO
function carregarDados() {
  nome.value = localStorage.getItem('utilizadorNome', nome.value)
  apelido.value = localStorage.getItem('utilizadorApelido', apelido.value)
  email.value = localStorage.getItem('utilizadorEmail', email.value)
}

function carregarPedido() {
  let resultado = ''
  const items = JSON.parse(localStorage.getItem('carrinho'))
  items.forEach((item) => {
    resultado += `<header>
               <p class="categoria-pequeno cinzento-60">O seu pedido</p>
               <div class="divisória-horizontal mb-2"></div>
            </header>
            <!-- PEDIDOS -->
            <div class="flex-h alinhar-centro">
               <div class="w-16"><img src="${item.imagem1}"
                     alt="auriculares"></div>
               <div>
                  <p class="subtítulo">${item.nome}</p>
                  <div class="flex-h">
                     <i class="ri-check-line sucesso"></i>
                     <p class="subtexto sucesso">Entrega entre 3 a 5 dias úteis</p>
                  </div>
               </div>
            </div>`

    if (pedidoCompras != null) {
      pedidoCompras.innerHTML = resultado
    }

    let pedidoTotal = document.getElementById('pedido-total')
    let pedidoSubtotal = document.getElementById('pedido-subtotal')
    pedidoTotal.innerHTML = localStorage.getItem('carrinhoTotal')
    pedidoSubtotal.innerHTML = localStorage.getItem('carrinhoTotal')
  })
}

if (detalheEnvio != null) {
  detalheEnvio.addEventListener('submit', (e) => {
    //validar morada
    if (morada.value === '') {
      definirErro(morada, 'Intruduza a morada para envio.')
      e.preventDefault()
    } else {
      definirSucesso(morada, 'A morada é válida.')
      localStorage.setItem('utilizadorMorada', morada.value)
    }

    //validar codigo postal
    if (codPostal.value === '') {
      definirErro(codPostal, 'Intruduza um codigo válido.')
      e.preventDefault()
    } else if (!codPostalValido(codPostal.value)) {
      definirErro(codPostal, 'Introduza um codigo valido.')
      e.preventDefault()
    } else {
      definirSucesso(codPostal, 'O codigo postal é válido.')
      localStorage.setItem('utilizadorCodPostal', codPostal.value)
    }

    //validar país

    if (pais.value === '') {
      definirErro(pais, 'Intruduza o País para envio.')
      e.preventDefault()
    } else {
      definirSucesso(pais, 'O país é válido.')
      localStorage.setItem('utilizadorPais', pais.value)
    }

    //validar cidade
    if (cidade.value === '') {
      definirErro(cidade, 'Intruduza a cidade para envio.')
      e.preventDefault()
    } else {
      definirSucesso(cidade, 'A cidade é válida.')
      localStorage.setItem('utilizadorCidade', cidade.value)
    }

    //validar NIF
    if (nif.value == '') {
      definirErro(nif, 'Intruduza um NIF válido.')
      e.preventDefault()
    } else if (!nifValido(nif.value)) {
      definirErro(nif, 'Intruduza um NIF válido.')
      e.preventDefault()
    } else {
      definirSucesso(nif, 'O NIF é válido.')
      localStorage.setItem('utilizadorNIF', nif.value)
    }

    //validar dados cartao de credito
    //validar nome
    if (nomeCartao.value === '') {
      definirErro(nomeCartao, 'O nome é obrigatório.')
      e.preventDefault()
    } else {
      definirSucesso(nomeCartao, 'O nome é válido.')
      localStorage.setItem('utilizadorNomeCartao', nomeCartao.value)
    }

    //validar numero
    if (numeroCartao.value == '') {
      definirErro(numeroCartao, 'Intruduza um numero válido.')
      e.preventDefault()
    } else if (!creditoValido(numeroCartao.value)) {
      definirErro(numeroCartao, 'Intruduza um numero válido.')
      e.preventDefault()
    } else {
      definirSucesso(numeroCartao, 'O numero do cartao é válido.')
      localStorage.setItem('utilizadorNumeroCartao', numeroCartao.value)
    }

    // codigo CVV
    if (cvvCartao.value == '') {
      definirErro(cvvCartao, 'Intruduza um numero válido.')
      e.preventDefault()
    } else if (!cvvValido(cvvCartao.value)) {
      definirErro(cvvCartao, 'Intruduza um numero válido.')
      e.preventDefault()
    } else {
      definirSucesso(cvvCartao, 'O numero do cartao é válido.')
      localStorage.setItem('utilizadorNumeroCartao', cvvCartao.value)
    }

    //validar data
    if (dataCartao.value == '') {
      definirErro(dataCartao, 'A data não é válida.')
      e.preventDefault()
    } else if (!validarData(dataCartao.value)) {
      definirErro(dataCartao, 'A data não é válida.')
      e.preventDefault()
    } else if (dataHoje > dataCartao.value) {
      definirErro(dataCartao, 'A data não é válida.')
      e.preventDefault()
    } else {
      definirSucesso(dataCartao, 'Data validada.')
      localStorage.setItem('utilizadorDataCartao', dataCartao.value)
    }
  })
}

// CONFIRMAÇÃO DE ENVIO
function confirmaEntrega() {
  const entregaNome = document.getElementById('nome-Confirma')
  const moradaConfirma = document.getElementById('morada-Confirma')
  const codpostalConfirma = document.getElementById('codpostal-Confirma')
  const emailConfirma = document.getElementById('email-Confirma')

  entregaNome.innerHTML =
    localStorage.getItem('utilizadorNome') +
    ' ' +
    localStorage.getItem('utilizadorApelido')
  moradaConfirma.innerHTML = localStorage.getItem('utilizadorMorada')
  codpostalConfirma.innerHTML =
    localStorage.getItem('utilizadorCodPostal') +
    ' ' +
    localStorage.getItem('utilizadorCidade') +
    ' ' +
    localStorage.getItem('utilizadorPais')
  emailConfirma.innerHTML = localStorage.getItem('utilizadorEmail')
}

function rastoEntrega() {
  const nomeRasto = document.getElementById('nome-Rasto')
  const moradaRasto = document.getElementById('morada-Rasto')
  const codPostalRasto = document.getElementById('codPostal-Rasto')

  nomeRasto.innerHTML =
    localStorage.getItem('utilizadorNome') +
    ' ' +
    localStorage.getItem('utilizadorApelido')
  moradaRasto.innerHTML = localStorage.getItem('utilizadorMorada')
  codPostalRasto.innerHTML =
    localStorage.getItem('utilizadorCodPostal') +
    ' ' +
    localStorage.getItem('utilizadorCidade') +
    ' ' +
    localStorage.getItem('utilizadorPais')
}

function definirUtilizador() {
  const utilizadorNome = document.getElementById('utilizador-nome')
  if (utilizadorNome != null) {
    utilizadorNome.innerHTML = localStorage.getItem('utilizadorNome')
  }
}

function verificarUtilizador() {
  if (localStorage.getItem('utilizadorNome') != null) {
    window.location.href = 'http://127.0.0.1:5500/perfil.html'
  } else {
    window.location.href = 'http://127.0.0.1:5500/login.html'
  }
}

// CLASSES DE ERRO E SUCESSO
function definirErro(input, mensagem) {
  const dados = input.parentElement
  const small = dados.querySelector('small')
  small.innerText = mensagem
  small.classList.add('alerta')
  input.className = 'dados-erro'
}

function definirSucesso(input, mensagem) {
  const dados = input.parentElement
  const small = dados.querySelector('small')
  small.innerText = mensagem
  small.classList.add('sucesso')
  input.className = 'dados-sucesso'
}

// VALIDAÇÕES REGEX
function emailValido(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

function passwordValida(palavraPasse) {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
    palavraPasse
  )
}

function codPostalValido(codPostal) {
  return /^\d{4}-\d{3}?$/.test(codPostal)
}

function nifValido(nif) {
  return /^[0-9]\d{8}$/.test(nif)
}

function creditoValido(numeroCartao) {
  return /^[0-9]\d{15}$/.test(numeroCartao)
}

function cvvValido(cvvCartao) {
  return /^[0-9]\d{2}$/.test(cvvCartao)
}

function validarData(dataCartao) {
  return /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
    dataCartao
  )
}

// ADICIONAR AO CARRINHO
function adicionarCarrinho() {
  const modalCarrinho = document.getElementById('modal-carrinho')
  modalCarrinho.classList.remove('hidden')
}

function fecharModalCarrinho() {
  const modalCarrinho = document.getElementById('modal-carrinho')
  modalCarrinho.classList.add('hidden')
}

//////////////// PÁGINA DE PERFIL ////////////////

// ALTERNAR SECÇÕES PERFIL
const dadosPessoaisSeccao = document.getElementById('dados-pessoais-seccao')
const listaFavoritosHeader = document.getElementById('lista-favoritos-header')
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
    listaFavoritosHeader.classList.add('hidden')
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
    listaFavoritosHeader.classList.remove('hidden')
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
    listaFavoritosHeader.classList.add('hidden')
    listaFavoritosSeccao.classList.add('hidden')
    pedidosFaturasSeccao.classList.remove('hidden')
  })
}

// PERFIL DO CLIENTE
let perfilNome = document.getElementById('perfil-nome')
let perfilFoto = document.getElementById('perfil-foto')
let dadosPessoaisNome = document.getElementById('dados-pessoais-nome')
let dadosPessoaisEmail = document.getElementById('dados-pessoais-email')
let dadosPessoaisMorada = document.getElementById('dados-pessoais-morada')
let dadosPessoaisCodPostal = document.getElementById(
  'dados-pessoais-cod-postal'
)

function carregarPerfil() {
  perfilNome.innerHTML =
    localStorage.getItem('utilizadorNome') +
    ' ' +
    localStorage.getItem('utilizadorApelido')
  perfilFoto.innerHTML = localStorage.getItem('utilizadorFoto')
  dadosPessoaisNome.innerHTML =
    localStorage.getItem('utilizadorNome') +
    ' ' +
    localStorage.getItem('utilizadorApelido')
  dadosPessoaisEmail.innerHTML = localStorage.getItem('utilizadorEmail')
  dadosPessoaisMorada.innerHTML = localStorage.getItem('utilizadorMorada')
  dadosPessoaisCodPostal.innerHTML =
    localStorage.getItem('utilizadorCodPostal') +
    ' ' +
    localStorage.getItem('utilizadorCidade')
}

// UPLOAD FOTO DE UTILIZADOR
const utilizadorContentor = document.getElementById('utilizador-contentor')
const utilizadorFoto = document.getElementById('perfil-foto')
const uploadInput = document.getElementById('upload-input')
const uploadBtn = document.getElementById('upload-btn')

if (uploadInput) {
  uploadInput.addEventListener('change', () => {
    const upload = uploadInput.files[0]
    const tipoUpload = /image.*/

    if (upload.type.match(tipoUpload)) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        utilizadorFoto.setAttribute('src', reader.result)
        localStorage.setItem('utilizadorFoto', utilizadorFoto)
      })

      reader.readAsDataURL(upload)
    }
  })
}

// PEDIDOS E FATURAS - CONSULTAR
const consultaPedidoFactura = document.getElementById('ver-pedido')
function mostrarPedido() {
  let resultado = ''
  const items = JSON.parse(localStorage.getItem('carrinho'))
  items.forEach((item) => {
    resultado += `
      <!-- PEDIDO -->
      <div class="flex-h alinhar-centro justificar-entre" id="fatura">
        <div class="flex-h alinhar-centro">
            <div class="w-12">
              <img src="${item.imagem1}">
            </div>
            <div class="flex-h justificar-entre">
              <div class="flex-v">
                  <p class="negrito">${item.nome}</p>
                  <div class="flex-h alinhar-centro espaço-0.25">
                    <i class="ri-check-line sucesso"></i>
                    <p class="subtexto sucesso">Entrega entre 3 a 5 dias úteis</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="flex-h espaço-1">
            <a href="#"><button class="btn-primário mt-1 categoria-pequeno">Avaliar</button></a>
            <a href="#"><button class="btn-contorno mt-1 categoria-pequeno">Devolver</button></a>
        </div>
      </div>`

    if (consultaPedidoFactura != null) {
      consultaPedidoFactura.innerHTML = resultado
    }
  })
}

// PEDIDOS E FATURAS - DATA DE COMPRA
let dataCompra = document.getElementById('data-compra')
let numeroArtigo = document.getElementById('numero-artigos')

function mostrarDataPedido() {
  dataCompra.innerHTML = dataHoje
  numeroArtigo.innerHTML = localStorage.getItem('produtoQuantidade')
}

// function obterFatura() {
//   var pdf = new jsPDF()
//   window.html2canvas = html2canvas
//   const doc = document.getElementById('fatura')
//   if (doc) {
//     pdf.html(doc).then(() => pdf.save('fatura.pdf'))
//   }
// }

//DOWNLOAD FATURA

function obterFatura() {
  var carrinhoItems = localStorage.getItem('carrinho')
  var prod
  carrinhoItems = JSON.parse(carrinhoItems)
  Object.values(carrinhoItems).map((item) => {
    prod += item.nome + ' ' + item.preco
  })
  prod = prod.replace('undefined', ' ')
  console.log(prod)

  var textToWrite =
    'Vício Tecnológico' +
    '\n' +
    'Fatura/Recibo' +
    '\n' +
    '\n' +
    '---------------------------------------' +
    '\n' +
    'Nome: ' +
    localStorage.getItem('utilizadorNome') +
    ' ' +
    localStorage.getItem('utilizadorApelido') +
    '\n' +
    '\n' +
    'Morada: ' +
    localStorage.getItem('utilizadorMorada') +
    ',' +
    ' ' +
    localStorage.getItem('utilizadorCodPostal') +
    ' ' +
    localStorage.getItem('utilizadorCidade') +
    '\n' +
    '\n' +
    'NIF: ' +
    localStorage.getItem('utilizadorNIF') +
    '\n' +
    '\n' +
    '---------------------------------------' +
    '\n' +
    'Produtos Comprados:' +
    '\n' +
    prod +
    '*' +
    localStorage.getItem('produtoQuantidade') +
    '\n' +
    '\n' +
    '-----------------------------------------' +
    '\n' +
    'Preço: ' +
    localStorage.getItem('carrinhoTotal') +
    ' euros'

  var textFileAsBlob = new Blob([textToWrite], {
    type: 'text/plain',
  })

  var fileNameToSaveAs = 'fatura'
  var downloadLink = document.createElement('a')
  downloadLink.download = fileNameToSaveAs

  if (window.URL != null) {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob)
  }
  downloadLink.click()
}
