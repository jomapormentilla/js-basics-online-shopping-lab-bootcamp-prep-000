var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random()*100 + 1)
 
 var items = {
   itemName: item,
   itemPrice: price
 }
 
 cart.push(items)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0){
    return `Your shopping cart is empty.`
  }else{
    let string = `In your cart, you have `
    if(cart.length === 1){
      string += `${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else{
      for(let i=0; i<cart.length; i++){
        string += `${ i===cart.length - 1 ? 'and ' : ''}${cart[i].itemName} at $${cart[i].itemPrice}${ i === cart.length - 1 ? '.' : ', '}` 
      }
    }
    return string
  }
}

function total() {
  var total = 0
  for(let i=0; i<cart.length; i++){
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for(let i=0; i<cart.length; i++){
    if( cart[i].itemName === item ){
      cart.splice(i,1,'')
      return cart
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
