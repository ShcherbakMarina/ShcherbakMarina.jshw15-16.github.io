function Human() {
  this.name = 'Ivan';
  this.age = 25;
  this.gender = 'male';
  this.height = 180;
  this.weight = 80;
}


function Worker() {
  this.job = 'Google';
  this.salary = '$5000';
  this.work = function() {
    console.log("I'm working...");
  }
}

function Student() {
  this.university = 'KhAI';
  this.scholarship = '$50';
  this.watchSeries = function() {
    console.log("I'm watching series");
  }
}

var human = new Human();

Worker.prototype = human;
Student.prototype = human;


var worker = new Worker();
var student = new Student();

console.log(worker.name);
console.log(student.age);
console.log(worker.gender);
console.log(student.height);
console.log(worker.weight);
