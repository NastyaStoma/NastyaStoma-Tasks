function University(founderFirstName, founderLastName, students, age) {
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
    University.apply(this, arguments);
    var city = "London";
    this.Place = function() {
        console.log("City:" + city);
    }
}
var gryffindor = new Gryffindor("Godric", "Gryffindor", 300, 30000);
gryffindor.founderFirstName;