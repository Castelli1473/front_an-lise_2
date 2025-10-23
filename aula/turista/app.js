const lugares = ['praia', 'montanha']
        const mensagem = `
        -- ROTEIRO DE VIAGENS -- 
        Lugares:  ${lugares}
        -------------------`
        alert(mensagem)
        const escolhaUsuario = prompt('Pra onde desaja viajar?')
        if (escolhaUsuario == null && escolhaUsuario == NaN) {
            alert('Por favor digite um valor na lista de viagem!')
        } else {
            if (lugares.includes(escolhaUsuario)) {
                if (escolhaUsuario == 'praia') {
                    //alert('Praia!!')
                    window.location.href = './praia.html'
                } else if (escolhaUsuario == 'montanha') {
                    //alert('montanha...!!')
                    window.location.href = './montanha.html'
                }

            }
        }
