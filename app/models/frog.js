export default class Frog {
    constructor(data) {
        this.name = data.name
        this.time = data.time || 0
        this.color = data.color
    }
    get Template() {
        return `
        <div class="col" >
                <h2>Name: ${this.name}</h2>
                <h2>Color: ${this.color} </h2>
                <h2>Time: ${this.time}</h2>
            </div>
        `

    }
}

