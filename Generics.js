var score = [];
var names = [];
function identity1(val) {
    return val;
}
// you can input any type and can return any type of value
//for example you input number then you can return not only number but also other type like string, boolean etc  
function identity2(val) {
    return val;
}
// if you input the number then you get the retrn type number as output it will be fixed
function identity3(val) {
    return val;
}
function identity4(val) {
    return val;
}
//identity4<Bottle>({})
function getSearchProducts(products) {
    //do some database operations
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProducts = function (products) {
    var myIndex = 4;
    return products[myIndex];
};
