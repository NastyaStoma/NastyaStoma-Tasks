class Universities {
    constructor(founderFirstName, founderLastName, students, age) {
        this.founderFirstName = founderFirstName;
        this.founderLastName = founderLastName;
        this.students = students;
        this.age = age;
    }
    fullName() {
        console.log("The founder of the university: " + this.founderFirstName + " " + this.founderLastName);
    }
    description() {
        console.log("Students:" + this.students + ", age:" + this.age);
    }
}
class Hogwarts extends Universities {
    Place() {
        var city = "Scotland";
        console.log("City:" + city);
    }
}
var hogwarts = new Hogwarts("Rowena", "Ravenclaw", 450, 400);
hogwarts.fullName();
hogwarts.Place();
hogwarts.description();