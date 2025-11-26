function addTwo(num : number) {
    return num + 2;
    //you can also return a string here there is no restriction
}

function getUpper(val : string) {
    return val.toUpperCase;
}

let loginUser = (name : string, email : string, isPaid : boolean = false) => {}

addTwo(5);
getUpper("shlok");
loginUser("shlok", "shlok@gmail.com");


// Better code
function addTwo2(num : number): number{
    return num + 2;
}

function getValue(value : number) {
    if (value > 5) {
        return false
    }
    else return "200 OK";
}

const heroes = ["Thor", "Spiderman", "Ironman"]
//const heroes = [1, 2, 3]

heroes.map((hero : string) => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}


addTwo2(7)

export {}