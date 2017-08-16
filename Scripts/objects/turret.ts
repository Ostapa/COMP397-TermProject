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
        public turretType:string;
        private _turretLvl:number;
        private _gun:objects.Gun;
        private _range:createjs.Shape;
        private _shootingRange:number;
        private _angle:number;
        private _currentTime:number;
        public _bullet:objects.Bullet;
        public zombieToFollow:objects.Zombie;
        private _collision:Managers.Collision;
        private _bTime = createjs.Ticker.getTime();
        

        // public instance variables
        public width:number;
        public height:number;
        public damage:number;
        public position:objects.Vector;
        
        // Constructor
        constructor(turretName:string,turretType:string, x:number, y:number) {
            super(turretTexture, turretName);
            this._turretName = turretName;
            this.x = x;
            this.y = y;
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.turretType = turretType;
            this.start();
            this._range.graphics.drawCircle(this.x, this.y, this.getBounds().width + 30);
            this.position = new objects.Vector(this.x, this.y);
            this._turretLvl = 1; // TODO: change this dynamically
            this._shootingRange = this.getBounds().width + 40;
            this._collision = new Managers.Collision();
        }

        public start():void {
            switch(this.turretType) {
                // public chooseBullet(turret:objects.Turret):string {
        //     switch(turret.turretType) {
        //         case "Electro":
        //             return "electroBullet1"
        //         case "Fire":
        //             return "electroBullet3"
        //         case "Gun":
        //             return "gunBullet3"
        //         case "Rocket":
        //             return "gunBullet1"
        //     }
        // }
                case "Gun":
                    this._gun = new objects.Gun("gun", this.x, this.y)
                    this.damage = 3;
                    this._bullet = new objects.Bullet("gunBullet3", this.x, this.y)
                    break;
                case "Fire":
                    this._gun = new objects.Gun("fireGun", this.x, this.y)
                    this.damage = 5;
                    this._bullet = new objects.Bullet("electroBullet3", this.x, this.y)
                    break;
                case "Rocket":
                    this._gun = new objects.Gun("rocketGun", this.x, this.y)
                    this.damage = 10;
                    this._bullet = new objects.Bullet("gunBullet1", this.x, this.y)
                    break;
                case "Electro":
                    this._gun = new objects.Gun("electroGun", this.x, this.y)
                    this.damage = 7;
                    this._bullet = new objects.Bullet("electroBullt1", this.x, this.y)
                    break;
            }
            this._range = new createjs.Shape();
            this._range.graphics.beginFill("#98FB98");
            this._range.alpha = .4;
            this._range.graphics.beginStroke("#1db81d");
            this._range.visible = false;
            this._currentTime = createjs.Ticker.getTime();
            
            // event listeners
            stage.on("click", this._stage_Click, this);
            this._gun.on("click", this._gun_Click, this);

        }

        public update():void {
            gameScene.addChild(this._gun, this._range);
        }

        // method shoot a bullet in the specified direction
        public shoot(targetX:number, targetY:number):void {
            if(createjs.Ticker.getTime() > this._bTime + 500) {
                gameScene.removeChild(this._bullet)
                this._bullet = new objects.Bullet("electroBullet1", this.x, this.y )
                gameScene.addChild(this._bullet);
                createjs.Tween.get(this._bullet).to({x:targetX, y:targetY}, 500, createjs.Ease.linear);
                this._bTime = createjs.Ticker.getTime();
                this.update();
                console.log(this._bullet.position);
            }
            if(this._collision.check(this.zombieToFollow, this._bullet)) {
                gameScene.removeChild(this._bullet)
                this.zombieToFollow.health -= this.damage;
                this.zombieToFollow.update();
            }
        }

        public calculateAngle():void {
            this._angle = Math.atan2(this.zombieToFollow.y - this._gun.y, this.zombieToFollow.x - this._gun.x)
            this._angle = this._angle * (180/Math.PI);
            // this if statement is to set angle to (0 - 360) instead of (-180 - 180)
            if(this._angle < 0)  {
                this._angle = 360 - ( - this._angle);
            }
            this._gun.rotation = this._angle + 90;
        }

        // method to calculate if the zombie is in the shooting range of the turret
        public inRange(object2:objects.Zombie):boolean {
            if(objects.Vector.calcDistance(this.position, object2.position) < this._shootingRange) {
                return true;
            }
        }
        private _reset():void {

        }

        // Event handlers
        private _gun_Click(event:createjs.MouseEvent) {
            this._range.visible = true;
            gameScene.updateInfo(this.turretType + " Turret", this._turretLvl, this.damage);
        }

        private _stage_Click(event:createjs.MouseEvent) {
            if(event.target != this._gun) {
                this._range.visible = false;
            } 
        }

        
    }
}