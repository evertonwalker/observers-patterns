const Observable = require('./observable');

let observable = new Observable();

// Criação das variáveis  básicas para receberem os valores
let quantifyItens;
let total;

//criando uma lógica para cada tipo de retorno do objeto inscrito
let callItens = value => quantifyItens = value.length;
let calculePrices = value => total = value.reduce((anterior, proximo) => anterior + proximo.value, 0);

//Escrevendo os eventos no observable
observable.subscribe(callItens);
observable.subscribe(calculePrices);

//Notificando os itens
observable.notify([{ value: 25}, { value: 23}]);

console.log(quantifyItens, total);
