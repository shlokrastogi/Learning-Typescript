"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Shlok Rastogi";
greetings.toLowerCase();
console.log(greetings);
//number
//Bad practice
var userId1;
userId1 = 12345;
//Might be Good Practice (Depends on situation)
var userId2 = 123;
//Might be Better Practice (Depends on situation)
var appleCost = 1253.56;
appleCost.toFixed(0);
// boolean
var isLoggedIn = true;
// any (Bad practice)
var hero1;
//When typeScript won't able to understant that what value will come out later on when we call hero it gives it the data type any
function getHero1() {
    return "Superman";
    //return true
    //return 0
}
hero1 = getHero1();
var hero2;
//Now i cannot return any other data type except string
function getHero2() {
    return "Superman";
}
hero2 = getHero2();
