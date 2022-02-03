# Notes on JavaScript

## Syntax
What is the difference between `var endGame = function()` vs. `function endGame()`? Well, it has to do with hoisting 
> `var endGame = function` is written as an expression they aren't thrown to the top of the code and provide more structure. 
```
add(5,6); // throws an error because the function was not defined yet
var add = function(a,b) {
    console.log(a + b);
};
```
> `function endGame()` is a function declaration. This can be called before it is even declared.
```
add(5,6); // this is where the fuction is called before it was even defined
function add(a,b) {
    console.log(a + b);
};
```

## Object Properties
An object is kind of like a variable in the sense that it stores information about properties (except we can store multiple properties until one object). An example of a property is: 
```
var myCar = {
    propertyName: propertyValue,
    make: "Toyota",
    model: "Highlander"
};
```
Methods are functions that can be accessed within an object (aka an object method). 
```
var myCar = {
    propertyName: propertyValue,
    make: "Toyota",
    model: "Highlander",
    mileage: 500000,

    // increases the mileage by 25 each time it is called
    driveToWork: function(){
        this.mileage += 25;
    }
};
```
