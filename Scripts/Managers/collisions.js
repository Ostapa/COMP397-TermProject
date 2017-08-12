/**
 * @file collisions.ts
 * @author Ostap Hamarnyk
 * @date August 11 2017
 * @version 0.3
 * @description The collisions class to manage game collisions.
 */
var Managers;
(function (Managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.checkRange = function (object1, object2, range) {
            if (objects.Vector.calcDistance(object1.position, object2.position) < range) {
                return true;
            }
        };
        Collision.prototype.check = function (object1, object2) {
            return object1.hitTest(object2.x, object2.y);
        };
        return Collision;
    }());
    Managers.Collision = Collision;
})(Managers || (Managers = {}));
//# sourceMappingURL=collisions.js.map