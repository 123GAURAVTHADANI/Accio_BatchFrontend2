// // setTimeout(() => console.log("First Timer"), 1000);
// // console.log("Hiii");
// // setTimeout(() => console.log("I am from Accio"), 0);
// // let p1 = Promise.resolve("Promise");
// // let p2 = Promise.resolve("Second Promise");

// // p1.then((res) => console.log(res));
// // p2.then((res) => console.log(res));

// // setTimeout(() => {
// //   console.log("Top Level 1");
// //   setTimeout(() => {
// //     console.log("Top Level 2");
// //     setTimeout(() => {
// //       console.log("Top Level 3");
// //       setTimeout(() => {}, 1000);
// //     }, 2000);
// //   }, 1000);
// // }, 2000);

let promise = new Promise((resolve, reject) => {
  let result = 91;
  if (result >= 90) {
    setTimeout(() => {
      resolve("First Promise");
    }, 100);
  } else {
    reject("You have not qualied!!");
  }
});
// promise.then((res) => console.log(res)).catch((err) => console.log(err));

let p1 = Promise.reject("Hi");
// p1.then((res) => console.log(res));

let p2 = Promise.resolve("I am the reason");
// p2.then(
//   (res) => console.log(res),
//   (rej) => console.log(rej)
// );

// Promise.all([promise, p1, p2]).then((res) => console.log(res));
// Promise.allSettled([promise, p1, p2]).then((res) => console.log(res));
Promise.race([promise, p1, p2]).then((res) => console.log(res));

// setInterval(() => console.log("Hi"), 1000);

// Promise.resolve("Accio").then((res) => console.log(res));
// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((res) => console.log(res));
// setTimeout(() => console.log("Timeout"), 0);
