function verificacao(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        console.log("PERTENCE");
    } else {
        console.log("NAO PERTENCE");
    }
}
verificacao(10, 5, 20);