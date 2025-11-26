interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    //startTrail: () => string
    startTrail(): string
    getCoupon(couponName: string, value: number): number
}

//Reopening of Interface or adding more elements to the interface
interface User {
    githubToken: string
}

//Inheritance in interface
interface Admin extends User {
    role: "admin" | "ta" | "learner "
}



const shlok: User = {dbId: 22, email: "s@s.com", userId: 465,
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "hitesh10", off: 10) => {
    return 10
}
}
shlok.email = "s@23gmail.com"

export{}