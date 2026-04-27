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
        list.push((Number(quantidade) / i).toFixed(2))
    }

    return list
}
console.log(criarListaDivisao(9))

function gerar(){

    const tabela = document.getElementById("tbdy")
    const quantidade = document.getElementById("quantidade").value 
    
    const listaNumero = criarListaNumeros(Number(quantidade))
    const listaAdicao = criarListaAdicao(Number(quantidade))
    const listaSubtracao = criarListaSubtracao(Number(quantidade))
    const listaMultiplicacao = criarListaMultiplicacao(Number(quantidade))
    const listaDivisao= criarListaDivisao(Number(quantidade))
    
    for(let i = 0; i < quantidade; i++){
        const linha = document.createElement("tr")
    
        function criarCelula(valor){
            const td = document.createElement("td")
            td.textContent = valor
            return td
        }
    
        linha.appendChild(criarCelula(listaNumero[i]))
        linha.appendChild(criarCelula(listaAdicao[i]))
        linha.appendChild(criarCelula(listaSubtracao[i]))
        linha.appendChild(criarCelula(listaMultiplicacao[i]))
        linha.appendChild(criarCelula(listaDivisao[i]))
    
        tabela.appendChild(linha)
    }
    
}