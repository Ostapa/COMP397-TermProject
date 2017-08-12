/**
 * @file gun.ts
 * @author Ostap Hamarnyk
 * @date August 10 2017
 * @version 0.1
 * @description The class defines a gun which is placed on top of the turret base.
 */

 module objects {
     export class Gun extends createjs.Sprite {

        private _currentTime:number;

         constructor(imageUrl:string, x:number, y:number) {
             super(turretTexture, imageUrl);
             this.x = x;
             this.y = y;
             this.regX = this.getBounds().width / 2;
             this.regY = this.getBounds().height / 2;
             // depending on the type of gun, the bullets will differentiate
             this.start();
         }

         public start():void {
            this._currentTime = createjs.Ticker.getTime();            
         }

         public update():void {

         }

         


     }
 }