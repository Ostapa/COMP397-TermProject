module objects {
    // button class
    export class Bullet extends createjs.Bitmap {
        // private instance variables
        private _type: string;
        public damage: number;

        // constructor
        constructor(path: string, x:number, y: number) {
            super(assets.getResult(path));
            this.x = x;
            this.y = y;
        }
       public update():void{
        

       }

    }
}