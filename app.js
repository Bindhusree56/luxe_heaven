// -----------------------------
// PRODUCT LIST
// -----------------------------
const products = [
  { name: "Giorgio Armani", category: "sunglasses", price: 24999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344125/Lunetterie_G%C3%A9n%C3%A9rale_Eyewear_Campaign__Fashion_photography._Vintage_Aesthetic._Sunglasses_Made_in_Japan._Fashion_lookbook_jjmiqf.jpg", description: "Classic Italian craftsmanship meets modern design in these iconic Armani sunglasses." },
  { name: "Sotirio Bulgari", category: "sunglasses", price: 32999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344124/download_1_n09egv.jpg", description: "Exquisite Roman elegance with signature serpenti details and premium UV protection." },
  { name: "Oakley Wraps", category: "sunglasses", price: 18999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344129/%D0%A1%D1%8A%D0%B5%D0%BC%D0%BA%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D0%B0_%D0%BE%D1%87%D0%BA%D0%BE%D0%B2_%EF%B8%8F_Idol_Production_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0_m6c4cz.jpg", description: "Sport-inspired design with cutting-edge lens technology for maximum performance." },
  { name: "TomFord", category: "sunglasses" , price : 17999, image:"https://res.cloudinary.com/dv1cjngnl/image/upload/v1763396985/5c7bdded1ee07b0ef7721e625800ac36_okyi3r.jpg" , description: "A bold fusion of urban elegance and cutting-edge craftsmanship. These frames feature ultra-lightweight alloy temples and anti-glare crystal lenses designed for all-day comfort and refined sophistication."},
  {name: "COTIA Fashion", category: "sunglasses", price: 15999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344125/download_synvm6.jpg", description: "Contemporary fashion-forward frames that make a bold statement wherever you go." },
  {name: "Velorian Retro Shades", category: "sunglasses", price: 34292, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763396929/4730b90871a9c1eef936925d46c16429_z6r46v.jpg", description: "Inspired by vintage Hollywood glamour, these handcrafted Italian acetate shades offer a timeless silhouette with modern UV400 protection, perfect for elevating any daytime ensemble." },
  {name: "Eclipse Shadow Frames", category: "sunglasses", price: 23897, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763396958/6f56e93d7401c237ae1eb4fb7e408cde_oruwax.jpg", description: "Engineered with next-generation polarized optics, Astra Nova delivers exceptional clarity even under harsh sunlight. Sleek contours and a precision-cut finish ensure a luxurious, seamless fit." },
  {name: "Astra Nova Polarized", category: "sunglasses", price: 77689, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763396914/e1e6cc1b7135f1332b60a14c52d34886_xh4h41.jpg", description: "Combining architectural precision with minimalist luxury, this metal series features corrosion-resistant frames and scratch-proof lenses—crafted for connoisseurs who appreciate lasting quality." },

  { name: "LOEWE Puzzle Bag", category: "handbags", price: 189999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350613/I_m_a_Stylist_and_I_Think_These_Are_the_Designer_Bags_Worth_Buying_hbrlkl.jpg", description: "Iconic Spanish leather luxury bag with geometric design." },
  { name: "Billini Tote", category: "handbags", price: 12999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_3_kgt1ky.jpg", description: "Spacious tote bag perfect for everyday luxury." },
  { name: "Sac a main de Voyage", category: "handbags", price: 45999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_4_ifzj7e.jpg", description: "Premium leather travel handbag with elegant finish." },
  { name: "Anne Klein Signature", category: "handbags", price: 28999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/Ruched_Chain_Baguette_Bag_ofeeze.jpg", description: "Timeless Anne Klein signature luxury bag." },
  { name: "Aurelia Structured Tote", category: "handbags", price: 34789, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763397617/70b20b6b2fa6f2acb0733aca5449ad6f_k7zyk4.jpg", description: "Crafted from buttery-soft Italian leather, the Aurelia Tote blends timeless structure with modern versatility. Designed with a spacious interior and gold-plated hardware, it’s the perfect companion for effortless everyday elegance." },
  { name: "Marbella Quilted Shoulder Bag", category: "handbags", price: 15443, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763397652/fa97a87ed95243ede822a8b63ec26076_jahunb.jpg", description: "Inspired by coastal European glamour, this quilted shoulder bag features premium stitching, a magnetic flap closure, and a sleek chain strap. A refined statement piece for both day and night occasions." },
  { name: "Verona Mini Satchel", category: "handbags", price: 67543, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763397609/884409f3fb034b06532abcde7f23788a_sw44pb.jpg", description: "Compact yet luxurious, the Verona Mini Satchel is sculpted from high-quality calfskin with sculptural edges and a polished top handle. Ideal for carrying essentials without compromising sophistication." },
  { name: "Belgravia Croc Embossed Tote", category: "handbags", price: 23999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763397600/70480087bba22b1f883c999963ee7021_duixr4.jpg", description: "A bold expression of prestige, this tote is crafted with a croc-embossed finish and reinforced structure. Its spacious interior, signature lock charm, and opulent detailing make it a standout icon in any luxury wardrobe." },

  { name: "Chanel No. 5", category: "perfumes", price: 14999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/AI_creator_-_%D0%BD%D0%B0%D0%B2%D1%87%D0%B0%D0%BD%D0%BD%D1%8F_%D0%A1%D0%9E%D0%A6%D0%9C%D0%95%D0%A0%D0%95%D0%96_ah8bq6.jpg", description: "The legendary timeless fragrance by Chanel." },
  { name: "YSL Libre", category: "perfumes", price: 11999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_2_h0ozpr.jpg", description: "Bold, iconic YSL perfume with floral notes." },
  { name: "Imensi Intense", category: "perfumes", price: 8999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350612/download_1_iqcyll.jpg", description: "Rich oriental fragrance with deep woody notes." },
  { name: "YSL Black Opium", category: "perfumes", price: 13999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748350613/download_qjw2gr.jpg", description: "Intense vanilla & coffee blend." },
  { name: "Aurora Elixir", category: "perfumes", price: 23999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398004/4a7fe428e421237facd266ced2a99000_o5fgij.jpg", description: "A radiant blend of jasmine, bergamot, and warm amber that lingers with celestial softness. Aurora Elixir embodies pure sophistication, leaving a trail of luminous elegance with every step." },
  { name: "Velvet Oud Royale", category: "perfumes", price: 15999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398032/5a0d58ede6ba9b441c205bd7dc8cef09_ithopn.jpg", description: "Rich, daring, and irresistibly opulent — this fragrance combines deep oudwood, saffron, and smoky vanilla. A signature scent for those who command presence without saying a word." },
  { name: "Étoile Blanche", category: "perfumes", price: 37543, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398086/82e4863cd3fab176dbf1592e8efe5fc1_qzwqsf.jpg", description: "A fresh, airy fragrance inspired by Parisian mornings. Notes of white rose, musk, and crystalline citrus create a delicate yet captivating aroma that feels effortlessly chic." },
  { name: "Noir Intenso", category: "perfumes", price: 28999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398044/6592528249c889b584db20252441f04b_ok4pw0.jpg", description: "A bold nighttime fragrance infused with black coffee, dark chocolate, and exotic patchouli. Noir Intenso is crafted for the modern icon — intoxicating, mysterious, and unforgettable." },

  { name: "Gold Serpent Chain", category: "neckchains", price: 89999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344126/Jewellery_Photography_For_Abbott_Lyon_enfkre.jpg", description: "18K gold serpentine chain with detail." },
  { name: "Layered Gold Necklace", category: "neckchains", price: 65999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344126/Twenty_Compass_FW22_part2_-_Sarah_Emily_S__zub8jx.jpg", description: "Elegant multi-layered gold necklace." },
  { name: "Diamond Pendant Chain", category: "neckchains", price: 124999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344124/milliaoficial_vs8d7n.jpg", description: "Diamond pendant on premium gold chain." },
  { name: "Herringbone Chain", category: "neckchains", price: 45999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1748344707/7MM_LEROS_HERRINGBONE_CHAIN_mwq964.jpg", description: "Premium classic herringbone chain." },
  { name: "Luna Halo Layered Necklace", category: "neckchains", price: 24999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398435/b79da2438939a45be996f4971c6f2c74_do969t.jpg", description: "A delicate double-layer design featuring a minimalist gold halo pendant paired with a beaded choker chain. Luna Halo adds effortless elegance and soft radiance to any neckline—perfect for both everyday sophistication and evening chic." },
  { name: "Solitaire Circle Charm Necklace", category: "neckchains", price: 18499, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398430/09954f7c0c768f2c0b4ce9794f01fce2_md1njn.jpg", description: "A timeless single-circle charm suspended on a fine gold chain. Its clean, modern silhouette makes it a versatile luxury piece—subtle, graceful, and endlessly stylish." },
  { name: "Twin Orbit Gold Necklace", category: "neckchains", price: 29999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398362/7fce1144a79cf9ca9f11b2f5b2aadb82_h1mgyu.jpg", description: "Featuring two interlocking gold rings symbolizing harmony and connection, this necklace captures refined minimalism. The polished finish and lightweight chain make it a meaningful yet fashionable everyday luxury." },
  { name: "Aurora Leaf Crystal Necklace", category: "neckchains", price: 34999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398348/6551e78989d23e386cccf04bbe254b2e_uhujgz.jpg", description: "An exquisite blend of gold craftsmanship and shimmering leaf-shaped crystals. Each stone is precisely cut to catch the light beautifully, creating a radiant floral-inspired neckline piece that adds soft sparkle to any outfit." },
  { name: "Viera Gold Chevron Necklace", category: "neckchains", price: 22999, image: "https://res.cloudinary.com/dv1cjngnl/image/upload/v1763398359/f5a43c98cc15ca946f78340bc135ad8b_yhrpsm.jpg", description: "A sleek V-shaped pendant crafted in polished gold, symbolizing strength and elegance. Viera’s minimal geometric design sits perfectly on the collarbone, making it an essential contemporary luxury accessory. "}
];

let currentFilter = 'all';
let currentUser = null;

// -----------------------------
// INITIALIZE
// -----------------------------
function init() {
  checkLoginStatus();
  updateCartCount();
  renderProducts();
}

document.addEventListener("DOMContentLoaded", init);

// -----------------------------
// TOAST NOTIFICATION
// -----------------------------
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => {
    toast.className = 'toast';
  }, 3000);
}

// -----------------------------
// PAGE NAVIGATION
// -----------------------------
function showPage(page) {
  const pages = [
    'homePage',
    'aboutPage',
    'contactPage',
    'loginPage',
    'registerPage',
    'cartPage'
  ];

  pages.forEach(p => {
    document.getElementById(p).classList.add('hidden');
  });

  document.getElementById(page + 'Page').classList.remove('hidden');

  if (page === 'cart') {
    renderCart();
  }

  document.getElementById('navLinks').classList.remove('active');
}

// -----------------------------
// AUTH SYSTEM
// -----------------------------
function checkLoginStatus() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  if (user) {
    currentUser = user;
    document.getElementById('loginLink').classList.add('hidden');
    document.getElementById('registerLink').classList.add('hidden');
    document.getElementById('logoutLink').classList.remove('hidden');
  } else {
    document.getElementById('loginLink').classList.remove('hidden');
    document.getElementById('registerLink').classList.remove('hidden');
    document.getElementById('logoutLink').classList.add('hidden');
  }
}

function register(e) {
  e.preventDefault();

  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.find(u => u.email === email)) {
    showToast('User already exists!', 'error');
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  showToast('Registration successful!', 'success');
  showPage('login');
}

function login(e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    currentUser = user;
    checkLoginStatus();

    showToast(`Welcome back, ${user.name}!`);
    showPage('home');
  } else {
    showToast('Invalid login credentials!', 'error');
  }
}

function logout() {
  localStorage.removeItem('loggedInUser');
  currentUser = null;

  checkLoginStatus();
  showToast("Logged out");
  showPage('home');
}

// -----------------------------
// PRODUCT RENDERING
// -----------------------------
function renderProducts() {
  const container = document.getElementById('productContainer');
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();

  let filtered = products;

  if (currentFilter !== 'all') {
    filtered = filtered.filter(p => p.category === currentFilter);
  }

  if (searchTerm) {
    filtered = filtered.filter(
      p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    );
  }

  container.innerHTML = filtered
    .map(
      product => `
        <div class="product" onclick="openModal(${products.indexOf(product)})">
          <img src="${product.image}" class="product-img">
          <div class="product-info">
            <h4>${product.name}</h4>
            <p class="product-category">${product.category}</p>
            <p class="product-price">₹${product.price.toLocaleString()}</p>
            <button class="btn" onclick="event.stopPropagation(); addToCart(${products.indexOf(product)})">
              <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      `
    )
    .join('');
}

function filterByCategory(category) {
  currentFilter = category;

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');
  renderProducts();
}

function filterProducts() {
  renderProducts();
}

// -----------------------------
// PRODUCT MODAL
// -----------------------------
function openModal(index) {
  const product = products[index];
  const modal = document.getElementById('productModal');
  const modalBody = document.getElementById('modalBody');

  modalBody.innerHTML = `
    <img src="${product.image}" class="modal-img">
    <h2 style="color: var(--primary);">${product.name}</h2>
    <p style="color: var(--light-text);">${product.category}</p>
    <p style="font-size: 2rem; color: var(--accent); font-weight: 700;">₹${product.price.toLocaleString()}</p>
    <p style="line-height:1.6;">${product.description}</p>

    <button class="btn" onclick="addToCart(${index}); closeModal();">
      <i class="fas fa-shopping-cart"></i> Add to Cart
    </button>
  `;

  modal.classList.add('show');
}

function closeModal() {
  document.getElementById('productModal').classList.remove('show');
}

document.getElementById('productModal').addEventListener('click', e => {
  if (e.target.id === 'productModal') closeModal();
});

// -----------------------------
// CART SYSTEM
// -----------------------------
function addToCart(index) {
  if (!currentUser) {
    showToast('Please login to add items!', 'error');
    showPage('login');
    return;
  }

  const product = products[index];
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existing = cart.find(i => i.name === product.name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showToast("Added to cart");
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.getElementById('cartCount').textContent = count;
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  if (cart.length === 0) {
    cartItems.innerHTML = `<p style="text-align:center;color:gray;padding:2rem;">Your cart is empty</p>`;
    cartTotal.innerHTML = "";
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item, index) => `
    <div class="cart-item">
      <img src="${item.image}">
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p>${item.category}</p>
        <p class="price">₹${item.price.toLocaleString()}</p>
      </div>

      <div>
        <p>Quantity: ${item.quantity}</p>
        <button class="btn" style="background:#f44336;" onclick="removeFromCart(${index})">Remove</button>
      </div>
    </div>
  `
    )
    .join('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.innerHTML = `Total: ₹${total.toLocaleString()}`;
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
  showToast("Removed from cart");
}

// -----------------------------
// MOBILE MENU
// -----------------------------
document.getElementById('mobile-menu').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
});