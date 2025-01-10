// 1st Point //

async function fetchData() {
    try {
        const data = await fetchDataPromise(true);  
        console.log(data);  
    } catch (error) {
        console.log(error);  
    }
}

fetchData(); 

// 2nd Point //
async function delayedMessageAsync() {

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Operation completed');
}

delayedMessageAsync();

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

async function wakeup() {
    console.log('Woke up!');
    await breakFast();  
}


async function breakFast() {
    console.log('Had breakfast!');
    await goToClass();  
}


async function goToClass() {
    console.log('Going to class!');
}

wakeup();



