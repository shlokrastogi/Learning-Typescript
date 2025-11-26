const User = {
    name : "shlok",
    email : "shlok@gmail.com",
    isActive : true
}

function createUser({name , isPaid}: {name: string, isPaid: boolean}) {}

let newUser = {name: "shlok", isPaid: false, email: "shlok@gmail.com"}

createUser ({name: "shlok", isPaid: false})

createUser(newUser)

function createCourse():{name: string, price: number} {
    return {name: "reactjs", price: 299}
}

//Type Aliases
type User1 = {
    name: string;
    email: string;
    isActive: boolean;
}

function createNewUser(user: User1): User1{
    return {name: "", email: "", isActive: true}
}

createNewUser({name: "", email: "", isActive: true})



type User2 = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number //if the user has credit card then fill the details
}

let myUser: User2 = {
    _id: "1234",
    name: "shlok",
    email: "s@s.com",
    isActive: true
}

myUser.email = "shlok@gmail.com"
//myUser._id = "123"  // it won't work because it is read only




export{}