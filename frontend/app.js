// -----------------------------
// API CONFIGURATION
// -----------------------------
const API_URL = 'http://localhost:5000/api';
let authToken = localStorage.getItem('authToken');

// Set default headers for API requests
const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }
  return headers;
};

// -----------------------------
// STATE MANAGEMENT
// -----------------------------
let products = [];
let currentFilter = 'all';
let currentUser = null;

// -----------------------------
// INITIALIZE
// -----------------------------
async function init() {
  await checkLoginStatus();
  await loadProducts();
  await updateCartCount();
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
async function checkLoginStatus() {
  authToken = localStorage.getItem('authToken');

  if (authToken) {
    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        headers: getHeaders(),
      });

      if (response.ok) {
        const data = await response.json();
        currentUser = data.user;
        
        document.getElementById('loginLink').classList.add('hidden');
        document.getElementById('registerLink').classList.add('hidden');
        document.getElementById('logoutLink').classList.remove('hidden');
      } else {
        localStorage.removeItem('authToken');
        authToken = null;
        currentUser = null;
        showAuthLinks();
      }
    } catch (error) {
      console.error('Auth check error:', error);
      showAuthLinks();
    }
  } else {
    showAuthLinks();
  }
}

function showAuthLinks() {
  document.getElementById('loginLink').classList.remove('hidden');
  document.getElementById('registerLink').classList.remove('hidden');
  document.getElementById('logoutLink').classList.add('hidden');
}

async function register(e) {
  e.preventDefault();

  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('authToken', data.token);
      authToken = data.token;
      currentUser = data.user;
      
      showToast('Registration successful!', 'success');
      checkLoginStatus();
      showPage('home');
    } else {
      showToast(data.message || 'Registration failed', 'error');
    }
  } catch (error) {
    showToast('Network error. Please try again.', 'error');
    console.error('Register error:', error);
  }
}

async function login(e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('authToken', data.token);
      authToken = data.token;
      currentUser = data.user;
      
      showToast(`Welcome back, ${data.user.name}!`);
      checkLoginStatus();
      showPage('home');
    } else {
      showToast(data.message || 'Login failed', 'error');
    }
  } catch (error) {
    showToast('Network error. Please try again.', 'error');
    console.error('Login error:', error);
  }
}

async function logout() {
  try {
    await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: getHeaders(),
    });
  } catch (error) {
    console.error('Logout error:', error);
  }

  localStorage.removeItem('authToken');
  authToken = null;
  currentUser = null;

  checkLoginStatus();
  showToast("Logged out");
  showPage('home');
}

// -----------------------------
// PRODUCT MANAGEMENT
// -----------------------------
async function loadProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();

    if (response.ok) {
      products = data.products;
      renderProducts();
    } else {
      showToast('Failed to load products', 'error');
    }
  } catch (error) {
    showToast('Network error loading products', 'error');
    console.error('Load products error:', error);
  }
}

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
        <div class="product" onclick="openModal('${product._id}')">
          <img src="${product.image}" class="product-img">
          <div class="product-info">
            <h4>${product.name}</h4>
            <p class="product-category">${product.category}</p>
            <p class="product-price">₹${product.price.toLocaleString()}</p>
            <button class="btn" onclick="event.stopPropagation(); addToCart('${product._id}')">
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
function openModal(productId) {
  const product = products.find(p => p._id === productId);
  
  if (!product) return;

  const modal = document.getElementById('productModal');
  const modalBody = document.getElementById('modalBody');

  modalBody.innerHTML = `
    <img src="${product.image}" class="modal-img">
    <h2 style="color: var(--primary);">${product.name}</h2>
    <p style="color: var(--light-text);">${product.category}</p>
    <p style="font-size: 2rem; color: var(--accent); font-weight: 700;">₹${product.price.toLocaleString()}</p>
    <p style="line-height:1.6;">${product.description}</p>

    <button class="btn" onclick="addToCart('${product._id}'); closeModal();">
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
async function addToCart(productId) {
  if (!currentUser) {
    showToast('Please login to add items!', 'error');
    showPage('login');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/cart`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ productId, quantity: 1 }),
    });

    const data = await response.json();

    if (response.ok) {
      showToast("Added to cart");
      updateCartCount();
    } else {
      showToast(data.message || 'Failed to add to cart', 'error');
    }
  } catch (error) {
    showToast('Network error', 'error');
    console.error('Add to cart error:', error);
  }
}

async function updateCartCount() {
  if (!currentUser) {
    document.getElementById('cartCount').textContent = '0';
    return;
  }

  try {
    const response = await fetch(`${API_URL}/cart`, {
      headers: getHeaders(),
    });

    const data = await response.json();

    if (response.ok) {
      const count = data.cart.items.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById('cartCount').textContent = count;
    }
  } catch (error) {
    console.error('Update cart count error:', error);
  }
}

async function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  if (!currentUser) {
    cartItems.innerHTML = `<p style="text-align:center;color:gray;padding:2rem;">Please login to view your cart</p>`;
    cartTotal.innerHTML = "";
    return;
  }

  try {
    const response = await fetch(`${API_URL}/cart`, {
      headers: getHeaders(),
    });

    const data = await response.json();

    if (response.ok && data.cart.items.length > 0) {
      cartItems.innerHTML = data.cart.items
        .map(
          (item) => `
        <div class="cart-item">
          <img src="${item.product.image}">
          <div class="cart-item-info">
            <h3>${item.product.name}</h3>
            <p>${item.product.category}</p>
            <p class="price">₹${item.product.price.toLocaleString()}</p>
          </div>

          <div>
            <p>Quantity: ${item.quantity}</p>
            <button class="btn" style="background:#f44336;" onclick="removeFromCart('${item._id}')">Remove</button>
          </div>
        </div>
      `
        )
        .join('');

      const total = data.cart.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      cartTotal.innerHTML = `Total: ₹${total.toLocaleString()}`;
    } else {
      cartItems.innerHTML = `<p style="text-align:center;color:gray;padding:2rem;">Your cart is empty</p>`;
      cartTotal.innerHTML = "";
    }
  } catch (error) {
    showToast('Failed to load cart', 'error');
    console.error('Render cart error:', error);
  }
}

async function removeFromCart(itemId) {
  try {
    const response = await fetch(`${API_URL}/cart/${itemId}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });

    if (response.ok) {
      showToast("Removed from cart");
      updateCartCount();
      renderCart();
    } else {
      showToast('Failed to remove item', 'error');
    }
  } catch (error) {
    showToast('Network error', 'error');
    console.error('Remove from cart error:', error);
  }
}

// -----------------------------
// MOBILE MENU
// -----------------------------
document.getElementById('mobile-menu').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
});