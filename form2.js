// FORMULÁRIO REGISTO
const registoForm = document.getElementById('registo-form')
const email = document.getElementById('email')

/*const palavraPasse = document.getElementById('palavra-passe')*/
const nome = document.getElementById('nome')
const apelido = document.getElementById('apelido')
const palavraPasse = document.getElementById('palavraPasse')
var length = document.getElementById('length')

if (registoForm != null) {
  registoForm.addEventListener('submit', (e) => {
    if (email.value === '') {
      definirErro(email, 'O email é obrigatório.')
      e.preventDefault()
    } else if (!isEmail(email.value)) {
      definirErro(email, 'O email não é válido.')
      e.preventDefault()
    } else {
      definirSucesso(email)
    }

    if (email.value === '') {
      definirErro(email, 'O email é obrigatório.')
      e.preventDefault()
    } else if (!isEmail(email.value)) {
      definirErro(email, 'O email não é válido.')
      e.preventDefault()
    } else {
      definirSucesso(email)
    }

    if (palavraPasse.value === '') {
      definirErro(palavraPasse, 'A palavra-passe é obrigatória.')
      e.preventDefault()
    } else if (palavraPasse.value.length < 8) {
      definirErro(palavraPasse, 'A palavra-passe é demasiado curta.')
      e.preventDefault()
    } else {
      definirSucesso(palavraPasse)
    }

    // validar letras minusculas
    if (!passwordValida(palavraPasse.value)) {
      definirErro(
        palavraPasse,
        'A palavra.passe tem que ter pelo menos 1letra minuscula, 1 maiuscula, 1 caractere especial e 1 número'
      )
      e.preventDefault()
    } else {
      definirSucesso(palavraPasse)
    }

    //validar letras maisculas
    if (palavraPasse.value.match(maiuscula)) {
      definirErro(
        palavraPasse,
        'A palavra.passe tem que ter pelo menos 1letra minuscula, 1 maiuscula, 1 caractere especial e 1 número'
      )
      e.preventDefault()
    } else {
      definirSucesso(palavraPasse)
    }

    //validar numeros
    if (palavraPasse.value.match(numero)) {
      definirErro(
        palavraPasse,
        'A palavra.passe tem que ter pelo menos 1letra minuscula, 1 maiuscula, 1 caractere especial e 1 número'
      )
      e.preventDefault()
    } else {
      definirSucesso(palavraPasse)
    }

    //validar caractere especial
    if (palavraPasse.value.match(especial)) {
      definirErro(
        palavraPasse,
        'A palavra.passe tem que ter pelo menos 1letra minuscula, 1 maiuscula, 1 caractere especial e 1 número'
      )
      e.preventDefault()
    } else {
      definirSucesso(palavraPasse)
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

function passwordValida(password) {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(password)
}
