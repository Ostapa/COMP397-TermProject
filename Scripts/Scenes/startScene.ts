module Scenes {
    export function start():void {
        scene = new createjs.Container;

        startButton = new objects.Button("../Assets/Buttons/startBtn.png", 260, 240);
        scene.addChild(startButton);
        stage.addChild(scene);
    }
}