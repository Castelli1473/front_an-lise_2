let numero = 0
const intervalo1 = setInterval(function(){
    numero = numero + 10
    console.log(numero)

},1000)
setTimeout(()=>{
    clearInterval(intervalo1)
},5000)
