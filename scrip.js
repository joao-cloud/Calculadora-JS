
const numeros = document.querySelectorAll('.num')
const operacao = document.querySelectorAll('.op')
const resultado = document.querySelector('.res')
const display = document.querySelector('#visor')
const limpar = document.querySelector('.lim')
const apagar =document.querySelector('.apg')
let sinal = false
let decimal = false

numeros.forEach((el)=>{
    el.addEventListener('click',(e)=>{
        sinal = false
        if(e.target.innerHTML == '.'){
            if(!decimal){
                decimal = true
                display.innerHTML+=e.target.innerHTML
            }
        }else{
            display.innerHTML+=e.target.innerHTML
        }
    })
})

operacao.forEach((el)=>{
    el.addEventListener('click',(e)=>{
        if(!sinal){
            sinal = true
            display.innerHTML+=e.target.innerHTML            
        }
    })
})

limpar.addEventListener('click',()=>{
    display.innerHTML = ""
})

apagar.addEventListener('click',()=>{
        const res = document.getElementById('visor').innerHTML
        document.getElementById('visor').innerHTML = res.substring(0, res.length -1)
})
