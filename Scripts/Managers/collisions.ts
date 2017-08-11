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

        public check(bullet:objects.Bullet, zombie:objects.Zombie):boolean {
            return true;
        }

     }

 }

