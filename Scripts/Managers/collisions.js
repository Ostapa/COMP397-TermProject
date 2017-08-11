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
        Collision.prototype.check = function (bullet, zombie) {
            return true;
        };
        return Collision;
    }());
    Managers.Collision = Collision;
})(Managers || (Managers = {}));
//# sourceMappingURL=collisions.js.map