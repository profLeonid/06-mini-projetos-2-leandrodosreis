'use script'

function criarListaNumeros(quantidade){
    let listaNumeros = []

    for(let i = 1; i<= quantidade; i++){
        listaNumeros.push(i)
    }
    return listaNumeros
}
console.log(criarListaPares(13))

function criarListaPares(quantidade){
    let listaPar = []
    let quantidadeDois = Number(quantidade)*2
    cont = 0
    while(cont < quantidadeDois){
        
        if(cont % 2 == 0){
            
            listaPar.push(cont)
        }

            cont++
    }
    
    return listaPar
}