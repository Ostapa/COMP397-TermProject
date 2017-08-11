/**
 * @file turretArea.ts
 * @author Ostap Hamarnyk
 * @date August 10 2017
 * @version 0.1
 * @description The class defines a placeholder for the turrets.
 */

 module objects {
     //export class TurretArea extends createjs.Sprite {
     export class TurretArea extends createjs.Sprite {

        // public instance variables
        public notNull = false;
        // private instance variables
        private _fireTurret:objects.TurretIcon;
        private _gunTurret:objects.TurretIcon;
        private _electroTurret:objects.TurretIcon;
        private _rocketTurret:objects.TurretIcon;
        
        private _turret:objects.Turret;
        

        constructor(imageUrl:string, x:number, y:number) {
            super(turretTexture, imageUrl);
            this.x = x;
            this.y = y;
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.start();
        }

        public start():void {
            

            this._gunTurret = new objects.TurretIcon("gunIcon", this.x, this.y, this.regX, this.regY);
            this._fireTurret = new objects.TurretIcon("fire", this.x, this.y, this.regX, this.regY);
            this._electroTurret = new objects.TurretIcon("electro", this.x, this.y, this.regX, this.regY);
            this._rocketTurret = new objects.TurretIcon("rocket", this.x, this.y, this.regX, this.regY);

            // Event listeners
            this.on("click", this._turretArea_Click, this);
            this._electroTurret.on("click", this._electroTurret_Click, this);
            this._fireTurret.on("click", this._fireTurret_Click, this);
            this._gunTurret.on("click", this._gunTurret_Click, this)
            this._rocketTurret.on("click", this._rocketTurret_Click, this)
            

        }
        public update():objects.Turret {
            return this._turret;
        }

        public showOptions():void {
            
            gameScene.addChild(this._rocketTurret, this._electroTurret, this._fireTurret, this._gunTurret);
            createjs.Tween.get(this._gunTurret).to({x:this.x + 30, y:this.y + 30}, 500, createjs.Ease.linear);
            createjs.Tween.get(this._fireTurret).to({x:this.x + 30, y:this.y - 30}, 500, createjs.Ease.linear);
            createjs.Tween.get(this._electroTurret).to({x:this.x - 30, y:this.y - 30}, 500, createjs.Ease.linear);
            createjs.Tween.get(this._rocketTurret).to({x:this.x - 30, y:this.y + 30}, 500, createjs.Ease.linear);
        }

        private _turretArea_Click(event:createjs.MouseEvent) {
            this.showOptions();
        }

        private _electroTurret_Click(event:createjs.MouseEvent) {
            this._turret = new Turret("turretBase", this.x, this.y)
            gameScene.addChild(this._turret);
            this._turret.update()
            this._reset();
            this.notNull = true;
            
        }
        private _fireTurret_Click(event:createjs.MouseEvent) {
            this._turret = new Turret("turretBase", this.x, this.y)
            gameScene.addChild(this._turret);
            this._turret.update()
            this._reset();
            this.notNull = true;
            
        }
        private _gunTurret_Click(event:createjs.MouseEvent) {
            this._turret = new Turret("turretBase", this.x, this.y)
            gameScene.addChild(this._turret);
            this._turret.update()
            this._reset();
            this.notNull = true;
            
        }
        private _rocketTurret_Click(event:createjs.MouseEvent) {
            this._turret = new Turret("turretBase", this.x, this.y)
            gameScene.addChild(this._turret);
            this._turret.update()
            this._reset();
            this.notNull = true;
            
        }
        

        private _reset():void {
            gameScene.removeChild(this)
            // createjs.Tween.get(this._gunTurret).to({x:this.x + 30, y:this.y + 30}, 500, createjs.Ease.linear);
            // createjs.Tween.get(this._fireTurret).to({x:this.x + 30, y:this.y - 30}, 500, createjs.Ease.linear);
            // createjs.Tween.get(this._electroTurret).to({x:this.x - 30, y:this.y - 30}, 500, createjs.Ease.linear);
            // createjs.Tween.get(this._rocketTurret).to({x:this.x - 30, y:this.y + 30}, 500, createjs.Ease.linear);
            gameScene.removeChild(this._electroTurret, this._fireTurret, this._gunTurret, this._rocketTurret)
        }

        
     }
     
 }