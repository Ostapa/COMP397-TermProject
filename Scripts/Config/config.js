var config;
(function (config) {
    // State Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.START_SCENE = 0;
        Scene.CONTROLS_SCENE = 1;
        Scene.GAME_SCENE = 2;
        Scene.OVER_SCENE = 3;
        return Scene;
    }());
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    }());
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
    // Zombie Direction
    var Direction = (function () {
        function Direction() {
        }
        Direction.UP = 0;
        Direction.RIGHT = 1;
        Direction.DOWN = 2;
        Direction.LEFT = 3;
        return Direction;
    }());
    config.Direction = Direction;
})(config || (config = {}));
//# sourceMappingURL=config.js.map