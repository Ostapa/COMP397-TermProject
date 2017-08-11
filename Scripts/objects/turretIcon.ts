/**
 * @file turretArea.ts
 * @author Ostap Hamarnyk
 * @date August 10 2017
 * @version 0.1
 * @description The class defines a placeholder for the turrets.
 */

 module objects {
     // export class TurretIcon extends createjs.Sprite {
     export class TurretIcon extends createjs.Bitmap {
        constructor(imageUrl:string, x:number, y:number, regX:number, regY:number) {
            super(assets.getResult("gunOne"));
            this.x = x;
            this.y = y;
            this.regX = (regX - (this.getBounds().width/2)) / 2;
            this.regY = regY;
        }   
     }
 }