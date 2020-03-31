// Example of a VERY simple Monopoly game simulation

// Each square represents the cash earned when a player is on it. For example:
// - If a user is at position 0, the cash will increase by 100€
// - If a user is at position 4, the cash will decrease by 40€

const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let player1 = {
    name: 'Joaquim',
    color: 'red',
    position: 0,
    cash: 1000,
    move: function () {
        let dice = 1 + Math.floor(Math.random() * 6);
        this.position = (this.position + dice) % squares.length;
        if (this.cash < 0) {
            console.log(`Game over for ${this.name}.`);
        }
    },
    displayInfo: function () {
        console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
    }
}

let player2 = {
    name: 'Maxence',
    color: 'blue',
    position: 0,
    cash: 1000
}

let player3 = {
    name: 'Mostafa',
    color: 'black',
    position: 0,
    cash: 1000
}

let dice;

// --- Turn of Player 1 ---
// The dice is a random integer between 1 and 6
dice = 1 + Math.floor(Math.random() * 6);
// if ((player1.position + dice) > 15) {
//     player1.position = player1.position + dice - squares.length;
// } else {
//     player1.position += dice;
// }
// or simpler
player1.position = (player1.position + dice) % squares.length;
// player1.position = player1.position + dice;
// The cash is updated based on the values of squares and player1.position
player1.cash += squares[player1.position];
// If the player doesn't have anymore cash, player is out of game
if (player1.cash < 0) {
    console.log(`Game over for ${player1.name}.`);
}

// now make the other moves and display the info:


// --- Turn of Player 2 --- 
dice = 1 + Math.floor(6 * Math.random());
player2.position = (player2.position + dice) % squares.length;
player2.cash += squares[player2.position];
if (player2.cash < 0) {
    console.log(`Game over for ${player2.name}.`);
}

// --- Turn of Player 3 --- 
dice = 1 + Math.floor(6 * Math.random());
player3.position = (player3.position + dice) % squares.length;
player3.cash += squares[player3.position];
if (player3.cash < 0) {
    console.log(`Game over for ${player3.name}.`);
}

// --- Display info  ---
// console.log(player1);
// console.log(player2);
// console.log(player3);


// there is a lot of repetition
// it would be nice if we had a method on the player object to do 
// player1.move()

player1.move();
player1.displayInfo();