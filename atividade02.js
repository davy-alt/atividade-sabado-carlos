let deposito, lucro, final, juros

juros = 0.07

deposito = parseFloat(prompt("Qual valor você deseja depositar?"))

lucro = valor*juros
final = lucro+deposito

document.write(`1 mes após o deposito você terá ${final}`)
