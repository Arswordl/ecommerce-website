// JavaScript to handle the menu toggle
document.getElementById('toggle-menu').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});

// JavaScript for the cart functionality
const cartItems = [];
const cartContainer = document.getElementById('cart-items');
const cart = document.getElementById('cart');

// Update the cart display
function updateCartDisplay() {
    cartContainer.innerHTML = ''; // Clear previous items
    if (cartItems.length === 0) {
        cart.classList.remove('active'); // Hide cart if empty
        return;
    }
    cart.classList.add('active'); // Show cart if there are items
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.title} - $${item.price}</span>
            <span class="delete-icon" data-index="${index}">❌</span>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Add item to cart
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.parentElement;
        const title = productElement.querySelector('h2').innerText;
        const price = productElement.querySelector('.price').innerText.replace('Price: $', '');
        cartItems.push({ title, price });
        updateCartDisplay();
    });
});

// Remove item from cart
cartContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-icon')) {
        const index = e.target.getAttribute('data-index');
        cartItems.splice(index, 1);
        updateCartDisplay();
    }
});

// Auto-close cart if empty
setInterval(() => {
    if (cartItems.length === 0) {
        cart.classList.remove('active'); // Hide cart if empty
    }
}, 1000);
