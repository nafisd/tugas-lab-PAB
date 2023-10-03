console.log("------ Arrow Fuction ------");

//normal function
function hello() {
    return "Hello World!";
}

//normal function
hello = function() {
    return "Hello World!";
}

console.log(hello());

// arrow function
hello = () => {
    return "Hello World! This is from arrow function";
}

// arrow function
hello = () => "Hello World! This is from arrow function";

console.log(hello());

// arrow function with 1 parameter
hello = (myName) => "Hello " + myName + "! this is from arrow function";

// arrow function with 1 parameter
hello = myName => 'Hello $(myName)! This is from arrow function';

console.log(hello("nafis"));