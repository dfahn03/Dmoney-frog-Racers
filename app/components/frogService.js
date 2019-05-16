import Frog from "../models/frog.js";

//PRIVATE


let _state = {
    frogs: []

}

let _subscribers = {
    frogs: []
}

function _setState(propName, data) {
    _state[propName] = data
    _subscribers[propName].forEach(fn => {
        fn()
        console.log('running' + fn.name)
    });

}


//PUBLIC

export default class FrogService {
    constructor() {
        console.log('ribbit service');
    }
}