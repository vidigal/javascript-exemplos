// .map percorre todos os elementos do array e executa uma função nesses elementos. Além disso, retorna um novo array modificado pela função executada.

var frutas = ['laranja', 'banana', 'maça', 'tomate', 'uva'];

var arrayTratado = frutas.map((element) => {
    console.log(element.length);
    return element.length
});

console.log(frutas);
console.log(arrayTratado);

// Também pode ser usado com a declaração de uma função
inverteString("banana");

var frutasInvertidas = frutas.map(inverteString);
console.log(frutasInvertidas);

function inverteString(str) {
    return str.split('').reverse().join('');
}
//