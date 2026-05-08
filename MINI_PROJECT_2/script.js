// Mock Data (To be replaced by your GET /books API later)
const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 15.99 },
    { id: 2, title: "1984", author: "George Orwell", price: 12.50 },
    { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien", price: 20.00 },
];

let cart = [];

function init() {
    renderHome(books);
    
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = books.filter(b => 
            b.title.toLowerCase().includes(term) || 
            b.author.toLowerCase().includes(term)
        );
        renderHome(filtered);
    });
}

function renderHome(bookList) {
    const container = document.getElementById('main-content');
    container.innerHTML = '<h1>Browse Books</h1><div class="book-grid" id="bookGrid"></div>';
    const grid = document.getElementById('bookGrid');

    bookList.forEach(book => {
        const template = document.getElementById('book-card-template').content.cloneNode(true);
        template.querySelector('.book-title').textContent = book.title;
        template.querySelector('.book-author').textContent = book.author;
        template.querySelector('.book-price').textContent = `$${book.price}`;
        template.querySelector('.add-to-cart-btn').onclick = () => addToCart(book);
        grid.appendChild(template);
    });
}

function addToCart(book) {
    cart.push(book);
    updateCartCount();
    alert(`${book.title} added to cart!`);
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

function showPage(page) {
    const container = document.getElementById('main-content');
    if (page === 'home') {
        renderHome(books);
    } else if (page === 'cart') {
        renderCart();
    }
}

function renderCart() {
    const container = document.getElementById('main-content');
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    
    container.innerHTML = `
        <h1>Your Cart</h1>
        <div class="cart-list">
            ${cart.map((item, index) => `
                <div class="cart-item">
                    <span>${item.title} - $${item.price}</span>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `).join('')}
        </div>
        <h3>Total: $${total.toFixed(2)}</h3>
        <button class="add-to-cart-btn" onclick="checkout()">Checkout</button>
    `;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
}

function checkout() {
    if (cart.length === 0) return alert("Cart is empty!");
    alert("Order confirmed! Thank you for shopping.");
    cart = [];
    updateCartCount();
    showPage('home');
}

// Start the app
init();