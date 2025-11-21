// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей

function Calculator() {
  this.read = function () {
    this.x = Number(prompt("Перше число?", 0));
    this.y = Number(prompt("Друге число?", 0));
  };
  this.sum = function () {
    return this.x + this.y;
  };
  this.mul = function () {
    return this.x * this.y;
  };

}


let calculator = new Calculator();
calculator.read();

alert("Сума: " + calculator.sum());
alert("Множення: " + calculator.mul());