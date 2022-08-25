// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // this.x *= dt;
    // this.y *= dt;
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
    this._xInitial = 202;
    this._yInitial = 395;
    this.xStep = 101;
    this.yStep = 83;
    this.x = this._xInitial;
    this.y = this._yInitial;
    this.xAxisMin = 0;
    this.xAxisMax = this.xAxisMin + this.xStep * 4;           // xAxisMax = 404;
    this.yAxisMin = this._yInitial - this.yStep * 4;          // yAxisMin = 63
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

let bug = new Enemy(100, 100);
const allEnemies = [bug];
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
