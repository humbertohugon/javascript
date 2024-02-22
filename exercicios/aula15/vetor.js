let num = [5, 8, 4, 7, 6, 1, 3]

/*
for(let pos = 0;pos < num.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num.indexOf(8))