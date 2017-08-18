module objects {
    export class Preloader extends createjs.Container {
        // private instance variables
        private _fillColor:string;
        private _strokeColor:string;
        private _bar:createjs.Shape;
        private _outline:createjs.Shape;
        private _logo:createjs.Bitmap;
        private _percentage:createjs.Text;

        public width:number = 400;
        public height:number = 40;

        
        constructor(fillColor:string, strokeColor:string) {
            super();
            this._fillColor = fillColor;
            this._strokeColor = strokeColor;
            this.drawBar();
        }

        public drawBar():void{
            this._outline = new createjs.Shape();
            this._outline.graphics.beginFill("#000");
            this._outline.graphics.drawRect(0,0, this.width, this.height);
            this._bar = new createjs.Shape();
            this._bar.graphics.beginFill(this._fillColor);
            this._bar.graphics.drawRect(0,0, this.width, this.height);
            this._bar.scaleX = 0;
            this._logo = new createjs.Bitmap("../../Assets/Images/logo.png");
            this._logo.x =  130;
            this._logo.y = -175;
            this._percentage = new createjs.Text("0 %", "25px Arial", "#000");
            this._percentage.y = 5;
            this._percentage.x = 175;
            this.addChild(this._outline, this._bar, this._logo, this._percentage);
        }
        public update(percents:number):void {
            percents = percents > 1 ? 1 : percents;
            this._bar.scaleX = percents;
            this._percentage.text = (percents*100).toFixed(0).toString() + " %";
        }
    }
}