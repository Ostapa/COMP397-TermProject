module objects {
    // button class
    export class Button extends createjs.Bitmap {
        // private instance variables
        public width:number;
        public height:number;
        public clickSound:createjs.AbstractSoundInstance;
        

        // constructor
        constructor(path:string, x:number, y:number) {
            super(assets.getResult(path));
            this.x = x;
            this.y = y;

            this.width = 150;
            this.height = 50;

            this.regX = this.width * .5;
            this.regY = this.height * .5;

            this.on("mouseover", this.overBtn, this);
            this.on("mouseout", this.outBtn, this);
            this.cursor = "pointer";

            this.on("click", this._button_Click, this);
        }

        // private methods
        overBtn(event:createjs.MouseEvent):void {
            event.currentTarget.alpha = .7;
        }

        outBtn(event:createjs.MouseEvent):void {
            event.currentTarget.alpha = 1;
        }

        private _button_Click(event:MouseEvent) {
            this.clickSound = createjs.Sound.play("click");
        }
    }

}