import FrogService from "./frogService.js";

//PRIVATE
let _frogService = new FrogService();



//PUBLIC
export default class FrogController {
    constructor() {
        console.log('ribbit controller');
    }
}