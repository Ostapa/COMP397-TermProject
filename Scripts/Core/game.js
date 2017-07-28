/// <reference path = "_references.ts"/>
// GLOBAL GAME FRAMEWORK VARIABLES
var canvas;
var stage;
var state;
var scene;
var stateFunction; // alias for our current state
// Game Variables
var startButton;
var stateFunction; // alias for our current state
function init() {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    state = config.MENU_STATE;
    changeState();
}
// Main Game Loop
function gameLoop(event) {
    stage.update(); // redraw/refresh stage every frame
}
// Callback function / Event Handler for Start Button Click
function clickStartButton(event) {
}
// state machine prep
function changeState() {
    // Launch various scenes
    switch (state) {
        case config.MENU_STATE:
            stateFunction = Scenes.start;
        case config.PLAY_STATE:
            // show the play scene
            break;
        case config.OVER_STATE:
            // show the game over scene
            break;
    }
    stateFunction();
}
//# sourceMappingURL=game.js.map