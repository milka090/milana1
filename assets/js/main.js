'use script';

alert('Я JavaScript');

let name = prompt('введите ваше имя','user');
let name1 = prompt('введите вашу фамилию','user1');
let name2 = prompt('введите ваше отчество','user2');
alert(`ваше имя ${name}`);
alert(`ваша фамилия ${name1}`);
alert(`ваше отчество ${name2}`);

let isTrue = confirm('это действительно ваше имя фамилия отчество?');
alert(isTrue);
