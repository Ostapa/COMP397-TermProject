module objects {
    export abstract class GameObject extends createjs.Sprite {
        
        private _position:Vector;
        private _height:number;
        private _width:number;

        get position(): Vector { return this._position; }
        set position(position: Vector) { this._position = position; }
        get width():number { return this._width; }
        set width(width:number) { this._width = width; }
        get height():number { return this._height; }
        set height(height:number) { this._height = height; }
        
        constructor(sprite:createjs.SpriteSheet, imgUrl:string ) {
            super(sprite, imgUrl)
            this.position = new Vector(this.x, this.y);
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
        }

        public start():void {

        }

        public update():void {

        }
    }
}