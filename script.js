// PRODUTOS PÁGINA INICIAL
const novidadesProduto = document.getElementById('novidades-produto')
const destaquesProduto = document.getElementById('destaques-produto')

// DETALHE DE PRODUTO
const apresentacaoProduto = document.getElementById('apresentacao-produto')

function lerId() {
  let url = new URL(window.location)
  let id = url.searchParams.get('id')
  return id
}

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
               <div class="flex-v espaço-1">
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
                        <p class="subtexto">${produto.stock} restantes em stock</p>
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
                  <h3 class="cruzado cinzento-60 regular">${produto.preco}€</h3>
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
               <div class="contador-quantidade">
                  <i class="ri-subtract-line"></i>
                  <input type="text" name="quantidade" id="quantidade" value="1">
                  <i class="ri-add-line"></i>
               </div>
               <div class="flex-h alinhar-centro espaço-2">
                  <button onclick="adicionarCarrinho()" class="btn-primário flex-h alinhar-centro espaço-0-25"
                     id="adicionar-carrinho">
                     <i class="ri-shopping-cart-2-fill"></i>
                     <p class="categoria-pequeno">Adicionar ao Carrinho</p>
                  </button>
                  <button>
                     <i class="ri-heart-line texto-lg alerta"></i>
                  </button>
               </div>
            </div>
         </div>
      </div>
    </section>`

    if (apresentacaoProduto != null) {
      apresentacaoProduto.innerHTML = resultado
    }
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

  static apresentarProduto(id) {
    let json = localStorage.getItem('produtos')
    let produtos = JSON.parse(json)
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].id == id) return produtos[i]
    }
    return null
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
    })
    .catch((error) => {
      console.log(error)
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
const validadeCartao = document.getElementById('valido-ate')
const cvvCartao = document.getElementById('codigo-cvv')
const dataHoje = new Date()

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
//FORMULÁRIO DETALHE ENVIO

function carregarPerfil() {
  nome.value = localStorage.getItem('utilizadorNome', nome.value)
  apelido.value = localStorage.getItem('utilizadorApelido', apelido.value)
  email.value = localStorage.getItem('utilizadorEmail', email.value)
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
      definirSucesso(pais, 'A cidade é válida.')
      localStorage.setItem('utilizadoCidade', cidade.value)
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
      definirErro(nuneroCartao, 'Intruduza um numero válido.')
      e.preventDefault()
    } else {
      definirSucesso(numeroCartao, 'O numero do cartao é válido.')
      localStorage.setItem('utilizadorNumeroCartao', numeroCartao.value)
    }

    //validar data
    //if (dataCartao.value =< dataHoje) {
    //definirErro(dataCartao, 'Intruduza um numero válido.')
    //e.preventDefault()

    // } else {
    // definirSucesso(dataCartao, 'O numero do cartao é válido.')
    // localStorage.setItem('utilizadorNumeroCartao', dataCartao.value)
    // }

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
    window.location.href =
      'https://goncalodiasmm.github.io/vicio-tecnologico/perfil.html'
  } else {
    window.location.href =
      'https://goncalodiasmm.github.io/vicio-tecnologico/login.html'
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

// ADICIONAR AO CARRINHO
function adicionarCarrinho() {
  const modalCarrinho = document.getElementById('modal-carrinho')
  modalCarrinho.classList.remove('hidden')
}

function fecharModalCarrinho() {
  const modalCarrinho = document.getElementById('modal-carrinho')
  modalCarrinho.classList.add('hidden')
}
