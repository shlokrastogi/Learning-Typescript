let score: number | string = 33

score = 44

score = "55"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let shlok: User | Admin = {name: "shlok", id: 101}

shlok = {username: "sr", id: 346}

function getDatabaseId(id: number | string) {
    //making some API calls
    console.log(`DB id is: ${id}`);
}

getDatabaseId(3)
getDatabaseId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
    else {
        id + 2
    }
}

// Array

const data1: number[] = [1,2,3,4]

const data2: string[] = ["1","2","3"]

const data3: (string | number)[] = ["1",2,"3"]

let seatAllotment: "Aisle" | "middle" | "window"

seatAllotment = "Aisle"
//seatAllotment = "crew"

export {}