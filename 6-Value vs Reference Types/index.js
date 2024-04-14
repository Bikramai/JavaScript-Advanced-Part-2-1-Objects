
// Primitives Types
// let x = 10;
// let y = x;

// x = 20;


// Here note that x and y are two independent variables.
// go back in the console, let's log x,  s is 20, and y is 10.

// So when we work with primitives. This value(let x = 10;), 
// that we have here is stored inside of x variable. 
// when we copy that is stored in the variable is copied into thid new y variable.
// So they are completely independent of each other. 


//References Types
let x = { value: 10};
let y = x;

x.value = 20;

//Take away:- 
// When we use an object, that object is not stored in this variable.
// That object is stored somewhere else in the memory, and 
// the address of that memory location is stored inside that memory variable.
// So then when we copy x into y, it's the address or the reference that is copied.

// In otherwords, Both x and y are pointing to the same, object in memory.
// And when we modify each object using x, or y, our changes are immediately visible
// to other variable. 

// So here's the conclusion:-
// Primitives are copied by their value 
// Objects are copied by their reference.


// Example 2
// Primitives Type 
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);

// Here, we see 10. But didn't we increase the number, 
// well, when we call increase and pass this number variable.
// It's value is copied into this parameter -function increase(number)
// that is local in this function. So this number++; variable here is completely
// inpendent of this other mumber variable let number = 10;.
// Here in this function, we increment this number by 1, so it will be 11, 
// but after this function this number is going to go out of the scope.

// so when we log thid number on the console, we 're essentially dealing
// with the first number. So I told you that primitives are copied by their value.
// so here we're dealing with two independent copies i,e parameter number, and number++.
// that's why we see 10 on the console.

// References Types 
let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

// here we are not dealing with two independent copies, 
// we have two variables that are pointing to the same object.
// so any changes we make to this object will be visible to the other varible.

// So remember this, In JavaScript 
// wi have value types, also called primitives, 
// as well as reference types which are objects.
// Our primitives types are number, string, boolean, symbol, undefined and null.
// Primitives are copied by their value
// Reference or Objects are copied by their reference.