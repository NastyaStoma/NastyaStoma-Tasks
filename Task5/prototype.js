function School(founderFirstName, founderLastName, students, age) {
    this.founderFirstName = founderFirstName;
    this.founderLastName = founderLastName;
    this.students = students;
    this.age = age;
    this.founderFullName = function() {
        console.log("The founder of the faculty: " + this.founderFirstName + " " + this.founderLastName);
    }
    this.description = function() {
        console.log("Students:" + this.students + ", age:" + this.age);
    }
}
Hogwarts.prototype = Object.create(School.prototype);

function Hogwarts(founderFirstName, founderLastName, students, age) {
    School.apply(this, arguments);
    var city = "United Kingdom";
    this.Place = function() {
        console.log("City:" + city);
    }
}

var hogwarts = new Hogwarts("Salazar", "Slytherin", 250, 150);