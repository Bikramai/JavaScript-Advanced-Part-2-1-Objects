function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(15)

for (let key in circle) {  //enumerate all the members in object, we use the for in loop to get all the keys.
    if (typeof  circle[key] !== 'fuction')
    console.log(key, circle[key]);
}

const keys = Object.keys(circle); //we can the for in loop to get all the keys,
console.log(keys);

if ('radius' in circle) //to check for the existence of a property or a method in an object, use the in operator.
console.log('Circle has a radius')

// Note to Remember :- enumerate all the members in object 
// we use the for in loop to get all the keys,
// an object use object.keys,
// to check for the existence of a property or a method in an object, use the in operator.