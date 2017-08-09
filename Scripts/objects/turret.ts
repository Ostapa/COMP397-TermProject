/**
 * @file turret.ts
 * @author Ostap Hamarnyk
 * @date August 9 2017
 * @version 0.1
 * @description The class that has generic properties of the turret
 */
module objects {
    export class Turret extends createjs.Shape {
        // private instance variables
        private _turretName:string;

        // public instance variables
        public width:number;
        public height:number;
        
        // Constructor
        constructor(turretName:string, regX:number, regY:number) {
            //super(textureSprite, turretName);
            
            super();
            this._turretName = turretName;
            this.regX = regX;
            this.regY = regY;
            this.start();
        }

        public start():void {
            
        }

        public update():void {
            
        }
    }
}