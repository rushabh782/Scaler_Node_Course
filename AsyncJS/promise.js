//how to produce a promise

let myPromise = new Promise(function (resolve, reject) {
  const a = 4;
  const b = 4;

  setTimeout(() => {
    if (a == b) {
      resolve("the values are equal");
    } else {
      reject("the values are not equal");
    }
  }, 2000);
});

//pending state
// console.log(myPromise);

//fulfilled - then method
//consuming your promises
myPromise.then(function (result) {
  console.log(result);
}); //fulfilled

myPromise.catch(function (err) {
  console.error(err); // Logs the rejection reason
}); //rejected
