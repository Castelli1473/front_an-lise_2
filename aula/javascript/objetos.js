// dados simples: numericos, strings, boolean..
// array: [1,2,3,'ana']
// objetos: {propriedade:valor}
// funções: function somar(){} => {}

// object literal = vou criar objeto direto - objetos literal
// irar criar uma chave e associar a uma propriedade valor

const perfil = {

    propriedade1: "valor1",
    //key: value
    nome: "Rodrigo",
    idade: "24",
    profissao: "Desenvolvedor",
    possuiFaculdade: true
}

console.log(Object.entries(perfil)) //Traz chave e valor
console.log(Object.keys(perfil)) // Traz só as chaves
console.log(Object.values(perfil))  //Traz só valores


//let dadosPerfil = []

//for(let dado in perfil){
//    dadosPerfil.push(perfil[dado])
//}
//alert(dadosPerfil)

//for(let dados in perfl){
  //  console.log(perfil[dados])


// atribuicao dinamica
// perfil.roupas = ['camiseta', 'shorts','jeans']

console.log(perfil.nome)
//console.log(idade)
//console.log(profissao)
//console.log(possuiFaculdade)
