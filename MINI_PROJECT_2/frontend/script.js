const books = [
  {
    id:1,
    title:"Atomic Habits",
    author:"James Clear",
    price:499,
    image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f"
  },

  {
    id:2,
    title:"Rich Dad Poor Dad",
    author:"Robert Kiyosaki",
    price:399,
    image:"https://images.unsplash.com/photo-1512820790803-83ca734da794"
  },

  {
    id:3,
    title:"Ikigai",
    author:"Hector Garcia",
    price:299,
    image:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
  },

  {
    id:4,
    title:"The Psychology of Money",
    author:"Morgan Housel",
    price:599,
    image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
  }
];

const booksContainer = document.getElementById("books-container");

if(booksContainer){

  displayBooks(books);

  document.getElementById("searchInput")
    .addEventListener("input",(e)=>{

      const search = e.target.value.toLowerCase();

      const filtered = books.filter(book =>
        book.title.toLowerCase().includes(search)
      );

      displayBooks(filtered);
    });
}

function displayBooks(data){

  booksContainer.innerHTML="";

  data.forEach(book=>{

    booksContainer.innerHTML += `
      <div class="book-card">

        <img src="${book.image}" alt="">

        <div class="book-info">
          <h3>${book.title}</h3>

          <p>${book.author}</p>

          <p class="price">₹${book.price}</p>

          <button onclick="addToCart(${book.id})">
            Add To Cart
          </button>
        </div>

      </div>
    `;
  });
}

function scrollToBooks(){
  document
    .getElementById("books-section")
    .scrollIntoView({
      behavior:"smooth"
    });
}

/* CART */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id){

  const book = books.find(b=>b.id===id);

  cart.push(book);

  localStorage.setItem("cart",JSON.stringify(cart));

  updateCartCount();

  alert("Book Added To Cart!");
}

function updateCartCount(){

  const count = document.getElementById("cart-count");

  if(count){
    count.innerText = cart.length;
  }
}

updateCartCount();

/* CART PAGE */

const cartContainer = document.getElementById("cart-container");

if(cartContainer){

  displayCart();
}

function displayCart(){

  cartContainer.innerHTML="";

  let total = 0;

  cart.forEach((item,index)=>{

    total += item.price;

    cartContainer.innerHTML += `
      <div class="cart-item">

        <div>
          <h3>${item.title}</h3>
          <p>₹${item.price}</p>
        </div>

        <button onclick="removeItem(${index})">
          Remove
        </button>

      </div>
    `;
  });

  document.getElementById("total-price")
    .innerText = `Total: ₹${total}`;
}

function removeItem(index){

  cart.splice(index,1);

  localStorage.setItem("cart",JSON.stringify(cart));

  displayCart();

  updateCartCount();
}

function checkout(){

  alert("🎉 Order Placed Successfully!");

  localStorage.removeItem("cart");

  window.location.href="index.html";
}