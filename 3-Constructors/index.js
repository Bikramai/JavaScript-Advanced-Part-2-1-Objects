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


// Where as naming convention we use for constructor function is different.
// The first letter should be uppercase. 
// The developers with background in languages lik C#, and Java, this kind of 
// looks like a class, However we are defining function.
// In JavaScript we don't have the concept of classes. 
// we use this keyword to set the properties of this object.

// what is this means in constructor function?
// => This is basically a reference to the objcet that is executing the piece of code.
// and then use .notation to set various properties on that object.
// when we use the new operator, a few things happen under the hood.
// This new operator will create an empty object so like this{}.
// Then, it will set this to point to that objce. Coz by default, this points to the global object.
// If you're running this code inside of a browser, the global object is the window object.
// If you're running it inside a node environment, the global object is global.
// Let me show you, console.log('this' , this); in console there is two member - draw, and radius.
// This is coz we use new operator -const antother = new Circle(1);here.
// if we remove that, let see what happens. Now this references the window object. 
// so this is global object in the browser, we don't want to use this, we don't want to mess up with this.
// We don't want to define global variables coz they're a bad practice, coz they're 
// available everywhere in our application. It is possible that one function or another will
// modify the value of these variables accidentally, and create a bug in our application.

// when we use the new operator to call a function, 3 things happen.
// First, this new operator will create an empty object. 
// second Then, it will ser this to point to that object, and
// third Finally, it will return that object from this function -function Circle(radius),
// so note that here we don't have an explicit return statment, we're returning this.
// This will happen autimatically when we use the new operator.




// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.timeLog('draw');
    }
}
const antother = new Circle(1);


// Basically we have two ways to  create an object. We can use factory or constructor.
// There is nothing special about this. They're both regular functions in JavaScript.

// Which approach should you use?
// Well, it really depends who you ask. Developers coming from languages like C#, and
// Java, prefer the constructor function syntax, coz this looks like creating an instance of a class,
// but onces again, in JavaScript we don't really have classes. Other developers don't like this 
// approach, they prefer to use factory function.

// My opinion, As a developer, we should be familiar with both these patterns, coz as 
// we work on different projects on different teams, you will see botho of these patterns
// for creating an object, so you should understand how they work.