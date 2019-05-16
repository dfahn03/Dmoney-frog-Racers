import Frog from "../models/frog.js";

//PRIVATE


let _state = {
    frogs: [new Frog({ name: 'Slippy', color: 'green' }),
    new Frog({ name: 'Hoppy', color: 'red' }),
    new Frog({ name: 'Kermit', color: 'pink' })]

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
    get Frogs() {
        return _state.frogs.map(f => new Frog(f))

    }
    startRace() {
        //some sort of method to assign each frog object a random time
        let frogs = _state.frogs
        for (let i = 0; i < frogs.length; i++) {
            let frog = frogs[i];

            let time = Math.random() * 5 + 1

            setTimeout(() => {
                frog.time = time
                _setState("frogs", frogs)


            }, time * 1000);
        }
    }
}