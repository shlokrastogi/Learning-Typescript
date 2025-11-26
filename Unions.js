"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var shlok = { name: "shlok", id: 101 };
shlok = { username: "sr", id: 346 };
function getDatabaseId(id) {
    //making some API calls
    console.log("DB id is: ".concat(id));
}
getDatabaseId(3);
getDatabaseId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
// Array
var data1 = [1, 2, 3, 4];
var data2 = ["1", "2", "3"];
var data3 = ["1", 2, "3"];
var seatAllotment;
seatAllotment = "Aisle";
