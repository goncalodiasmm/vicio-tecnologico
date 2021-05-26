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