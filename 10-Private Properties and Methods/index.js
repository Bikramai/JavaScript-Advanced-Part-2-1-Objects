// How do implementation abstraction in JavaScript?
// what happens, if we declare local variable in the function?
// Is this going to be part of that object? Ofcourse not, coz we have not set that as property on that object.
// we didn't set this.color. => so this is only local variable inside of the fuction, when we get out of the 
// function, this variable goes out of scope and dies. With this technique, we can easily hide certain members 
// from the outside.

// closure :- closure determines what variables will be accessible to an inner function. So this function 
// will be able to access all the local variables defined in child and parent function.

// Don't confuse closure with scope, coz the scope is temporary and it dies. 
// But closure stays there. so when we call the function, after we finish executing this function, the variables
// will continue to stay in memory. They will preserve their stat, coz they are part of closure of the function.

// In object-oriented programminin, we have this core concept called abstraction.
// Abstraction :- means we should hide the details and complexity and show or expose only the essentials.

function Circle(radius) {
    this.radius = radius;

    // Complexity 
    let defaultLocation = { x: 0, y: 0 }; // Hide this property by defining local variable inside the function.

    let computeOptimumLocation = function() { // Hide this property, by the same token, we can convert this method to a private method,
        // ...
    }
    this.draw = function() {
        computeOptimumLocation(); //this function is no longer be a method of this new object
        // defaultLocation
        // this.radius // but if you want to addess members of this new circle objcet, u need to use this.

        console.log('draw');
    }
}

const circle = new Circle(15)
circle.computeOptimumLocation();
circle.draw();

// Hide this property are the implementation details, these are part of the complexity of this object,
// so we want to hide these from the consumers of this object. Instead, we want to expose only the essentials,
// that is the radius and draw method. 

// let me give you a metaphor. Think of a DVD player. A DVD Player has a complex logic board on the inside,
// but only a few buttons on the outside that you interact with. 
// so what you have inside is the implementation detail, and what we have on the outside, is public interface
// of a DVD player. We want out objects to look like this DVD player. we want to hide all the details, 
// all the unnecessary complexity on the outside, and expose only a few members, or a few buttons on the outside.

