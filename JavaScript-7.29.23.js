class MakeCar {
 constructor(carMake, carModel, carColor, numOfDoors) {
    this.make = carMake 
    this.model = carModel       
    this.color = carColor   
    this.doors = numOfDoors
}
    honk() {
        alert('BEEP BEEP')
    }
    lock() {
        alert(`Locked ${this.doors} doors!`)
    }
}
let hondaCivic = new MakeCar('Honda', 'Civic','Silver', 4)