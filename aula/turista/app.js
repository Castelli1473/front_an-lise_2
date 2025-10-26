const lugares = ['praia', 'montanha', 'cachoeira']

const mensagem = `
-- ROTEIRO DE VIAGENS -- 
Lugares disponíveis: ${lugares.join(', ')}
-------------------
`
alert(mensagem)

const escolhaUsuario = prompt('Pra onde deseja viajar?')

if (escolhaUsuario === null) {
    alert('Operação cancelada. Até a próxima! 👋')
} else if (escolhaUsuario.trim() === '') {
    alert('Por favor, digite um destino válido!')
} else {
    const escolha = escolhaUsuario.toLowerCase().trim()

    if (lugares.includes(escolha)) {
        if (escolha === 'praia') {
            window.location.href = './praia.html'
        } else if (escolha === 'montanha') {
            window.location.href = './montanha.html'
        } else if (escolha === 'cachoeira') {
            window.location.href = './cachoeira.html'
        }
    } else {
        alert('Esse destino não está na lista de viagens!')
    }
}
