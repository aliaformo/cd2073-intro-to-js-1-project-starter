/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

let products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

products = [{
    name: 'Cherry',
    price: 10,
    quantity: 0,
    productId: 101,
    image: "../images/cherry.jpg"
  },
  {
    name: 'Orange',
    price: 15,
    quantity: 0,
    productId: 102,
    image: "../images/orange.jpg"
  },
  {
    name: 'Strawberry',
    price: 20,
    quantity: 0,
    productId: 103,
    image: "../images/strawberry.jpg"
  },
];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {

  let foundProduct = null;

  products.forEach(product => {
    if (product.productId == productId) {
      foundProduct = product;
    }
  });
  //Checking if the product is already in the cart
  if (!cart.includes(foundProduct)) {
    cart.push(foundProduct);
    foundProduct.quantity += 1;
    // adding one
  } else {
    foundProduct.quantity++;
  }
}



/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  let incProduct = null;

  for (let product of products) {
    if (product.productId == productId) {
      incProduct = product;
    }
  }
  // adding one
  incProduct.quantity++;

}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  let decProduct = null;

  for (let product in products) {
    if (products[product].productId == productId) {
      decProduct = products[product];
    }
  }

  if (decProduct.quantity == 1) {
    // decrease product quantity to 0
    decProduct.quantity--;
    // remove product from cart
    cart.splice(cart.indexOf(decProduct), 1);
  } else {
    decProduct.quantity--;
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {

  let remProduct = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].productId == productId) {
      remProduct = products[i];
    }
  }
  // set product quantity to 0
  remProduct.quantity = 0;
  // remove product from cart
  cart.splice(cart.indexOf(remProduct), 1);


}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {

  let totalAmount = 0;
  products.map(product => {
    totalAmount += product.quantity * product.price
  });
  return totalAmount;
}



/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  let product;
  while (cart.length > 0) {
    product = cart[0];
    removeProductFromCart(product.productId);
  }

}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

function pay(amount) {
  return amount - cartTotal();
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/




/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}