class University {
    constructor(founderFirstName: string, founderLastName: string, students: number, age: number) {
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

class Hogwarts extends University {
    private city: string = "London";
    Place() {
        console.log("City:" + this.city);
    }
}

