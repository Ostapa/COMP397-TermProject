/**
 * @file vector.ts
 * @author Ostap Hamarnyk
 * @date August 11 2017
 * @version 0.1
 * @description Class to define vector between two objects 
 */

 module objects {
     export class Vector extends createjs.Point {
         constructor(x:number, y:number) {
             super(x,y);
         }

         public static calcDistance(vect1:Vector, vect2:Vector):number {
             return Math.floor(Math.sqrt(Math.pow(vect2.x - vect1.x, 2) + Math.pow(vect2.y - vect1.y, 2)));
         }
     }
 }