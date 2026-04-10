let valores = [1, 5, 6, 3, 7, 2]

console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
*/ // Noob

/*
for (pos = 0; pos < valores.length; pos++) {
    console.log(valores[pos])
}
*/ // Pro

for (let pos in valores) {
    console.log(valores[pos])
}