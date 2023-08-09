const lista = [1, 2, 3, 4];

const totalAcumulado = lista.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador + valorAtual;
});
const mediaDias = totalAcumulado / lista.length
console.log(mediaDias);