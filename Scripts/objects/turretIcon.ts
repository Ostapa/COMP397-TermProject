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
         
        constructor(imageUrl:string, x:number, y:number, regX:number, regY:number) {
            super(turretTexture, imageUrl);
            this.x = x;
            this.y = y;
            this.regX = (regX - (this.getBounds().width/2)) / 2;
            this.regY = regY;
        }   

     }
 }