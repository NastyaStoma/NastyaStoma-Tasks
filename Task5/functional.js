function faculty(founderFirstName, founderLastName, students, age) {
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

function Gryffindor(founderFirstName, founderLastName, students, age) {
    faculty.apply(this, arguments);
    var skills = "Bravery!";
    this.color = "Red";
    this.Skills = function() {
        console.log("Skills:" + skills);
    }
}
var gryffindor = new Gryffindor("Godric", "Gryffindor", 300, 30000);
gryffindor.founderFirstName;
gryffindor.color;