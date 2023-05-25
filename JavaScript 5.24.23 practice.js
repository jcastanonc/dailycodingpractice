//create an object with 4 properties and 3 methods)
function StreetFighter(height, size, state, punch)  {
    this.height = height    
    this.size = size    
    this.state = state  
    this.punch = punch
    this.taunt = function() {
        console.log(`You can't handle my ${this.punch}`)
    }
    this.winning = function() {
        console.log(`I am so ${this.state}`)
    }
    this.self = function() {
        console.log(`You wish you were ${this.height}`)
    }
}
let malik = new StreetFighter('five foot eleven','strong', 'happy','left hook')

