module config {
    // State Constants
    export class Scene {
        public static START_SCENE: number = 0;
        public static CONTROLS_SCENE: number = 1;
        public static GAME_SCENE: number = 2;
    }

    // Screen Constants
    export class Screen {
        public static WIDTH:number = 640;
        public static HEIGHT:number = 480;
        public static CENTER_X:number = 320;
        public static CENTER_Y:number = 240;
    }
    // Game Constants
    export class Game {
        public static FPS:number = 60;
    }
}

