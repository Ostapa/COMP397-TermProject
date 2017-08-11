/**
 * @file turretArea.ts
 * @author Ostap Hamarnyk
 * @date August 10 2017
 * @version 0.1
 * @description The class defines a placeholder for the turrets.
 */

 module objects {
     //export class TurretArea extends createjs.Sprite {
     export class TurretArea extends createjs.Bitmap {

        // private instance variables
        private _fireTurret:objects.TurretIcon;
        private _gunTurret:objects.TurretIcon;
        private _electroTurret:objects.TurretIcon;
        private _bombTurret:objects.TurretIcon;
        

        constructor(imageUrl:string, x:number, y:number) {
            super(assets.getResult(imageUrl));
            this.x = x;
            this.y = y;
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.start();
        }

        public start():void {
            this._gunTurret = new objects.TurretIcon("gunOne", this.x, this.y, this.regX, this.regY);
            this._fireTurret = new objects.TurretIcon("gunOne", this.x, this.y, this.regX, this.regY);
            this._electroTurret = new objects.TurretIcon("gunOne", this.x, this.y, this.regX, this.regY);
            this._bombTurret = new objects.TurretIcon("gunOne", this.x, this.y, this.regX, this.regY);

            this.on("click", this._turretArea_Click, this);
        }

        public showOptions():void {
            gameScene.addChild(this._bombTurret, this._electroTurret, this._fireTurret, this._gunTurret);
            createjs.Tween.get(this._gunTurret).to({x:this.x + 30, y:this.y + 30}, 500, createjs.Ease.linear);
            createjs.Tween.get(this._fireTurret).to({x:this.x + 30, y:this.y - 30}, 500, createjs.Ease.linear);
            createjs.Tween.get(this._electroTurret).to({x:this.x - 30, y:this.y - 30}, 500, createjs.Ease.linear);
            createjs.Tween.get(this._bombTurret).to({x:this.x - 30, y:this.y + 30}, 500, createjs.Ease.linear);
        }

        private _turretArea_Click(event:createjs.MouseEvent) {
            this.showOptions();
        }

        
     }
     
 }