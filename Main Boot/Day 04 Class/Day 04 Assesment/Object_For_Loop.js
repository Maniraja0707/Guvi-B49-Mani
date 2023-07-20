let myArray = ["value1", "value2", "value3"];

let myJson = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
};

// Array for loop
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Object/JSON for loop
for (let i = 0; i<Object.keys(myJson).length; i++){
    let key = Object.keys(myJson)[i];
    console.log(key + " : " +myJson[key]);
}

// Array for...in loop
for (let index in myArray) {
    console.log(myArray[index]);
}


// Object/JSON for in loop
for(let key in myJson) {
    console.log(key+" : "+myJson[key]);
}

// Array for...of loop
for (let value of myArray) {
    console.log(value);
}

// Object/JSON for of loop
for(let key of Object.keys(myJson)) {
    console.log(key +" : "+ myJson[key]);
}

// Array forEach loop
myArray.forEach(function(value) {
    console.log(value);
});

// Object/JSON forEach loop
Object.keys(myJson).forEach(function(key) {
    console.log(key +" : "+ myJson[key])
});