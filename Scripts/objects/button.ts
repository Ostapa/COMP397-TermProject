module objects {
    // button class
    export class Button extends createjs.Bitmap {
        // private instance variables
        width:number;
        height:number;

        // constructor
        constructor(path:string, x:number, y:number) {
            super(path);
            this.x = x;
            this.y = y;

            this.width = 150;
            this.height = 50;

            this.regX = this.width * .5;
            this.regY = this.height * .5;

            this.on("mouseover", this.overBtn, this);
            this.on("mouseout", this.outBtn, this);
        }

        // private methods
        overBtn(event:createjs.MouseEvent):void {
            event.currentTarget.alpha = .7;
        }

        outBtn(event:createjs.MouseEvent):void {
            event.currentTarget.alpha = 1;
        }
    }

}