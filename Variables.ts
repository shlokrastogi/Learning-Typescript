let greetings: string = "Shlok Rastogi";

greetings.toLowerCase();

console.log(greetings);

//number

//Bad practice
let userId1: number
userId1 = 12345

//Might be Good Practice (Depends on situation)
let userId2: number = 123

//Might be Better Practice (Depends on situation)
let appleCost = 1253.56
appleCost.toFixed(0)

// boolean
let isLoggedIn: boolean = true


// any (Bad practice)
let hero1;

//When typeScript won't able to understant that what value will come out later on when we call hero it gives it the data type any
function getHero1() {
    return "Superman"
    //return true
    //return 0
}

hero1 = getHero1();

let hero2: string;

//Now i cannot return any other data type except string
function getHero2() {
    return "Superman"
}


hero2 = getHero2();

export {}