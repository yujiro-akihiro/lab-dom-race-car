// 後でビジュアルマップを作ってそれぞれのjsファイル/function/constructorを確認する

// BONUS - Iteration 9
// Inheritance from superclass 'Component' in component.js
class Player extends Component {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        super(gameScreen, left, top, width, height, imgSrc);

        this.directionX = 0;
        this.directionY = 0;
    }

    move() {
        // Update player's car position based on directionX and directionY
        this.left += this.directionX;
        this.top += this.directionY;
        debugger;

        // Ensure the player's car stays within the game screen
        if (this.left < 10) {
            this.left = 10;
        }
        if (this.top < 10) {
            this.top = 10;
        }
        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
            this.left = this.gameScreen.offsetWidth - this.width - 10;
        }
        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
            this.top = this.gameScreen.offsetHeight - this.height - 10;
        }

        // Update the player's car position on the screen
        this.updatePosition();
    }

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            console.log("Crash!");
            return true;
        } else {
            return false;
        }
    }
}


// !!! Code before iteration 9
// class Player {
//     constructor(gameScreen, left, top, width, height, imgSrc) {
//         this.gameScreen = gameScreen;
//         this.left = left;
//         this.top = top;
//         this.width = width;
//         this.height = height;
//         this.directionX = 0;
//         this.directionY = 0;
//         this.element = document.createElement("img");

//         this.element.src = imgSrc;
//         this.element.style.position = "absolute";
//         // Set up the default element's property values
//         this.element.style.width = `${width}px`;
//         this.element.style.height = `${height}px`;
//         this.element.style.left = `${left}px`;
//         this.element.style.top = `${top}px`;

//         this.gameScreen.appendChild(this.element);
//     }

//     move() {
//         // Update player's car position based on directionX and directionY
//         this.left += this.directionX;
//         this.top += this.directionY;

//         // Ensure the player's car stays within the game screen
//         // handles left hand side
//         if (this.left < 10) {
//             this.left = 10;
//         }

//         // handles top side
//         if (this.top < 10) {
//             this.top = 10;
//         }

//         // handles right hand side
//         if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
//             this.left = this.gameScreen.offsetWidth - this.width - 10;
//         }

//         // handles bottom side
//         if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
//             this.top = this.gameScreen.offsetHeight - this.height - 10;
//         }

//         // Update the player's car position on the screen
//         this.updatePosition();
//     }

//     updatePosition() {
//         this.element.style.left = `${this.left}px`;
//         this.element.style.top = `${this.top}px`;
//     }

//     didCollide(obstacle) {
//         const playerRect = this.element.getBoundingClientRect();
//         const obstacleRect = obstacle.element.getBoundingClientRect();

//         if (
//             playerRect.left < obstacleRect.right &&
//             playerRect.right > obstacleRect.left &&
//             playerRect.top < obstacleRect.bottom &&
//             playerRect.bottom > obstacleRect.top
//         ) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }



// class Game {
//     // code to be added
//     constructor() {
//         this.startScreen = document.getElementById(`game-intro`);
//         this.gameScreen = document.getElementById(`game-screen`);
//         this.gameEndScreen = document.getElementById(`game-end`);
//         this.player = null;
//         // ↑ leave it as null for now. We will use this property to save the instance of the Player class that we'll create it in the next iteration.
//         this.height = 600;
//         this.width = 500;
//         this.obstacles = [];
//         // ↑ an empty array. We'll use it to store the obstacle instances we create later.
//         this.score = 0;
//         this.lives = 3;
//         this.gameIsOver = false;
//         // ↑ a flag used to track whether the game is over. Set the initial value to false.
//         this.gameIntervalId;
//         // ↑ a variable used to store the id of the interval running the game loop. We store and use this id to clear the interval once the game is over.gameIntervalId
//         this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
//         // ↑ gameLoopFrecuency - a number that indicates the interval in milliseconds at which the game loop will execute. A good value for most screens is 1000/60, which equates to the the game being updated every ~17 millisecond, or about 60 times per second (60fps).
//     }