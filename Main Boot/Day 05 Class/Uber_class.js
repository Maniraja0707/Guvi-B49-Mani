//Uber class distance in km price for 40rs per km

class Uber{
    constructor(Distance,Price) {
        this.Distance = Distance;
        this.Price = Price;
    }

    gettotalAmount() {
        return "Rupees: " + this.Distance * this.Price 
    }
}


console.log(new Uber(5, 20).gettotalAmount());
console.log(new Uber(8, 25).gettotalAmount());

// class rectangle area calculator

class RectAngle {
    constructor(height, width) {
        this.height = height;
        this.width =width;
    }

    getArea() {
        return this.height * this.width;
    }
}

//  let rect = new RectAngle(20,40);
console.log(new RectAngle(2,4).getArea());
console.log(new RectAngle(5,2).getArea());
console.log(new RectAngle(3,4).getArea());
console.log(new RectAngle(5,5).getArea());


// class test


class Nick {
    constructor() {
        console.log("Hello");
    }

getName() {
    console.log("Mani");
}
}
let jack = new Nick(); // Hello

jack.getName(); // Mani