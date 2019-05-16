import FrogService from "./frogService.js";

//PRIVATE
let _frogService = new FrogService();

function _drawFrogs() {
    let frogs = _frogService.Frogs
    let template = ''
    for (let i = 0; i < frogs.length; i++) {
        let frog = frogs[i];
        console.log('Frog', frog)
        template += frog.Template
    }
    document.getElementById('frogs').innerHTML = template;
}




//PUBLIC
export default class FrogController {
    constructor() {
        console.log('ribbit controller');
        _drawFrogs()
        _frogService.addSubscribers('frogs', _drawFrogs)
    }
    startRace() {
        _frogService.startRace()
    }

}