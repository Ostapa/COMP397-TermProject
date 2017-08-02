/// <reference path = "_references.ts"/>
// GLOBAL GAME FRAMEWORK VARIABLES
var canvas;
var stage;
var stateFunction; // alias for our current state
var assets;
// Game Variables
var currentScene; // alias for our current state
var scene;
// Game Scenes
var startScene;
var controlsScene;
var gameScene;
var assetData = [
    { id: "playBtn", src: "../../Assets/Buttons/startBtn.png" },
    { id: "initBackground", src: "../../Assets/Images/gameBackground.png" },
];
// function to preload assets
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(config.Game.FPS); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    scene = config.Scene.START_SCENE;
    changeScene();
}
// Main Game Loop
function gameLoop(event) {
    currentScene.update();
    stage.update(); // redraw/refresh stage every frame
}
// state machine prep
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.START_SCENE:
            stage.removeAllChildren();
            startScene = new Scenes.StartScene();
            currentScene = startScene;
            break;
        case config.Scene.CONTROLS_SCENE:
            stage.removeAllChildren();
            controlsScene = new Scenes.ControlsScene();
            currentScene = controlsScene;
            break;
        case config.Scene.GAME_SCENE:
            stage.removeAllChildren();
            gameScene = new Scenes.GameScene();
            currentScene = gameScene;
            break;
    }
}
//# sourceMappingURL=game.js.map