'use script'
// function criarListaNumeros(quantidade){
//     let listaNumeros = []

//     for(let i = 1; i<= quantidade; i++){
//         listaNumeros.push(i*2)
//     }
//     return listaNumeros
// }
function criarListaNumeros(quantidade){
    let listaNumeros = []

    for(let i = 1; i<= quantidade; i++){
        listaNumeros.push(i)
    }
    return listaNumeros
}
console.log(criarListaNumeros(13))

function criarListaPares(quantidade){
    let listaPar = []
    let quantidadeDois = Number(quantidade)*2
    cont = 1
    while(cont <= quantidadeDois){
        
        if(cont % 2 == 0){
            
            listaPar.push(cont)
        }

            cont++
    }
    
    return listaPar
}
console.log(criarListaPares(13))

function criarListaImpares(quantidade){
    let listaImpar = []
    let quantidadeDois = Number(quantidade)*2
    cont = 0
    while(cont <= quantidadeDois){
        
        if(cont % 2 != 0){
            
            listaImpar.push(cont)
        }

        cont++
    }
    
    return listaImpar
}
console.log(criarListaImpares(13))

function criarListaMultDe5(quantidade){
    let listaMultDe5 = []
    let cont = 1
    let resultado
    
    while(cont <= quantidade){

        resultado = cont*5
        listaMultDe5.push(resultado)
        cont++

    }
    
    return listaMultDe5
}
console.log(criarListaMultDe5(13))

function criarListaPotenc2(quantidade){
    let listaPotenc2 = []
    let cont = 0
    let resultado
    let potencia = 2

    while(cont < quantidade){

        resultado = potencia ** cont
        listaPotenc2.push(resultado)
        cont++
    }

    return listaPotenc2
}
console.log(criarListaPotenc2(13))