const formulario = document.querySelector(`#form-user`)

const btnRemover = document.querySelector(`#remover`)
const containerCards = document.querySelector(`#containar-cards`)

const itensProdutos = [

]
//addEventListener => Escutador de Eventos
formulario.addEventListener(`submit`,function(event){
    event.preventDefault()

    const titulo = document.querySelector(`#nome`).value.trim()
    const descricao = document.querySelector(`#descricao`).value.trim()
    const urlImagem = document.querySelector(`#img`).value.trim()
    itensProdutos.push({titulo, descricao, urlImagem})
    alert(titulo)

    console.log(itensProdutos)
    
    formulario.reset()
})
//criar uma função que gera o template do card
function criarCardNovo(){
    //TODO: Criar tags html e retornar
}

//RENDERIZAR O CARD NOVO NA PÁGINA DO APP
function renderizarCard(){
    //TODO: inserir card atualizado na página
}
btnRemover.addEventListener(`click`,function(){
    alert('Isso vai acabar deletando um card')
    })