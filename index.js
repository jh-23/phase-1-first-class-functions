// Write your code here!

function firstStatement() {
    console.log("Make a first statement");
}

function secondStatement() {
    console.log("Make a second statement");
}

function receivesAFunction(makeArgument) {
    firstStatement();
    makeArgument();
}

function returnsANamedFunction() {
    return function sayHello() {
        console.log('Hello, ' + '!')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is my function for this lab");
    }
}