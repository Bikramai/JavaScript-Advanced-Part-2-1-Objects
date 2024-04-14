// In object-oriented programminin, we have this core concept called abstraction.
// Abstraction :- means we should hide the details and complexity and show or expose only the essentials.

function Circle(radius) {
    this.radius = radius;

    // Complexity 
    this.defaultLocation = { x: 0, y: 0 }; // Hide this property

    this.computeOptimumLocation = function() { // Hide this property
        // ...
    }
    this.draw = function() {
        this.computeOptimumLocation();

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

