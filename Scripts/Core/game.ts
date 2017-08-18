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
var gameTexture:createjs.SpriteSheet;

// Game Scenes
var startScene:Scenes.StartScene;
var controlsScene:Scenes.ControlsScene;
var gameScene:Scenes.GameScene;
var overScene:Scenes.OverScene;
var wonScene:Scenes.WonScene;

var textureSprite = {
    "images": [
        "../../Assets/Images/textureSprite.png"
    ],
    "frames": [
        [1, 1, 60, 60, 0, 0, 0],
        [63, 1, 60, 60, 0, 0, 0],
        [1, 63, 50, 70, 0, 0, 0],
        [53, 63, 50, 70, 0, 0, 0],
        [105, 63, 15, 60, 0, 0, 0],
        [105, 125, 12, 60, 0, 0, 0],
        [119, 125, 8, 15, 0, 0, 0],
        [119, 142, 8, 15, 0, 0, 0],
        [119, 159, 6, 6, 0, 0, 0],
        [1, 135, 50, 67, 0, 0, 0],
        [53, 135, 50, 67, 0, 0, 0],
        [105, 187, 22, 31, 0, 0, 0],
        [1, 204, 52, 62, 0, 0, 0],
        [55, 204, 25, 69, 0, 0, 0],
        [82, 204, 21, 32, 0, 0, 0],
        [105, 220, 22, 31, 0, 0, 0],
        [82, 238, 21, 32, 0, 0, 0],
        [105, 253, 21, 32, 0, 0, 0],
        [82, 272, 21, 32, 0, 0, 0],
        [105, 287, 21, 32, 0, 0, 0],
        [1, 268, 50, 64, 0, 0, 0],
        [53, 275, 24, 38, 0, 0, 0],
        [79, 306, 23, 33, 0, 0, 0],
        [104, 321, 23, 32, 0, 0, 0],
        [53, 315, 24, 31, 0, 0, 0],
        [79, 341, 23, 32, 0, 0, 0],
        [104, 355, 23, 32, 0, 0, 0],
        [1, 334, 50, 62, 0, 0, 0],
        [53, 348, 24, 31, 0, 0, 0],
        [79, 375, 23, 32, 0, 0, 0],
        [104, 389, 23, 32, 0, 0, 0],
        [53, 381, 24, 31, 0, 0, 0],
        [79, 409, 23, 32, 0, 0, 0],
        [104, 423, 23, 31, 0, 0, 0],
        [1, 398, 50, 62, 0, 0, 0],
        [53, 414, 24, 31, 0, 0, 0],
        [79, 443, 23, 31, 0, 0, 0],
        [104, 456, 23, 31, 0, 0, 0],
        [53, 447, 23, 31, 0, 0, 0],
        [78, 476, 23, 31, 0, 0, 0],
        [103, 489, 23, 31, 0, 0, 0],
        [1, 462, 50, 60, 0, 0, 0],
        [53, 480, 23, 31, 0, 0, 0],
        [78, 509, 23, 31, 0, 0, 0],
        [53, 513, 23, 31, 0, 0, 0],
        [103, 522, 23, 31, 0, 0, 0],
        [78, 542, 23, 31, 0, 0, 0],
        [103, 555, 23, 31, 0, 0, 0],
        [1, 524, 50, 60, 0, 0, 0],
        [53, 546, 23, 31, 0, 0, 0],
        [78, 575, 21, 32, 0, 0, 0],
        [53, 579, 21, 31, 0, 0, 0],
        [101, 588, 26, 33, 0, 0, 0],
        [76, 609, 21, 31, 0, 0, 0],
        [99, 623, 28, 32, 0, 0, 0],
        [1, 586, 50, 50, 0, 0, 0],
        [53, 612, 21, 31, 0, 0, 0],
        [76, 642, 21, 31, 0, 0, 0],
        [99, 657, 28, 32, 0, 0, 0],
        [1, 638, 50, 50, 0, 0, 0],
        [53, 645, 21, 31, 0, 0, 0],
        [76, 675, 21, 31, 0, 0, 0],
        [53, 678, 21, 31, 0, 0, 0],
        [99, 691, 28, 31, 0, 0, 0],
        [76, 708, 20, 32, 0, 0, 0],
        [98, 724, 29, 32, 0, 0, 0],
        [1, 690, 50, 50, 0, 0, 0],
        [53, 711, 20, 32, 0, 0, 0],
        [75, 742, 20, 32, 0, 0, 0],
        [97, 758, 30, 32, 0, 0, 0],
        [1, 742, 50, 50, 0, 0, 0],
        [53, 745, 20, 31, 0, 0, 0],
        [75, 776, 20, 31, 0, 0, 0],
        [53, 778, 20, 31, 0, 0, 0],
        [97, 792, 30, 31, 0, 0, 0],
        [75, 809, 20, 31, 0, 0, 0],
        [97, 825, 30, 31, 0, 0, 0],
        [1, 794, 34, 35, 0, 0, 0],
        [37, 811, 29, 31, 0, 0, 0],
        [68, 842, 27, 31, 0, 0, 0],
        [97, 858, 29, 31, 0, 0, 0],
        [1, 831, 28, 31, 0, 0, 0],
        [31, 844, 27, 31, 0, 0, 0],
        [1, 864, 26, 31, 0, 0, 0],
        [60, 875, 26, 31, 0, 0, 0],
        [29, 877, 25, 32, 0, 0, 0],
        [1, 897, 25, 32, 0, 0, 0],
        [88, 891, 25, 32, 0, 0, 0],
        [56, 908, 25, 31, 0, 0, 0],
        [28, 911, 25, 31, 0, 0, 0],
        [1, 931, 25, 31, 0, 0, 0],
        [83, 925, 25, 31, 0, 0, 0],
        [110, 925, 15, 16, 0, 0, 0],
        [55, 941, 25, 31, 0, 0, 0],
        [28, 944, 25, 31, 0, 0, 0],
        [1, 964, 25, 26, 0, 0, 0],
        [55, 974, 52, 60, 0, 0, 0],
        [1, 992, 52, 60, 0, 0, 0],
        [55, 1036, 25, 25, 0, 0, 0],
        [1, 1054, 25, 23, 0, 0, 0],
        [28, 1054, 25, 23, 0, 0, 0],
        [82, 1036, 20, 31, 0, 0, 0],
        [104, 1036, 20, 31, 0, 0, 0]
    ],
    
    "animations": {
        "turretArea": { "frames": [0] },
        "turretBase": { "frames": [1] },
        "bossLeft": { "frames": [27, 2, 9] },
        "bossRight": { "frames": [34, 3, 10] },
        "fireGun": { "frames": [4] },
        "electroGun": { "frames": [5] },
        "gunBullet2": { "frames": [6] },
        "gunBullet3": { "frames": [7] },
        "gunBullet1": { "frames": [8] },
        "walkerLeft": { "frames": [57, 17, 11], "speed": 0.07 },
        "bossDown": { "frames": [96, 12, 97], "speed": 0.07  },
        "rocketGun": { "frames": [13] },
        "hurlerLeft": { "frames": [71, 14, 51], "speed": 0.07 },
        "walkerRight": { "frames": [15, 18, 60], "speed": 0.07 },
        "hurlerRight": { "frames": [53, 16, 56], "speed": 0.07 },
        "yelperLeft": { "frames": [101, 19, 61], "speed": 0.07 },
        "bossTop": { "frames": [41, 20, 48], "speed": 0.07 },
        "gun": { "frames": [21] },
        "mumblerTop": { "frames": [38, 22, 39], "speed": 0.07 },
        "chaserTop": { "frames": [88, 23, 24] , "speed": 0.07},
        "hurlerTop": { "frames": [94, 25, 35] , "speed": 0.07},
        "walkerDown": { "frames": [40, 26, 42], "speed": 0.07 },
        "grunterLeft": { "frames": [28, 85, 89], "speed": 0.07 },
        "walkerTop": { "frames": [43, 29, 44], "speed": 0.07 },
        "yelperDown": { "frames": [45, 30, 46], "speed": 0.07 },
        "grunterRight": { "frames": [31, 86, 90], "speed": 0.07 },
        "yelperTop": { "frames": [47, 32, 49], "speed": 0.07 },
        "mumblerDown": { "frames": [33, 36, 37], "speed": 0.07 },
        "yelperRight": { "frames": [102, 50, 62], "speed": 0.07 },
        "grunterDown": { "frames": [83,84, 52], "speed": 0.07 },
        "chaserDown": { "frames": [79, 54, 82], "speed": 0.07  },
        "electro": { "frames": [55] },
        "hurlerDown": { "frames": [63, 58, 81], "speed": 0.07 },
        "fire": { "frames": [59] },
        "mumblerLeft": { "frames": [72, 64, 73], "speed": 0.07 },
        "chaserLeft": { "frames": [78, 65, 80], "speed": 0.07 },
        "gunIcon": { "frames": [66] },
        "mumblerRight": { "frames": [75, 67, 68], "speed": 0.07 },
        "chaserRight": { "frames": [74, 69, 76], "speed": 0.07 },
        "rocket": { "frames": [70] },
        "electroBullet3": { "frames": [77] },
        "grunterTop": { "frames": [91, 87, 93], "speed": 0.07  },
        "electroBullet1": { "frames": [92] },
        "electroBullet2": { "frames": [95] },
        "sell": { "frames": [98] },
        "noUpgrade": { "frames": [99] },
        "upgrade": { "frames": [100] }
    }
}


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
    {id:"settings", src:"../../Assets/Images/Settings.png"},
    {id:"initBackground", src:"../../Assets/Images/gameBackground.png"},
    {id:"instructionsBackground", src:"../../Assets/Images/instructionsBackground.png"},
    {id:"settingsBackground", src:"../../Assets/Images/settingsBackground.png"},
    {id:"mapOne", src:"../../Assets/Maps/map_level_1.jpeg"},
    {id:"mapTwo", src:"../../Assets/Maps/map_level_2.jpg"},
    {id:"mapThree", src:"../../Assets/Maps/map_level_3.jpg"},
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
    {id:"boss", src:"../../Assets/Images/Zombies/bossDown_1.png"},
    {id:"sellBtn", src:"../../Assets/Images/sell.png"},
    {id:"noUpgradeBtn", src:"../../Assets/Images/noUpgrade.png"},
    {id:"zombieShort", src:"../../Assets/Sounds/zombieShort.ogg"}
];
// function to preload assets
function init():void {
    gameTexture = new createjs.SpriteSheet(textureSprite);
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
    preloader = new objects.Preloader("#7c0505", "#000");
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
        case config.Scene.LEVEL_3:
            stage.removeAllChildren();
            gameScene = new Scenes.Level3();
            currentScene = gameScene;
            break;
        case config.Scene.OVER_SCENE:
            stage.removeAllChildren();
            overScene = new Scenes.OverScene();
            currentScene = overScene;
            break;
        case config.Scene.WON:
            stage.removeAllChildren();
            wonScene = new Scenes.WonScene();
            currentScene = wonScene;
            break;
    }
}
