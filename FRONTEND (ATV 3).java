
let nomes = ['Ridael', 'Inacio', 'Vitor', 'Neves', 'Alfeu']
console.log(nomes[2]);

nomes.push('Torres')
nomes.unshift('bob')
console.log(nomes)

nomes.pop();
console.log(nomes);

const numeros = [5, 8, 3, 1];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados);

const outrosNumeros = [4, 3, 6, 9, 2];
const maioresQ5 = outrosNumeros.filter(num => num > 5);
console.log(maioresQ5)