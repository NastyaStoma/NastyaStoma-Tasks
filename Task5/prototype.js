function Faculty(founderFirstName, founderLastName, students, age) {
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
Slytherin.prototype = Object.create(Faculty.prototype);

function Slytherin(founderFirstName, founderLastName, students, age) {
    Faculty.apply(this, arguments);
    var skills = "Ambition!";
    var color = "Green";
    this.Skills = function() {
        console.log("Skills:" + skills);
    }
}

var slytherin = new Slytherin("Salazar", "Slytherin", 250, 150);