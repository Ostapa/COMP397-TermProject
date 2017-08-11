/**
 * @file turret.ts
 * @author Ostap Hamarnyk
 * @date August 9 2017
 * @version 0.1
 * @description The class that has generic properties of the turret
 */
module objects {
    export class Turret extends createjs.Sprite {
        //private instance variables
        private _turretName:string;
        protected fireRange:number = 60;
        

        // public instance variables
        public width:number;
        public height:number;
        
        // Constructor
        constructor(turretName:string, x:number, y:number) {
            super(textureSprite, turretName);
            
            this._turretName = turretName;
            this.x = x;
            this.y = y;
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.start();
        }

        public start():void {

        }

        public update():void {
            
        }

        // method tp calculate if the zombie is in the shooting range of the turret
        public inRange(zombie:objects.Zombie):boolean {
            var distance = Math.pow(zombie.x - this.x, 2) + Math.pow(zombie.y - this.y, 2);
            if(Math.pow(this.fireRange, 2) >= distance) {
                return true;
            } else return false;
        }

        private _reset():void {
            
        }
    }
}