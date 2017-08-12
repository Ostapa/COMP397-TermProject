module Scenes {
    export class Level2 extends Scenes.GameScene {
        // Constructor
        constructor() {
            super("mapTwo", "levelOne_s");
            if(!this.onPause) {
                this.start();
            }
        }
    }
}