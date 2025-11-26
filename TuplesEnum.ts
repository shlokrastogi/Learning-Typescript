const user: (string | number)[] = [1,"sr"]

let tUser: [string, number, boolean]

tUser = ["sk", 123, true]
//tUser = [123, true, "sk"] // Can't use because not in the order as mentioned above

let rgb: [number, number, number] = [255,255,112]

type User = [number, string]

const newUser: User = [112, "exam@gmail.com"]

newUser[1] = "hc.com"
// push,pop,slice they messed up with tupples
newUser.push(12)

export{}