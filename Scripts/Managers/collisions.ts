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

        public check(object1:objects.Zombie, object2:objects.Bullet):boolean {
            console.log(objects.Vector.calcDistance(object1.position, object2.position));
            
            if(objects.Vector.calcDistance(object1.position, object2.position) <= 20) {
                return true;
            }
        }
        

     }

 }

