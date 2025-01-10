// 1st Point //

const myPromise = new Promise((resolve, reject) => {

    resolve('Promise has been resolved!');
});

myPromise
    .then((message) => {
        console.log(message);  
    })
    .catch((error) => {
        
        console.log(error);
    });
 // 2nd Point //

 
function fn1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('fn1 completed');
            resolve('Result from fn1');
        }, 1000); 
    });
}


function fn2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('fn2 completed');
            resolve('Result from fn2');
        }, 2000); 
    });
}

function fn3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('fn3 completed');
            resolve('Result from fn3');
        }, 1500); 
    });
}


fn1()
    .then((result1) => {
        console.log(result1); 
        return fn2(); 
    })
    .then((result2) => {
        console.log(result2); 
        return fn3();
    })
    .then((result3) => {
        console.log(result3); 
    })
    .catch((error) => {
        console.error('Error:', error);
    });
