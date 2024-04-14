// Object literal syntax is not a good way to create an object and duplicate it.
// if this object has at least one method. 
// if an object has one or more methods, we say that object has bebavior, 
// like person that can do different things, so it has behavior.

// Creating objects with the object literal syntax is an issu only if that object has
// a behavior.
// So, what is the solution?
// => The solution is to use a factory or a constructor function.

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();