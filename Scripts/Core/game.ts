/// <reference path = "_references.ts"/>

// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stateFunction: any; // alias for our current state
var assets: createjs.LoadQueue;

// Game Variables
var currentScene: objects.Scene; // alias for our current state
var scene:number;

// Game Scenes
var startScene:Scenes.StartScene;
var controlsScene:Scenes.ControlsScene;
var gameScene:Scenes.GameScene;

var assetData:objects.Asset[] = [
    {id:"playBtn", src:"../../Assets/Buttons/startBtn.png"},
    {id:"initBackground", src:"../../Assets/Images/gameBackground.png"},
];
// function to preload assets
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);

}

function init():void {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(config.Game.FPS); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    scene = config.Scene.START_SCENE;
    changeScene();
}


// Main Game Loop
function gameLoop(event: createjs.TickerEvent): void {
    currentScene.update();
    stage.update(); // redraw/refresh stage every frame
}

// state machine prep
function changeScene(): void {
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
