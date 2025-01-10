function multiply(a, b, callback) {
    const result = a * b;
    callback(result);
}

function displayResult(result) {
    console.log('The result is:', result);
}
// 2nd Point
multiply(5, 10, displayResult); 

function delayedMessage(message, delay, callback) {
    setTimeout(() => {
        console.log(message);
        callback();  
    }, delay);
}

function onMessageLogged() {
    console.log('Message has been logged successfully.');
}

delayedMessage('Hello, world!', 2000, onMessageLogged);  
// 3rd Point //

function wakeup(breakFast) {
    console.log('Woke up!');
    breakFast(goToClass);  
}

function breakFast(goToClass) {
    console.log('Had breakfast!');
    goToClass();  
}

function goToClass() {
    console.log('Going to class!');
}

wakeup(breakFast); 



