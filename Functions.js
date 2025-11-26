"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //you can also return a string here there is no restriction
}
function getUpper(val) {
    return val.toUpperCase;
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("shlok");
loginUser("shlok", "shlok@gmail.com");
// Better code
function addTwo2(num) {
    return num + 2;
}
function getValue(value) {
    if (value > 5) {
        return false;
    }
    else
        return "200 OK";
}
var heroes = ["Thor", "Spiderman", "Ironman"];
//const heroes = [1, 2, 3]
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
addTwo2(7);
