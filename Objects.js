"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "shlok",
    email: "shlok@gmail.com",
    isActive: true
};
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
var newUser = { name: "shlok", isPaid: false, email: "shlok@gmail.com" };
createUser({ name: "shlok", isPaid: false });
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 299 };
}
function createNewUser(user) {
    return { name: "", email: "", isActive: true };
}
createNewUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "shlok",
    email: "s@s.com",
    isActive: true
};
myUser.email = "shlok@gmail.com";
