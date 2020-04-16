function Car(startSpeed) {
  this.speed = startSpeed || 0;
}

Car.prototype.accelerate = function(value) {
  this.speed+= value;
  console.log('Current speed is: '+ this.speed);
}

Car.prototype.decelerate = function() {
  this.speed--;
  console.log('Current speed is: '+ this.speed);
}

const car1 = new Car(2);
const car2 = new Car(5);

console.log(car1.speed);
car1.accelerate(5);
car1.decelerate();
car2.accelerate(5);
console.log(car1.speed);

