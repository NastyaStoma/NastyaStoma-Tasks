function School(founderFirstName, founderLastName, students, age) {
    this.founderFirstName = founderFirstName;
    this.founderLastName = founderLastName;
    this.students = students;
    this.age = age;
}
School.prototype.founderFullName = function() {
        console.log("The founder of the school: " + this.founderFirstName + " " + this.founderLastName);
    }
School.prototype.description = function() {
        console.log("Students:" + this.students + ", age:" + this.age);
    }

Hogwarts.prototype = Object.create(School.prototype);

function Hogwarts(founderFirstName, founderLastName, students, age) {
    School.apply(this, arguments);
    this.city = "London";
    this.Place = function() {
        console.log("City:" + city);
    }
}

var hogwarts = new Hogwarts("Salazar", "Slytherin", 250, 150);