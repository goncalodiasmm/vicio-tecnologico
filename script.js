// BUSCAR PRODUTOS
class Produtos {
  async getProdutos() {
    try {
      let resultado = await fetch('produtos.json')
      let data = await resultado.json();
      let produtos = data.produtos;
      produtos = produtos.map(item => {
        const {}
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// MOSTRAR PRODUTOS
class UI {

}
// LOCAL STORAGE
class Storage {

}

document.addEventListener('DOMContentLoaded', () => {
  const UI = new UI();
  const produtos = new Produtos()

  // BUSCAR PRODUTOS
  produtos.getProdutos().then(data => console.log(data))
})

// ALTERNAR SECÇÃO DE DETALHES E OPINIÕES
const seccaoDetalhes = document.getElementById('seccao-detalhes')
const seccaoOpinioes = document.getElementById('seccao-opinioes')
const detalhesBtn = document.getElementById('detalhes-btn')
const opinioesBtn = document.getElementById('opinioes-btn')

detalhesBtn.addEventListener('click', () => {
  seccaoOpinioes.classList.add('ocultar')
  seccaoDetalhes.classList.remove('ocultar')
  detalhesBtn.classList.add('borda-primária')
  detalhesBtn.classList.remove('borda-cinzento')
  opinioesBtn.classList.remove('borda-primária')
  opinioesBtn.classList.add('borda-cinzento')
})

opinioesBtn.addEventListener('click', () => {
  seccaoDetalhes.classList.add('ocultar')
  seccaoOpinioes.classList.remove('ocultar')
  opinioesBtn.classList.add('borda-primária')
  opinioesBtn.classList.remove('borda-cinzento')
  detalhesBtn.classList.remove('borda-primária')
  detalhesBtn.classList.add('borda-cinzento')
})
