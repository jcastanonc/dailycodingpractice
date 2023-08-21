//Create an a class and extend it - Can be anything you would like it to be! 
class Child {
    constructor(name){  
        this.name = name
}
        console.log(`${name} is a child.`)
}

class Height extends Child {
    constructor(name,height){
    super(name)
    this.height = "20 inches"
}
    cry() {
        console.log("wahhhh")
}

}