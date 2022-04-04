- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.

```js
const one = new Promise((res, rej) => {
  setTimeout(() => res(Math.random()), 1000)
})
const two = new Promise((res, rej) => {
  setTimeout(() => res(Math.random()), 2000)
})
const three = new Promise((res, rej) => {
  setTimeout(() => res(Math.random()), 3000)
})
const four = new Promise((res, rej) => {
  setTimeout(() => res(Math.random()), 4000)
})

let all = Promise.all([one, two, three, four])
  .then((res) => console.log(res));

```


- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.


```js

let userPromises = users.map((user) => {
  return fetch(`https://api.github.com/users/${}`)
  .then((res) => 
  res.json());
});

Promise.all(userPromises).then((users) => {
  users.forEach((user) => console.log(user.follower));
});


```

- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

```js

let promiseOne = fetch(`https://random.dog/woof.json`)
  .then((res) => 
  res.json());

let promiseTwo = fetch(`https://aws.random.cat/meow`)
  .then((res) => 
  res.json());

Promise.race([promiseOne, promiseTwo]).then(console.log);


```


- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);


Promise.allSettled([one, two, three]).then(console.log);
```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);


// ['Arya', 'Sam', {…}], 1000ms

```
