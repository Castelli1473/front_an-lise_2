// Funções são blocos de código que podem ser
// reaproveitadas ao longo da execução do programa 
// características:
//     > podem ser nomeadas ou não
//     > podem receber parâmetros ou não
//     > podem retornar valores ou não

// Declaração de função
function dizOla(){
    alert("Diz Olá!");
}

function dizOlaPessoa(nome){
    alert(`Não seja tímido(a) ${nome}. Fala oi!`);
}

const jogadores = ['Neymar','Ronaldinho', 'Messi'];
const frutas = ['banana', 'morango', 'uva'];

function formataTexto(lista){
    for(let texto of lista){
        console.log(texto.toUpperCase());
        // texto.toLowerCase() > tudo para minúscula
        // texto.trim() > elimina espaços em branco
        // texto.join(' outra coisa') > junta com outro texto
    }
}
// formataTexto(jogadores)

// ----------------------
// Funções matemáticas
// ----------------------
function adicao(n1, n2){
    return n1 + n2;
}

function subtracao(n1, n2){
    return n1 - n2;
}

function multiplicacao(n1, n2){
    return n1 * n2;
}

function divisao(n1, n2){
    if(n2 === 0){
        return "Erro: divisão por zero!";
    }
    return n1 / n2;
}

// ----------------------
// Testes
// ----------------------
const resultadoAdicao = adicao(5, 25) + 30;
console.log(`Adição: ${resultadoAdicao}`);

const resultadoSubtracao = subtracao(50, 20);
console.log(`Subtração: ${resultadoSubtracao}`);

const resultadoMultiplicacao = multiplicacao(6, 7);
console.log(`Multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = divisao(100, 4);
console.log(`Divisão: ${resultadoDivisao}`);

// ----------------------
// Invocar funções
// ----------------------
// dizOla();
// dizOlaPessoa("Cleitinho");
// dizOlaPessoa("Ana");
// dizOlaPessoa("Julius");