module Scenes {
    export function start():void {
        scene = new createjs.Container;

        var background:any = new createjs.Bitmap("../Assets/Images/gameBackground.png");
        startButton = new objects.Button("../Assets/Buttons/startBtn.png", 260, 240);
        scene.addChild(background);
        scene.addChild(startButton);
        stage.addChild(scene);
    }
}