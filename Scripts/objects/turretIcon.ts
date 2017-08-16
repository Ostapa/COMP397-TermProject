/**
 * @file turretIcon.ts
 * @author Ostap Hamarnyk
 * @date August 10 2017
 * @version 0.1
 * @description The class defines a four circles with the four types of the turrets.
 */

 module objects {
    export class TurretIcon extends createjs.Sprite {
        
        // public instance variables 
        public turretType:string;
        private _name:string;
         
        constructor(imageUrl:string, x:number, y:number) {
            super(turretTexture, imageUrl);
            this.x = x;
            this.y = y;
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.start();
        }   

        public start():void {
            this.on("mouseover", this._icon_MouseOver, this)
            this.on("mouseout", this._icon_MouseOut, this)
            
        }


        private _icon_MouseOver(event:createjs.MouseEvent) {
            this.alpha = .6;
        }

        private _icon_MouseOut(event:createjs.MouseEvent) {
            this.alpha = 1;
        }

     }
 }