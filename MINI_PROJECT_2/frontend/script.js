let books = [];

/* FETCH BOOKS FROM BACKEND */

fetch("http://localhost:8081/books")
  .then(response => response.json())
  .then(data => {

    books = data;

    /* ADD IMAGES MANUALLY */

    books[0].image =
      "https://upload.wikimedia.org/wikipedia/en/e/ed/Aoashi_vol_1.png";

    books[1].image =
      "https://upload.wikimedia.org/wikipedia/en/a/a6/Astro_Boy-08.jpg";

    books[2].image =
      "https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg";

    books[3].image =
      "https://upload.wikimedia.org/wikipedia/en/4/4a/Berserk_vol01.png";

    books[4].image =
      "https://upload.wikimedia.org/wikipedia/en/3/3f/Bleach_%28manga%29_1.png";

    books[5].image =
      "https://upload.wikimedia.org/wikipedia/en/2/24/Chainsawman.jpg";

    books[6].image =
  "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg";

    books[7].image =
  "https://upload.wikimedia.org/wikipedia/en/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg";

   books[8].image =
  "https://upload.wikimedia.org/wikipedia/en/c/c9/DB_Tank%C5%8Dbon.png";

books[9].image =
  "https://upload.wikimedia.org/wikipedia/en/9/9d/Fullmetal123.jpg";

books[10].image =
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Hunter_%C3%97_Hunter_vol._1.png";

books[11].image =
  "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg";

books[12].image =
  "https://upload.wikimedia.org/wikipedia/en/d/d9/Kingdom_%28manga%29_1.png";

books[13].image =
  "https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png";

books[14].image =
  "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg";

books[15].image =
  "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg";

books[16].image =
  "https://upload.wikimedia.org/wikipedia/en/c/c3/OnePunchMan_manga_cover.png";

books[17].image =
  "https://upload.wikimedia.org/wikipedia/en/c/c8/Sakamoto_Days_manga_volume_1.jpg";

books[18].image =
  "https://upload.wikimedia.org/wikipedia/en/f/f7/Slam_Dunk_%28manga%29_1.png";

books[19].image =
  "https://upload.wikimedia.org/wikipedia/en/5/51/Spy_Family_vol_1.jpg";

books[20].image =
  "https://upload.wikimedia.org/wikipedia/en/e/e5/Tokyo_Ghoul_volume_1_cover.jpg";

books[21].image =
  "https://upload.wikimedia.org/wikipedia/en/b/b1/Tokyo_Revengers_volume_1_cover.jpg";

books[22].image =
  "https://upload.wikimedia.org/wikipedia/en/c/cf/Undead_Unluck%2C_volume_1_cover.jpg";

books[23].image =
  "https://upload.wikimedia.org/wikipedia/en/9/99/Vagabond_%28manga%29_vol._1.png";

books[24].image =
  "https://upload.wikimedia.org/wikipedia/en/5/51/Vinland_Saga_volume_01_cover.jpg";
    

    displayBooks(books);
  })
  .catch(error => {
    console.log("Error fetching books:", error);
  });

const booksContainer = document.getElementById("books-container");

/* SEARCH */

if (booksContainer) {

  document.getElementById("searchInput")
    .addEventListener("input", (e) => {

      const search = e.target.value.toLowerCase();

      const filtered = books.filter(book =>
        book.title.toLowerCase().includes(search)
      );

      displayBooks(filtered);
    });
}

/* DISPLAY BOOKS */

function displayBooks(data) {

  booksContainer.innerHTML = "";

  data.forEach(book => {

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

/* HERO BUTTON */

function scrollToBooks() {

  document
    .getElementById("books-section")
    .scrollIntoView({
      behavior: "smooth"
    });
}

/* CART */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD TO CART */

function addToCart(id) {

  const book = books.find(b => b.id === id);

  cart.push(book);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert("📚 Book Added To Cart!");
}

/* CART COUNT */

function updateCartCount() {

  const count = document.getElementById("cart-count");

  if (count) {
    count.innerText = cart.length;
  }
}

updateCartCount();

/* CART PAGE */

const cartContainer = document.getElementById("cart-container");

if (cartContainer) {

  displayCart();
}

/* DISPLAY CART */

function displayCart() {

  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

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

/* REMOVE ITEM */

function removeItem(index) {

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();

  updateCartCount();
}

/* CHECKOUT */

function checkout() {

  alert("🎉 Order Placed Successfully!");

  localStorage.removeItem("cart");

  window.location.href = "index.html";
}