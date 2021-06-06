// PRODUTOS PÁGINA INICIAL
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
      if (destaquesProduto != null) {
        destaquesProduto.innerHTML = resultado
      }
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
      if (novidadesProduto != null) {
        novidadesProduto.innerHTML = resultado
      }
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
    seccaoOpinioes.classList.add('hidden')
    seccaoDetalhes.classList.remove('hidden')
    detalhesBtn.classList.add('borda-primária')
    detalhesBtn.classList.remove('borda-cinzento')
    opinioesBtn.classList.add('borda-cinzento')
    opinioesBtn.classList.remove('borda-primária')
  })
}

if (opinioesBtn != null) {
  opinioesBtn.addEventListener('click', () => {
    seccaoDetalhes.classList.add('hidden')
    seccaoOpinioes.classList.remove('hidden')
    opinioesBtn.classList.add('borda-primária')
    opinioesBtn.classList.remove('borda-cinzento')
    detalhesBtn.classList.add('borda-cinzento')
    detalhesBtn.classList.remove('borda-primária')
  })
}

// FORMULÁRIO LOGIN
const loginForm = document.getElementById('login-form')
const email = document.getElementById('email')
const palavraPasse = document.getElementById('palavra-passe')

if (loginForm != null) {
  loginForm.addEventListener('submit', (e) => {
    if (email.value === '') {
      definirErro(email, 'O email é obrigatório.')
      e.preventDefault()
    } else if (!emailValido(email.value)) {
      definirErro(email, 'O email não é válido.')
      e.preventDefault()
    } else {
      definirSucesso(email, 'Email aceite')
    }

    if (palavraPasse.value === '') {
      definirErro(palavraPasse, 'A palavra-passe é obrigatória.')
      e.preventDefault()
    } else if (palavraPasse.value.length < 8) {
      definirErro(palavraPasse, 'A palavra-passe é demasiado curta.')
      e.preventDefault()
    } else {
      definirSucesso(palavraPasse, 'Palavra-passe aceite')
    }
  })
}

// CLASSES DE ERRO E SUCESSO
function definirErro(input, mensagem) {
  const dados = input.parentElement
  const small = dados.querySelector('small')
  small.innerText = mensagem
  input.className = 'dados-erro'
}

function definirSucesso(input, mensagem) {
  const dados = input.parentElement
  const small = dados.querySelector('small')
  small.innerText = mensagem
  input.className = 'dados-sucesso'
}

// VALIDAÇÕES REGEX
function emailValido(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

function passwordValida(password) {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
}

// ADICIONAR AO CARRINHO
function adicionarCarrinho() {
  const novoProduto = document.getElementById('novo-produto')
  const modalCarrinho = document.getElementById('modal-carrinho')
  novoProduto.classList.remove('hidden')
  modalCarrinho.classList.remove('hidden')
}

function fecharModalCarrinho() {
  const modalCarrinho = document.getElementById('modal-carrinho')
  modalCarrinho.classList.add('hidden')
}
