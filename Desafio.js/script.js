let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")


let resultOne = Number(numberOne) + Number(numberTwo)
let resultTwo = Number(numberOne) - Number(numberTwo)
let resultThree = Number(numberOne) * Number(numberTwo)
let resultFour = Number(numberOne) / Number(numberTwo)
let resultFive = Number(numberOne) % Number(numberTwo)

alert("a soma é de: " + resultOne)
alert("a subtração é de: " + resultTwo)
alert("a multiplicação é de: " + resultThree)
alert("a divisão é de: " + resultFour)
alert("o resto da divisão é de: " + resultFive)

if (resultOne & 2 == 0) {
    alert("o resultado da soma é igual a par")
} else {
    alert("o resultado da soma é igual a ímpar")
}

if (numberOne === numberTwo) {
    alert("os dois números inseridos são iguais")
} else {
    alert("os dois números inseridos são diferentes")
}