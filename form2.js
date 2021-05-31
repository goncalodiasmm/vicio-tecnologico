// FORMULÁRIO REGISTO
const loginForm = document.getElementById('login-form')
const email = document.getElementById('email')
const palavraPasse = document.getElementById('palavra-passe')
const nome = document.getElementById('nome')
const apelido = document.getElementById('apelido')

if (loginForm != null) {
  loginForm.addEventListener('submit', (e) => {
    if (email.value === '') {
      definirErro(email, 'O email é obrigatório.')
      e.preventDefault()
    } else if (!isEmail(email.value)) {
      definirErro(email, 'O email não é válido.')
      e.preventDefault()
    } else {
      definirSucesso(email)
    }

    if (nome != null) {
      nome.addEventListener('submit', (e) => {
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
  })
}
