// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speedKoef = Math.floor(Math.random() * 5) * 75 + 60;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += dt * this.speedKoef;
    // rowOneY = 63;
    // rowTwo = 63 + 83 = 146;
    // rowThree = 63 + 83 + 83 = 229; 
    // ------------------------------------------
    // xStart = -98;
    // xEnd = 0 + 101 * 4 + 98 = 502;






    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (){
    this.sprite = 'images/char-boy.png';
    this.xInitial = 202;
    this.yInitial = 395;
    this.xStep = 101;
    this.yStep = 83;
    this.x = this.xInitial;
    this.y = this.yInitial;
    this.xAxisMin = 0;
    this.xAxisMax = this.xAxisMin + this.xStep * 4;           // xAxisMax = 404;
    this.yAxisMin = this.yInitial - this.yStep * 4;          // yAxisMin = 63
    this.yAxisMax = this.yAxisMin + this.yStep * 4;           // yAxisMax = 395
}

Player.prototype.update = function (moveDirection){
    if (moveDirection === 'left' && this.x > this.xAxisMin) {
        this.x -= this.xStep;
    }
    if (moveDirection === 'right' && this.x < this.xAxisMax){
        this.x += this.xStep;
    }
    if (moveDirection === 'up' && this.y > this.yAxisMin ){
        this.y -= this.yStep;
    }
    if (moveDirection === 'down' && this.y < this.yAxisMax) {
        this.y += this.yStep;
    }

}

Player.prototype.render = function (){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function (direction){
    this.update(direction);
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let bug1 = new Enemy(0, 146);
let bug2 = new Enemy(40, 146)
const allEnemies = [bug1, bug2];
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    

    player.handleInput(allowedKeys[e.keyCode]);
});
