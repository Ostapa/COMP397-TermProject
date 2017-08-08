module objects {
    export class Zombie extends createjs.Sprite {

        // private instance variables 

        // public instance variables
        public width:number;
        public height:number;
        public zombieName:string;

        constructor(zombieName:string, x:number, y:number) {
            super(textureSprite, zombieName);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = x;
            this.y = y;
            this.zombieName = zombieName;
        }

        public move(direction:number, destination:number):void {
            switch(direction) {
                case 0:
                    createjs.Tween.get(this).to({y:destination}, 10000);
                    break;
                case 2:
                    createjs.Tween.get(this).to({y:destination}, 10000);
                    break;
                case 1:
                    createjs.Tween.get(this).to({x: destination}, 10000);
                    break;
                case 3:
                    createjs.Tween.get(this).to({x: destination}, 10000);
                    break;
            }
        }
    }
} 