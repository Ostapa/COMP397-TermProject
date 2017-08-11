/**
 * @file vector.ts
 * @author Ostap Hamarnyk
 * @date August 11 2017
 * @version 0.1
 * @description Class to define vector between two objects
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Vector = (function (_super) {
        __extends(Vector, _super);
        function Vector(x, y) {
            return _super.call(this, x, y) || this;
        }
        Vector.calcDistance = function (vect1, vect2) {
            return Math.floor(Math.sqrt(Math.pow(vect2.x - vect1.x, 2) + Math.pow(vect2.y - vect1.y, 2)));
        };
        return Vector;
    }(createjs.Point));
    objects.Vector = Vector;
})(objects || (objects = {}));
//# sourceMappingURL=vector.js.map