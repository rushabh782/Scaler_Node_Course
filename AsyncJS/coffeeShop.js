function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink == "coffee") {
      resolve("Order for coffee received");
    } else {
      reject("Others orders rejected");
    }
  });
}

function processOrder(order) {
  return new Promise(function (resolve) {
    console.log("Order is being Processed");
    resolve(`${order} is Served`);
  });
}

// placeOrder("coffee")
//   .then(function (orderPlaced) {
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;
//   })
//   .then(function (processOrder) {
//     console.log(processOrder);
//   })
//   .catch(function (err) {
//     console.log(err);
//   }); //Chaining of Promises

async function serveOrder() {
  try {
    let orderPlaced = await placeOrder("tea");
    console.log(orderPlaced);
    let processedOrder = await processOrder(orderPlaced);
    console.log(processedOrder);
  } catch (error) {
    console.log(error);
  }
}

serveOrder();
