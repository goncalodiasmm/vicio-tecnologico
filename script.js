// PRODUTOS PÁGINA INICIAL
const novidadesProduto = document.getElementById('novidades-produto')
const destaquesProduto = document.getElementById('destaques-produto')

// OPINIÕES PÁGINA INICIAL
const opinioesWebsite = document.getElementById('opinioes-website')

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
  mostrarOpinioes(opinioes) {
    let resultado = ''
    opinioes.forEach((opiniao) => {
      resultado += `
      <!-- CARTAO SINGULAR -->
         <div class="flex-v justificar-redor borda-cartao p-1 espaço-1">
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
}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI()
  const produtos = new Produtos()
  const opinioes = new Opinioes()

  // PRODUTOS
  produtos.buscarProdutos().then((produtos) => {
    ui.mostrarDestaques(produtos)
    ui.mostrarNovidades(produtos)
    Storage.guardarProdutos(produtos)
  })
  // OPINIÕES
  opinioes.buscarOpinioes().then((opinioes) => ui.mostrarOpinioes(opinioes))

  definirUtilizador()
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

// FORMULÁRIOS
const loginForm = document.getElementById('login-form')
const registoForm = document.getElementById('registo-form')
const email = document.getElementById('email')
const palavraPasse = document.getElementById('palavra-passe')
const nome = document.getElementById('nome')
const apelido = document.getElementById('apelido')
const confirmarPalavraPasse = document.getElementById('confirmar-palavra-passe')

// FORMULÁRIO LOGIN
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

// ADICIONAR AO CARRINHO
function adicionarCarrinho() {
  const modalCarrinho = document.getElementById('modal-carrinho')
  modalCarrinho.classList.remove('hidden')
}

function fecharModalCarrinho() {
  const modalCarrinho = document.getElementById('modal-carrinho')
  modalCarrinho.classList.add('hidden')
}
