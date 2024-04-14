function Circle(radius){
    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};
}


this.getDefaultLocation = function() {
    return getDefaultLocation;
};

this.draw = function() {
    console.log('draw');
};

Object.defineProperty(this, 'defaultLocation', {
    get: function() {    // get and set is special keyword in JavaScript
        return getDefaultLocation;
    },
    set: function(value) {
        if (!value .x || !value.y) //if the value of x is falsy, or value of y is falsy
            throw new Error('Invalid location') // Error is built-in constructor in JavaScript

        defaultLocation = value;

    }
});


const circle = new Circle(15);
circle.defaultLocation = 1;
circle.draw();

// Recap:- 
// Use object.define property to define getters, and/or setters.

