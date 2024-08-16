

let cartItems = {  
    item1: { price: 10.00, quantity: 1 },  
    item2: { price: 15.00, quantity: 1 }  
};  

function updateTotal() {  
    let total = 0;  
    for (let item in cartItems) {  
        total += cartItems[item].price * cartItems[item].quantity;  
    }  
    document.getElementById('total-price').innerText = `$${total.toFixed(2)}`;  
}  

function increaseQuantity(item) {  
    cartItems[item].quantity++;  
    document.getElementById(`${item}-quantity`).innerText = cartItems[item].quantity;  
    updateTotal();  
}  

function decreaseQuantity(item) {  
    if (cartItems[item].quantity > 1) {  
        cartItems[item].quantity--;  
        document.getElementById(`${item}-quantity`).innerText = cartItems[item].quantity;  
        updateTotal();  
    }  
}  

function deleteItem(item) {  
    delete cartItems[item];  
    document.querySelector(`.cart-item:has(#${item})`).remove();  
    updateTotal();  
}  

function toggleLike(item) {  
    const likeButton = document.getElementById(`${item}-like`);  
    likeButton.style.color = likeButton.style.color === 'red' ? 'black' : 'red';  // Toggle color  
}  