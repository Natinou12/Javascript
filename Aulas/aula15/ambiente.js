let num = [5, 8, 2, 9, 3]

num.push(7)
num.sort()

let pos = num.indexOf(5)

console.log(num)
console.log(`O vetor tem ${num.length} posições, sendo ${num[0]} o primeiro.`)

if (pos == -1) {
    console.log('O valor não existe!')
} else {
    console.log(`O valor está na posição ${pos}`)
}