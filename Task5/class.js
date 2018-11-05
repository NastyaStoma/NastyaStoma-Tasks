class Faculties {
    constructor(founderFirstName, founderLastName, students, age) {
        this.founderFirstName = founderFirstName;
        this.founderLastName = founderLastName;
        this.students = students;
        this.age = age;
    }
    fullName() {
        console.log("The founder of the faculty: " + this.founderFirstName + " " + this.founderLastName);
    }
    description() {
        console.log("Students:" + this.students + ", age:" + this.age);
    }
}
class Ravenclaw extends Faculties {
    Skills() {
        var skills = "Intelligence!";
        console.log("Skills:" + skills);
    }
}
var ravenclaw = new Ravenclaw("Rowena", "Ravenclaw", 450, 400);
ravenclaw.fullName();
ravenclaw.Skills();
ravenclaw.description();