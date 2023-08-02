//create pizza object 4 properties and 3 methods
let pizza = {}

pizza.texture = 'gooey'
pizza.shape = 'triangle'
pizza.taste = 'savory'
pizza.toppings = ['pepperoni','sausage','garlic']

pizza.estimatedDeliveryTime = function() {
    console.log('Calculating...')
}
pizza.burnMouth = function() {
    console.log('ouch')
}
pizza.frisbee = function() {
    console.log('Yeeeet')
}