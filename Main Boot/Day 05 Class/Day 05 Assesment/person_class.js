// Write a “person” class to hold all the details.

class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getAddress() {
        return this.address;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setAddress(address) {
        this.address = address;
    }
}

let p = new Person("Mani", 30, "123 Main St, Trichy");
let pk = new Person("Sai", 20, "Chennai");

console.log(p.getName(),p.getAge(),p.getAddress());
console.log(pk.getAge());
p.setName("John");
console.log(p.getName());



