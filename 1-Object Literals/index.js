// Object Literal:-
// Object literal is a simple way to define an object.
// But we can also define objects using factories and constructors.

const circle = {
    radius: 1,
    laocation: {
        x: 1,
        y: 2
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();


// Note: an object in JavaScript is essentially a collection of key value pairs.
// Value is a function.
// here circle has 3 members - radius, location, and draw.
// if a member is function, we refer to it as a method, here we say draw is a method,
// these radius, location are what we call properties.
// But technically in object-oriented programming, properties and methods are fundamentally 
// different beacause of properties used to hold values.
// A function or a method is used to define some logic.