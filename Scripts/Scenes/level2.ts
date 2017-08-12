module Scenes {
    export class Level2 extends Scenes.GameScene {
        // Constructor
        private _label:objects.Label;
        constructor() {
            super("mapTwo", "levelOne_s");
            if(!this.onPause) {
                this.start();
            }

            
        }
        public start():void {
            this._label = new objects.Label("LEVEL 2", "60px Arial", "#c6bf9c", 0, config.Screen.CENTER_Y)
            this.addChild(this._label);
            createjs.Tween.get(this._label).to({x:config.Screen.WIDTH + this._label.getBounds().width}, 3000, createjs.Ease.linear)
        }

        public update():void {

        }
    }
}