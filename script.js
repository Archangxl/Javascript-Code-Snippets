const car = {
    engine: 'LS',
    turbo: 'Twin'
}

const {turbo, ...newCar} = car;

console.log(newCar);

const array = [1,2,3,4,null,5]

if (array.length === array.filter(Boolean).length) {
    console.log(1);
} else {
    console.log(2);
}