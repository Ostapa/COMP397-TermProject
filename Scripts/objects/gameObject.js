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
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject(sprite, imgUrl) {
            var _this = _super.call(this, sprite, imgUrl) || this;
            _this.position = new objects.Vector(_this.x, _this.y);
            _this._width = _this.getBounds().width;
            _this._height = _this.getBounds().height;
            return _this;
        }
        Object.defineProperty(GameObject.prototype, "position", {
            get: function () { return this._position; },
            set: function (position) { this._position = position; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "width", {
            get: function () { return this._width; },
            set: function (width) { this._width = width; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "height", {
            get: function () { return this._height; },
            set: function (height) { this._height = height; },
            enumerable: true,
            configurable: true
        });
        GameObject.prototype.start = function () {
        };
        GameObject.prototype.update = function () {
        };
        return GameObject;
    }(createjs.Sprite));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameObject.js.map