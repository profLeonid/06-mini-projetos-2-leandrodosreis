'use strict'

function criarListaNumeros(quantidade){
    let listaNumeros = []

    for(let i = 1; i<= quantidade; i++){
        listaNumeros.push(i)
    }
    return listaNumeros
}

function criarListaAdicao(quantidade){
    
    let list = []

    for(let i = 1; i <= 10; i++){
        list.push(Number(quantidade) + Number(i))
    }
    return list
}
console.log(criarListaAdicao(9))

function criarListaSubtracao(quantidade){
    
    let list = []

    for(let i = 1; i <= 10; i++){
        list.push(Number(quantidade) - Number(i))
    }
    return list
}
console.log(criarListaSubtracao(9))

function criarListaMultiplicacao(quantidade){
    
    let list = []

    for(let i = 1; i <= 10; i++){
        list.push(Number(quantidade) * Number(i))
    }
    return list
}
console.log(criarListaMultiplicacao(9))

function criarListaDivisao(quantidade){
    
    let list = []

    for(let i = 1; i <= 10; i++){
        list.push(Number(quantidade) / Number(i))
    }
    return 
}
console.log(criarListaDivisao(9))