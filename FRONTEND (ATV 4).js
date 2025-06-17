
function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}

function aplicarDesconto(valorTotal) {
    return valorTotal > 100 ? valorTotal * 0.9 : valorTotal;
}

function exibirResumo(precoUnitario, quantidade) {
    const valorTotal = calcularTotal(precoUnitario, quantidade);
    const valorComDesconto = aplicarDesconto(valorTotal);
    
    alert(
        `RESUMO DA COMPRA:\n\n` +
        `Preço Unitário: R$ ${precoUnitario.toFixed(2)}\n` +
        `Quantidade: ${quantidade}\n` +
        `Valor Total: R$ ${valorTotal.toFixed(2)}\n` +
        `Valor com Desconto: R$ ${valorComDesconto.toFixed(2)}`
    );
}

const preco = parseFloat(prompt("Digite o preço unitário do produto:"));
const quantidade = parseInt(prompt("Digite a quantidade comprada:"));

if (isNaN(preco) || isNaN(quantidade) || preco <= 0 || quantidade <= 0) {
    alert("Por favor, insira valores válidos (números positivos).");
} else {
    exibirResumo(preco, quantidade);
}