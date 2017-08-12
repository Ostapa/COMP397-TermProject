/**
 * @file collisions.ts
 * @author Ostap Hamarnyk
 * @date August 11 2017
 * @version 0.3
 * @description The collisions class to manage game collisions. 
 */

 module Managers {
     export class Collision {
        constructor() {
            this.start();
        }

        public start():void {

        }

        public checkRange(object1:objects.Bullet, object2:objects.Zombie, range:number):boolean {
            if(objects.Vector.calcDistance(object1.position, object2.position) < range) {
                return true;
            }
        }

        public check(object1:objects.Bullet, object2:objects.Zombie):boolean {
            return object1.hitTest(object2.x, object2.y);
        }

     }

 }

