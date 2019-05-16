export default class Frog {
    constructor(data) {
        this.name = data.name
        this.time = data.time || 0
        this.color = data.color
        this.racing = data.racing || false
    }
    get Template() {
        if (this.racing) {
            return `
        <div class="col" >
                <i class="fas fa-frog fa-spin" style="color: ${this.color}; font-size: 8em"></i>
                <h2>Name: ${this.name}</h2>
                <h2>Color: ${this.color} </h2>
                <h2>Time: ${this.time.toFixed(2)}</h2>
            </div>
        `
        }
        return `
        <div class="col" >
                <i class="fas fa-frog" style="color: ${this.color}; font-size: 3em"></i>
                <h2>Name: ${this.name}</h2>
                <h2>Color: ${this.color} </h2>
                <h2>Time: ${this.time.toFixed(2)}</h2>
            </div>
        `

    }
}

