let num = [5, 8, 2, 9, 3];
num.push(1);
console.log(`O vetor tem ${num.length} posições`);
num.sort();
console.log(num);

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

for (let pos in num) {
    console.log(num[pos]);
}

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
let pos1 = num.indexOf(8);
console.log(pos1);