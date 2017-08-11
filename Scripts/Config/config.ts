module config {
    // State Constants
    export class Scene {
        public static START_SCENE: number = 0;
        public static CONTROLS_SCENE: number = 1;
        public static GAME_SCENE: number = 2;
        public static OVER_SCENE: number = 3;
        public static PAUSE_SCENE: number = 4;
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

    // Zombie Direction
    export class Direction {
        public static UP = 0;
        public static RIGHT = 1;
        public static DOWN = 2;
        public static LEFT = 3;
    }
}

