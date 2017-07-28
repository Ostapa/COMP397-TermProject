module config {
    // State Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var OVER_STATE: number = 2;

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

