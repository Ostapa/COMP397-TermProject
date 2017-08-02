module objects {
    export class Scene extends createjs.Container {
        constructor() {
            super();
            this.start();
        }

        public start():void {
            stage.addChild(this);
        }

        public update():void {

        }
    }
}