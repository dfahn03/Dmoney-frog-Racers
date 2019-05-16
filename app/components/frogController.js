import FrogService from "./frogService.js";

//PRIVATE
let _frogService = new FrogService();

function _drawFrogs() {
    let frogs = _frogService.Frogs
    for (let i = 0; i < frogs.length; i++) {
        let frog = frogs[i];
        console.log('Frog', frog)
    }
}




//PUBLIC
export default class FrogController {
    constructor() {
        console.log('ribbit controller');
        _drawFrogs()
    }
}