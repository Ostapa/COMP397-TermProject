/// <reference path = "_references.ts"/>

// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stateFunction: any; // alias for our current state
var assets: createjs.LoadQueue;

// Game Variables
var currentScene: objects.Scene; // alias for our current state
var scene:number;
var preloader:objects.Preloader;
var backgroundSound:createjs.AbstractSoundInstance;
var textureSprite:createjs.SpriteSheet;
var turretTexture:createjs.SpriteSheet;


//Game Bullets

// var bullet:createjs.Bitmap;


// Game Scenes
var startScene:Scenes.StartScene;
var controlsScene:Scenes.ControlsScene;
var gameScene:Scenes.GameScene;
var overScene:Scenes.OverScene;

var turretSprite = {
    "images": [
        "../../Assets/Images/turretsSprite.png"
    ],
    
    "frames": [
        [1, 1, 60, 60, 0, 0, 0],
        [1, 63, 60, 60, 0, 0, 0],
        [1, 125, 50, 50, 0, 0, 0],
        [53, 125, 8, 15, 0, 0, 0],
        [53, 142, 8, 15, 0, 0, 0],
        [53, 159, 6, 15, 0, 0, 0],
        [1, 177, 50, 50, 0, 0, 0],
        [1, 229, 50, 50, 0, 0, 0],
        [1, 281, 50, 50, 0, 0, 0],
        [1, 333, 25, 69, 0, 0, 0],
        [28, 333, 34, 35, 0, 0, 0],
        [28, 370, 15, 60, 0, 0, 0],
        [1, 404, 24, 38, 0, 0, 0],
        [45, 370, 12, 60, 0, 0, 0],
        [27, 432, 25, 26, 0, 0, 0],
        [1, 444, 15, 16, 0, 0, 0]
    ],
    
    "animations": {
        "turretArea": { "frames": [0] },
        "turretBase": { "frames": [1] },
        "electro": { "frames": [2] },
        "gunBullet1": { "frames": [3] },
        "gunBullet2": { "frames": [4] },
        "gunBullet3": { "frames": [5] },
        "fire": { "frames": [6] },
        "gunIcon": { "frames": [7] },
        "rocket": { "frames": [8] },
        "rocketGun": { "frames": [9] },
        "electroBullet3": { "frames": [10] },
        "fireGun": { "frames": [11] },
        "gun": { "frames": [12] },
        "electroGun": { "frames": [13] },
        "electroBullet2": { "frames": [14] },
        "electroBullet1": { "frames": [15] }
    }
}

var zombieSprite = {
    "images": [
        "../../Assets/Images/zombies.png"
    ],
    "frames": [
        [1, 1, 23, 31, 0, 0, 0],
        [26, 1, 23, 31, 0, 0, 0],
        [51, 1, 23, 31, 0, 0, 0],
        [76, 1, 20, 31, 0, 0, 0],
        [98, 1, 20, 31, 0, 0, 0],
        [120, 1, 20, 31, 0, 0, 0],
        [142, 1, 23, 31, 0, 0, 0],
        [167, 1, 23, 31, 0, 0, 0],
        [1, 34, 23, 31, 0, 0, 0],
        [26, 34, 23, 31, 0, 0, 0],
        [51, 34, 21, 31, 0, 0, 0],
        [74, 34, 22, 31, 0, 0, 0],
        [98, 34, 22, 31, 0, 0, 0],
        [122, 34, 21, 31, 0, 0, 0],
        [145, 34, 23, 31, 0, 0, 0],
        [170, 34, 20, 32, 0, 0, 0],
        [1, 67, 23, 31, 0, 0, 0],
        [26, 67, 20, 32, 0, 0, 0],
        [48, 67, 20, 32, 0, 0, 0],
        [70, 67, 23, 32, 0, 0, 0],
        [95, 67, 21, 32, 0, 0, 0],
        [118, 67, 21, 32, 0, 0, 0],
        [141, 67, 23, 32, 0, 0, 0],
        [166, 68, 23, 33, 0, 0, 0]
    ],
    "animations": {
        "mumblerDown": { 
            "frames": [0, 1, 2],
            "speed": 0.07,
        },
        "mumblerLeft": { "frames": [3, 15, 4],
            "speed": 0.07 },
        "mumblerRight": { "frames": [5, 17, 18],
            "speed": 0.07 },
        "mumblerUp": { "frames": [6, 23, 7],
            "speed": 0.07 },
        "walkerDown": { "frames": [8, 19, 9],
            "speed": 0.07 },
        "walkerLeft": { "frames": [10, 20, 11],
            "speed": 0.07 },
        "walkerRight": { "frames": [12, 21, 13],
            "speed": 0.07 },
        "walkerUp": { "frames": [14, 22, 16],
            "speed": 0.07 }
    }
};

var assetData:objects.Asset[] = [
    {id:"playBtn", src:"../../Assets/Buttons/playBtn.png"},
    {id:"instructionsBtn", src:"../../Assets/Buttons/instructionsBtn.png"},
    {id:"mouseIconLeft", src:"../../Assets/Images/mouseIconLeft.png"},
    {id:"backBtn", src:"../../Assets/Buttons/backBtn.png"},
    {id:"continueBtn", src:"../../Assets/Buttons/continueBtn.png"},
    {id:"muteBtn", src:"../../Assets/Buttons/muteBtn.png"},
    {id:"restartBtn", src:"../../Assets/Buttons/restartBtn.png"},
    {id:"exitBtn", src:"../../Assets/Buttons/exitBtn.png"},
    {id:"mainMenuBtn", src:"../../Assets/Buttons/mainMenuBtn.png"},
    {id:"runWave", src:"../../Assets/Buttons/runWave.png"},
    {id:"gameTitle", src:"../../Assets/Images/Title.png"},
    {id:"logo", src:"../../Assets/Images/logo.png"},
    {id:"cash", src:"../../Assets/Images/cash.png"},
    {id:"heart", src:"../../Assets/Images/heart.png"},
    {id:"marker", src:"../../Assets/Images/marker.png"},
    {id:"settings", src:"../../Assets/Images/Settings.png"},
    {id:"initBackground", src:"../../Assets/Images/gameBackground.png"},
    {id:"instructionsBackground", src:"../../Assets/Images/instructionsBackground.png"},
    {id:"settingsBackground", src:"../../Assets/Images/settingsBackground.png"},
    {id:"bullet", src:"../../Assets/Images/oneBullet.png"},
    {id:"mapOne", src:"../../Assets/Maps/map_level_1.jpeg"},
    {id:"mapTwo", src:"../../Assets/Maps/map_level_2.jpg"},
    {id:"backSound", src:"../../Assets/Sounds/background.ogg"},
    {id:"backSound1", src:"../../Assets/Sounds/background1.ogg"},
    {id:"backSound2", src:"../../Assets/Sounds/background2.ogg"},
    {id:"backSound3", src:"../../Assets/Sounds/background3.ogg"},
    {id:"upgradeBtn", src:"../../Assets/Images/upgrade.png"},
    {id:"click", src:"../../Assets/Sounds/click.ogg"},
    {id:"siren", src:"../../Assets/Sounds/siren.ogg"},
    {id:"gunShot", src:"../../Assets/Sounds/gunShot.ogg"},
    {id:"electroShot", src:"../../Assets/Sounds/electroShot.ogg"},
    {id:"construction", src:"../../Assets/Sounds/construction.ogg"},
    {id:"boss", src:"../../Assets/Images/Zombies/bossDown_1.png"}
];
// function to preload assets
function init():void {
    textureSprite = new createjs.SpriteSheet(zombieSprite);
    turretTexture = new createjs.SpriteSheet(turretSprite);
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(config.Game.FPS); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    scene = config.Scene.START_SCENE;
    changeScene();
    this.backgroundSound = createjs.Sound.play("backSound");
    this.backgroundSound.loop = -1;

}
function preload() {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    preloader = new objects.Preloader("#4c6051", "#000");
    preloader.x = (config.Screen.WIDTH / 2) - (preloader.width / 2);
    preloader.y = (config.Screen.HEIGHT / 2) - (preloader.height / 2);
    assets.on("progress", updatePreload, this);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
    stage.addChild(preloader);
}

function updatePreload():void {
    preloader.update(assets.progress);
    stage.update();
    
}

// Main Game Loop
function gameLoop(event: createjs.TickerEvent): void {
    if(!this.onPause) {
        currentScene.update();
        stage.update(); // redraw/refresh stage every frame
    }
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
        case config.Scene.LEVEL_1:
            stage.removeAllChildren();
            gameScene = new Scenes.Level1();
            currentScene = gameScene;
            break;
        case config.Scene.LEVEL_2:
            stage.removeAllChildren();
            gameScene = new Scenes.Level2();
            currentScene = gameScene;
            break;
        case config.Scene.OVER_SCENE:
            stage.removeAllChildren();
            overScene = new Scenes.OverScene();
            currentScene = overScene;
            break;
    }
}
