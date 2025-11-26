"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    // constructor(email: string, name: string) {
    //     this.email = email;
    //     this.name = name;
    // }
    function User(email, name) {
        this.email = email;
        this.name = name;
        // public email: string
        // name: string
        this.city = "Delhi";
    }
    return User;
}());
var shlok = new User("s@k.com", "shlok");
