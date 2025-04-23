let cart = [];  
let totalPrice = 0;  

function addToCart(itemName, itemPrice) {  
    cart.push({ name: itemName, price: itemPrice });  
    totalPrice += itemPrice;  
    renderCart();  
}  

function renderCart() {  
    const cartItems = document.getElementById('cart-items');  
    const totalDisplay = document.getElementById('total-price');  

    cartItems.innerHTML = '';  
    cart.forEach(item => {  
        const li = document.createElement('li');  
        li.textContent = `${item.name} - $${item.price}`;  
        cartItems.appendChild(li);  
    });  
    
    totalDisplay.textContent = `Total: $${totalPrice}`;  
}  