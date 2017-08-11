module objects {
    // button class
    export class Bullet extends createjs.Sprite {
        // private instance variables
        private _type: string;
        public damage: number;

        // constructor
        constructor(path: string, x:number, y: number) {
            super(textureSprite, path);
            this.x = x;
            this.y = y;
        }


    }
}