class University {
   private _founderFirstName: string;
   private _founderLastName: string;
   private _students: number;
   private _age: number;
	constructor(founderFullName: string) {
        this._founderFirstName = founderFullName;
    }
    description() {
        console.log("Students:" + this._students + ", age:" + this._age);
    }
}

class Hogwarts extends University {
    private _city: string = "London";
    Place() {
        console.log("City:" + this._city);
    }
}

