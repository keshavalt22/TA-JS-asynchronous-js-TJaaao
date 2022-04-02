1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise Resolved!`);
    }, 1000);
});

promise.then(console.log);
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
let promise = new Promise((resolve, reject) => {
    reject(`Rejected Promise!`);
});

promise.catch(console.log);
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
let promise = new Promise((resolve, reject) => {
    reject(`Rejected Promise!`);
});

promise.catch(console.log)
.finally(() => console.log(`Promise Settled!`));
```

4. What will be the output of the code below.

```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');

//A
//D
//C
//B
```


5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js
function wait(time){
    return Promise((resolve, reject) => {
        setTimeOut(() => {
            resolve(`Promise Settled!`)
        }, time)
    })
}

```

6. Do the following:

- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
let promise = new Promise((resolve, reject) => {
    resolve(21);
}).then((value) => value + 10)
.then((value) => value + 100)
.then((value) => {
    if(value > 100) {
        throw new Error(`Something Went Wrong!`)
    }
}).catch(console.log);
```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
let promise = new Promise((resolve, reject) => {
    resolve(['A']);
})
.then((value) => {
    return value.concat(`b`);
})
.then((value) => {
    return value.reduce((acc, cv, i) => {
        acc[i] = cv;
        return acc;
    }, {})
})
.then((value) => {
    console.log(value);
});
```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js
let first = new Promise((resolve, reject) => {
    resolve(1);
});


first.then((value) => {
    console.log(value);
     return 2;
})
.then((value) => {
    console.log(value);
     return 3;
})
.then((value) => {
    console.log(value);
     return 4;
});
```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
let first = new Promise((resolve, reject) => {
    resolve(1);
});


first.then((value) => {
    console.log(value);
     return 2;
});
first.then((value) => {
    console.log(value);
     return 3;
});
first.then((value) => {
    console.log(value);
     return 4;
});
```

10. Try to understand the difference between the problem 8 and 9. Write your observation.

- As we can see on the first code we are chaining the code one after another and when we are logging it the value is changing as value is getting updated every time the chain run but when we are calling the code without chaining the value did not changes because we are using first and first will return 1.

11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js
let user = new Promise((resolve, reject) => {
    resolve(`john`);
})
.then((value) => {
    return new Promise((resolve, reject) => {
    resolve(`Arya`);
})
.then((value) => {
    console.log(value);
    return new Promise ((resolve, reject) => {
        setTimeOut(() => resolve(`Bran`), 2000);
    });
})
.then((value) => {
    console.log(value);
});
```