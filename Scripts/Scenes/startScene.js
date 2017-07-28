var Scenes;
(function (Scenes) {
    function start() {
        scene = new createjs.Container;
        var background = new createjs.Bitmap("../Assets/Images/gameBackground.png");
        startButton = new objects.Button("../Assets/Buttons/startBtn.png", 260, 240);
        scene.addChild(background);
        scene.addChild(startButton);
        stage.addChild(scene);
    }
    Scenes.start = start;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=startScene.js.map