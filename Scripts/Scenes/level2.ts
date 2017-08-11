module Scenes {
    export class Level2 extends Scenes.GameScene {
        // Constructor
        constructor() {
            super("mapOne", "levelOne_s");
            if(!this.onPause) {
                this.start();
            }
        }
    }
}