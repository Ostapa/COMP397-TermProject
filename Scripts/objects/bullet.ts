module objects {
    // button class
    export class Bullet extends createjs.Sprite {
        // private instance variables
        public position:Vector;
        public height:number;
        public width:number;
        // constructor
        constructor(path: string, x:number, y: number) {
            super(turretTexture, path);
            this.x = x;
            this.y = y;
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.position = new Vector(x, y);
        }
       public update():void{
            this.position = new Vector(this.x, this.y);
       }

    }
}