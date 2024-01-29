'use strict';
const nameProduct = prompt('Наименование товара');
let quantityProduct = prompt('Количество товара');
const categoryProduct = prompt('Категория товара');
let priceProduct = prompt('Цена товара');

console.log('Количество товара', typeof quantityProduct);
quantityProduct = +quantityProduct;
console.log('Количество товара', typeof quantityProduct);
console.log('Количество товара', quantityProduct);

console.log('Цена товара', typeof priceProduct);
priceProduct = +priceProduct;
console.log('Цена товара', typeof priceProduct);
console.log('Цена товара', priceProduct);

const summPriceProduct = quantityProduct * priceProduct;

console.log('На складе имееется', quantityProduct, ' ', nameProduct, ' на сумму ', summPriceProduct, 'рублей');





