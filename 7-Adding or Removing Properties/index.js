// Here we have circle constructor function and using that we create
// a circle object. Now these objects in JavaScript are dynamic. 
// That means, after we create them we can add extra properties in them 
// and delete some properties.


// You may be wondering why this is useful in the real world.
// => Imagine we're are working with the user object. 
// The client, it can be a web or mobile application is going 
// to send a user object to the server on the server, 
// we get this object, and then we add additional stuff to it.
// we can always add something extra to an existing object. 
// Coz we don't have classes, we don't need to define these 
// properties ahead of time. We can add them whenever we need them,
// and that makes JavaScript extremely powerful and easy to work with.

// In language like C# or Java, every time we want to implement 
// scenarios like this we have to go back and change our classes.
// here let me add a property to our circle object.
// You can set the location here = {x: 1};
// Here on the console, let log circle, we can see we have two properties.
// location and radius.


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(15);

circle.location = { x: 1 }; // object or references type to access properties
circle['location'] = {x: 1}; // bracket notation to access properties


// delete the object -real world example 
// when we get a user object from a database, and you want to return it to the client.
// but maybe that user object has certain properties you don't want to send to the client.
// You don't want to send the password, you don't want to send the credit card info, 
// if that case, you will dynamically delete one or more properties from an object.
// so we use the delete operator, and then reference

delete circle.location; //dot notation
delete circle['location'] //bracket notation




