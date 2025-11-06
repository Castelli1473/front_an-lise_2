const lampada = document.getElementById('lampada')
const btnAlternar = document.getElementById('btn-alternar')
const baseUr1Img = 'https://refactored-space-enigma-jjwq4v4x4jr62q4rx-5500.app.github.dev/aula/downloads/'
//     alert(lampada.src)
// alert(btnAlternar)

//alert(lampada.src)
//alert(btnAlternar.textContent)
btnAlternar, addEventListener('click', function () {

    if (lampada.src == baseUr1Img + 'lampada1.png') {
        lampada.src = 'lampada2.png'
        btnAlternar.textContent = "Lâmpada Acesa!"
    } else {
        lampada.src = 'lampada1.png'
        btnAlternar.textContent = "Lâmpada apagada!"
        btnAlternar.style.backgroundColor = 'rgba(255, 0, 0, 1)'
    }
})