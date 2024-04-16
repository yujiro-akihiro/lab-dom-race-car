// BONUS - Iteration 9
// Inheritance from superclass 'Component' in component.js
class Obstacle extends Component {
    constructor(gameScreen) {
        super(
            gameScreen,
            Math.floor(Math.random() * 300 + 70),
            0,
            100,
            150,
            "./images/redCar.png"
        );
    }

    move() {
        // Move the obstacle down by 3px
        this.top += 3;
        // Update the obstacle's position on the screen
        this.updatePosition();
    }

}






// // !!! Code before iteration 9
// class Obstacle {
//     constructor(gameScreen) {
//         this.gameScreen = gameScreen;
//         this.left = Math.floor(Math.random() * 300 + 70);
//         this.top = 0;
//         this.width = 100;
//         this.height = 150;
//         this.element = document.createElement("img");

//         this.element.src = "./images/redCar.png";
//         this.element.style.position = "absolute";
//         this.element.style.width = `${this.width}px`;
//         this.element.style.height = `${this.height}px`;
//         this.element.style.left = `${this.left}px`;
//         this.element.style.top = `${this.top}px`;

//         this.gameScreen.appendChild(this.element);
//     }

//     updatePosition() {
//         // Update the obstacle's position based on the properties left and top
//         this.element.style.left = `${this.left}px`;
//         this.element.style.top = `${this.top}px`;
//     }

//     move() {
//         // Move the obstacle down by 3px
//         this.top += 3;
//         // Update the obstacle's position on the screen
//         this.updatePosition();
//     }
// }

// - [ ] The Obstacle class should have the following properties defined in the constructor:
//     - [ ] gameScreen - the game screen element passed as an argument to the constructor.
//     - [ ] left - randomly generated number representing the horizontal position of the car.
//     - [ ] top - the initial vertical position of the obstacle. We will set it to 0.
//     - [ ] width - the width of the obstacle element. We will set it to 100.
//     - [ ] height - the height of the obstacle element. We will set it to 150.
//     - [ ] element - the image element that represents the obstacle car. We will use the image of the red car available in the images/ folder.