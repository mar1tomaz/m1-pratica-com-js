const lista = [1, 2, 3, 4];
const totalAcumulado = lista.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador + valorAtual;
});

console.log(totalAcumulado);
