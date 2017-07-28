var Scenes;
(function (Scenes) {
    function start() {
        scene = new createjs.Container;
        startButton = new objects.Button("../Assets/Buttons/startBtn.png", 260, 240);
        scene.addChild(startButton);
        stage.addChild(scene);
    }
    Scenes.start = start;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=startScene.js.map