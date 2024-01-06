let obj1 = {
    name : "afaq"
}

obj1 = null;

let obj2 = {
    name : obj1
}

obj1 = null;

console.log(obj2)