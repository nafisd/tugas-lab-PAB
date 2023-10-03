console.log("------ Class ------");

class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return "I have a " + this.brand;
    }
}

let myCar = new Car("City");

console.log(myCar.present());