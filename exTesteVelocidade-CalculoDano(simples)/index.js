
let nameCar1 = prompt('qual o nome do carro?');
let velCar1 = Number(prompt('Qual a velocidade do primeiro carro?'));

let nameCar2 = prompt('qual o nome do segundo carro?');
let velCar2 = Number(prompt('qual a velocidade do segundo carro?'));

if (velCar1 > velCar2){
    alert('o carro mais rapido é o ' + nameCar1 + ' e a velocidade dele é de ' + velCar1);
}else(velCar2 > velCar1);{ //coloquei o ; pq pediu senao dava erro
    alert('o carro mais rapido é o ' + nameCar2 + ' e a velocidade dele é de ' + velCar2);
}