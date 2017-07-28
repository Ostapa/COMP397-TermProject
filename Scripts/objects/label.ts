module objects {
    // label class
    export class Label extends createjs.Text {
        constructor(labelText:string, fontFamily:string, fontColour:string, x:number, y:number) {
            super(labelText, fontFamily, fontColour);
            this.regX = this.getBounds().width * .5;
            this.regY = this.getBounds().height * .5;
            this.x = x;
            this.y = y;;
        }
    }
}