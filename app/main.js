import FrogController from "./components/frogController.js";

class App {
    constructor() {
        this.controllers = {
            frogController: new FrogController()
        }
    }
}

window['app'] = new App();