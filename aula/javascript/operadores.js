
/** OPERADORES ARITIMÉTICOS */
// + - * / % **
/** OPERADORES RELACIONAIS */
// > >= < <= != (maior,  maior que, menor,menor que, diferente)
// && || (E lógico, OU lógico)
/*
const ehPar = 3 // Number

if(ehPar % 2 == 0 ) {
    // trata quando a condição for verdadeira
    alert('O número' + ehPar + ' é par!')

    } else {
        //trata a condição quando falsa
        alert('O número' + ehPar + 'é ímpar!')
    }

console.log(ehPar % 2 == 0)
*/
//Pessoas com idade entre 18 e 70 anos podem entrar.
//Pessoas maiores de 70 precisam de companhia
//Menores, vazam!


const idade = prompt("Digite sua idade:");

if (isNaN(idade) || idade.trim() === "") {
    alert("Por favor, digite um número válido!");
} else if (idade < 18) {
    alert("Vaza, menor!");
} else if (idade > 70) {
    alert("Você tem " + idade + " anos.\nPode entrar, mas precisa estar acompanhado(a).");
} else {
    alert("Você tem " + idade + " anos.\nPode entrar no baile!");
}0