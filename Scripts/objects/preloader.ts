module objects {
    export class Preloader extends createjs.Container {
        // private instance variables
        private _fillColor:string;
        private _strokeColor:string;
        private _bar:createjs.Shape;
        private _outline:createjs.Shape;
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
            this._outline.graphics.beginFill(this._strokeColor);
            this._outline.graphics.drawRect(0,0, this.width, this.height);
            this._bar = new createjs.Shape();
            this._bar.graphics.beginFill(this._fillColor);
            this._bar.graphics.drawRect(0,0, this.width, this.height);
            this._bar.scaleX = 0;
            this.addChild(this._outline, this._bar);
        }
        public update(percents:number):void {
            percents = percents > 1 ? 1 : percents;
            this._bar.scaleX = percents;
        }
    }
}