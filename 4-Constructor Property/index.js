// Every object in JavaScript has a property called constructor, and 
// that references the function that was used to construct or create an object.
// So here we have two objects.
// 1. circle
// 2. another

// Let's look at the Constructor Property, on the console browser,
// 1. Type another.constructor -as we see this returns our circle function that we used
//    create this object.
// 2. Type circle.constructor -Well, you can tell that this is a function coz here we have 
//    this blue f. And as we can see the first letter of this function is uppercase.
//    So this is a built in constructor function in JavaScript.
//    When we create an object using the object literal syntax, internally the 
//    JavaScript engine uses this constructor function.

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

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.timeLog('draw');
    }
}
const another = new Circle(1);


// In JavaScript we have a few other built in constructors 
// new String(); ->'', "", `` -but quit often we use string literals.
//                         -using this literals is cleaner and simpler than using the constructor.
// new Boolean(); ->true, false -so we refer to boolean literals.
// new Number(); -> 1, 2, 3, ... whatever. -but instead we use number litrals.

// Take away:-
// Every object has a constructor property, and that references the function that was 
// used to create that object.



