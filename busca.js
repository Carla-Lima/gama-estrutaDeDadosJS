var valores = [5, 8, 10, 18, 25, 38, 45, 60]

function busca(num) {
    for (i = 0; i < 6; i++) {
        if (num == valores[i]){
            return i
        }
    }
    return -1
}
var valores1 = [5, 8, 10, 18, 25, 38, 45, 60, 80, 100] 

function buscaBin(num) {
    let inicio = 0
    let fim = 9
    let meio
    let passos = 0  
    
    while (inicio <= fim){
        meio = parseInt((inicio + fim) / 2)
        passos = passos + 1
        if ( num == valores1[meio]){
            console.log ('achei em ' + passos + ' passos.')
            return meio
        } else {
            if (num > valores1[meio]){
                inicio = meio + 1
            } else {
                fim = meio -1 
            }
        }
    } 
    console.log ('não achei em ' + passos + ' passos.')
    return -1
}

console.log (busca(10))
console.log (busca(50))

console.log (buscaBin(8))
console.log (buscaBin(50))