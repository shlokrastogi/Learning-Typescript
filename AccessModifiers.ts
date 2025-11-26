class User {

    private _courseCount1 = 1
    protected _courseCount2 = 1
    // public email: string
    // name: string
    private readonly city: string = "Delhi"
    // constructor(email: string, name: string) {
    //     this.email = email;
    //     this.name = name;
    // }

    constructor(
        public email: string,
        public name: string,
        ){
    }

    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount1
    }
    // no return type in setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be less than 1")
        }
        this._courseCount1 = courseNum
    }
}
// it cannot acquire the private property 
class Subuser extends User {
    isFamily: Boolean = true
    changeCourseCount(){
        //this._courseCount1 = 4  // Cannont access it because it was in private class
        this._courseCount2 = 4 //Can access it because it was in protected class
    }
}

const shlok = new User("s@k.com", "shlok")
//shlok.city  //Cannot access it because it is private and called outside the class

export{}