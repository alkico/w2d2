// The whole game again but with classes

let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10]

// let player1 = {
//     name: 'Joaquim',
//     color: 'red',
//     position: 0,
//     cash: 1000,
//     move: function () {
//         let dice = 1 + Math.floor(Math.random() * 6);
//         this.position = (this.position + dice) % squares.length;
//         if (this.cash < 0) {
//             console.log(`Game over for ${this.name}.`);
//         }
//     },
//     displayInfo: function () {
//         console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
//     }
// }

class Player {
    // the contructor gets called when we instantiate the class with the 'new' keyword
    constructor(nameParameter, colorParameter) {
        this.name = nameParameter;
        this.color = colorParameter;
        this.position = 0;
        this.cash = 1000;
    }

    move() {
        let dice = 1 + Math.floor(Math.random() * 6);
        this.position = (this.position + dice) % squares.length;
        if (this.cash < 0) {
            console.log(`Game over for ${this.name}.`);
        }
    }

    displayInfo() {
        console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
    }
}

const player1 = new Player('Mike', 'red');

// console.log(player1);
// player1.move();
// player1.displayInfo();




// Inheritance - using the extends keyword

// we have two classes : Cat and Bird

// The methods they have in common can be moved to a parent class

class Animal {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound + '!!!');
    }
}

// Cat is inheriting from Animal
class Cat extends Animal {
    constructor(name, color, sound, numberOfLives) {
        // in the child constructor we have to use super()
        // to call the parent constructor
        super(name, color, sound);
        this.lives = numberOfLives;
    }
}


class Bird extends Animal {
    constructor(name, color, sound) {
        super(name, color, sound);
    }

    fly() {
        console.log('i am flying');
    }
    // when bird uses the makeSound() method, this gets used 
    makeSound() {
        console.log('overriding sound');
    }
}


const kitten = new Cat('Kitty', 'black', 'meow', 7);
console.log(kitten);
// we can now use methods that are only defined in the parent class
kitten.makeSound();





// class Cat {
//     constructor(name, color, sound, numberOfLives) {
//         this.name = name;
//         this.color = color;
//         this.sound = sound;
//         this.lives = numberOfLives
//     }

//     makeSound() {
//         console.log(this.sound);
//     }

// }

// class Bird {
//     constructor(name, color, sound) {
//         this.name = name;
//         this.color = color;
//         this.sound = sound;
//     }

//     makeSound() {
//         console.log(this.sound);
//     }

//     fly() {
//         console.log('i am flying');
//     }
// }