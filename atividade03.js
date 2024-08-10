let valor, porcentagem, total

valor = parseFloat(prompt("qual é o valor do produto que vai ser vendido?"))
porcentagem = parseFloat(prompt('qual será a porcentagem adicionada na hora de vender o produto?'))

total = valor + porcentagem

document.write(`o valor do produto na hora de vender será equivalente a ${total}`)