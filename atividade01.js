let dolar, real, convertido

dolar = parseFloat(prompt("qual é o valor do dolar atualmente?"))
real = parseFloat(prompt("qual é a quantidade de R$ que você tem?"))

convertido = real/dolar

document.write(`O valor que você tem convertido é de ${convertido}`)