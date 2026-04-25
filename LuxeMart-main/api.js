/**
 * api.js — LuxeMart Frontend ↔ Backend API Client
 * Connects the frontend to the Node.js Express backend
 */

const API_BASE = 'https://luxemart-2-875l.onrender.com/api/v1';

// ── Token management ────────────────────────────────────────
const getToken = () => localStorage.getItem('luxemart_token');
const setToken = (t) => localStorage.setItem('luxemart_token', t);
const clearToken = () => localStorage.removeItem('luxemart_token');

// ── Base fetch wrapper ───────────────────────────────────────
async function apiFetch(endpoint, options = {}) {
  const token = getToken();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    },
    ...options
  };
  const res = await fetch(`${API_BASE}${endpoint}`, config);
  const data = await res.json();
  if (!res.ok) throw { status: res.status, message: data.error || 'Request failed', data };
  return data;
}

// ═══════════════════════════════════════════════════════════
// AUTH API
// ═══════════════════════════════════════════════════════════
const AuthAPI = {
  register: (body) => apiFetch('/auth/register', { method: 'POST', body: JSON.stringify(body) }),
  login:    (body) => apiFetch('/auth/login',    { method: 'POST', body: JSON.stringify(body) }),
  me:       ()     => apiFetch('/auth/me'),
  logout:   ()     => apiFetch('/auth/logout', { method: 'POST' })
};

// ═══════════════════════════════════════════════════════════
// PRODUCTS API
// ═══════════════════════════════════════════════════════════
const ProductsAPI = {
  getAll:    (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return apiFetch(`/products${qs ? '?' + qs : ''}`);
  },
  getById:   (id)          => apiFetch(`/products/${id}`),
  getByCategory: (cat, params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return apiFetch(`/products/category/${cat}${qs ? '?' + qs : ''}`);
  },
  search:    (query)       => apiFetch(`/products?search=${encodeURIComponent(query)}`),
  addReview: (id, body)    => apiFetch(`/products/${id}/review`, { method: 'POST', body: JSON.stringify(body) }),
};

// ═══════════════════════════════════════════════════════════
// ORDERS API
// ═══════════════════════════════════════════════════════════
const OrdersAPI = {
  place:  (body)   => apiFetch('/orders',    { method: 'POST', body: JSON.stringify(body) }),
  getAll: (params) => apiFetch(`/orders?${new URLSearchParams(params || {})}`),
  getById:(id)     => apiFetch(`/orders/${id}`),
  cancel: (id)     => apiFetch(`/orders/${id}`, { method: 'DELETE' }),
};

// ═══════════════════════════════════════════════════════════
// USERS API
// ═══════════════════════════════════════════════════════════
const UsersAPI = {
  getProfile:     ()     => apiFetch('/users/profile'),
  updateProfile:  (body) => apiFetch('/users/profile', { method: 'PUT', body: JSON.stringify(body) }),
  getWishlist:    ()         => apiFetch('/users/wishlist'),
  updateWishlist: (wishlist) => apiFetch('/users/wishlist', { method: 'PUT', body: JSON.stringify({ wishlist }) }),
  getCart:        ()     => apiFetch('/users/cart'),
  updateCart:     (cart) => apiFetch('/users/cart', { method: 'PUT', body: JSON.stringify({ cart }) }),
  changePassword: (body) => apiFetch('/users/change-password', { method: 'PUT', body: JSON.stringify(body) }),
};

// ═══════════════════════════════════════════════════════════
// AI API
// ═══════════════════════════════════════════════════════════
const AIAPI = {
  demoStyleAdvice: (occasion) => apiFetch(`/ai/demo-style-advice?occasion=${occasion}`),
  styleAdvice:     (body)     => apiFetch('/ai/style-advice', { method: 'POST', body: JSON.stringify(body) }),
  chat:            (body)     => apiFetch('/ai/chat',         { method: 'POST', body: JSON.stringify(body) }),
};

// ═══════════════════════════════════════════════════════════
// STREAM API — Server-Sent Events (live data)
// ═══════════════════════════════════════════════════════════
const StreamAPI = {
  connectLive: (onData, onEnd) => {
    const es = new EventSource(`${API_BASE}/stream/live`);
    es.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.event === 'end') { es.close(); onEnd && onEnd(); }
      else { onData && onData(data); }
    };
    es.onerror = () => es.close();
    return es;
  }
};

// ═══════════════════════════════════════════════════════════
// Socket.IO Chat  (loaded from CDN in HTML)
// ═══════════════════════════════════════════════════════════
let chatSocket = null;
const ChatAPI = {
  connect: (username, room) => {
    if (typeof io === 'undefined') {
      console.warn('Socket.IO not loaded');
      return null;
    }
    chatSocket = io('https://luxemart-2-875l.onrender.com');
    chatSocket.emit('join_room', { username, room });
    return chatSocket;
  },
  sendMessage: (message, room) => {
    if (chatSocket) chatSocket.emit('send_message', { message, room });
  },
  disconnect: () => {
    if (chatSocket) { chatSocket.disconnect(); chatSocket = null; }
  }
};

// ═══════════════════════════════════════════════════════════
// LIVE STATS  — connects to SSE for real-time dashboard
// ═══════════════════════════════════════════════════════════
function startLiveStats(callback) {
  return StreamAPI.connectLive(callback, () => {
    console.log('[SSE] Live stats stream ended');
  });
}

// ═══════════════════════════════════════════════════════════
// BACKEND STATUS CHECK
// ═══════════════════════════════════════════════════════════
async function checkBackendStatus() {
  try {
    const res = await fetch('https://luxemart-2-875l.onrender.com/api/health', { signal: AbortSignal.timeout(3000) });
    return res.ok;
  } catch {
    return false;
  }
}

// ─────────────────────────────────────────────────────────────
// AUTO-LOAD: Try to fetch products from backend
// Falls back to local JS data if backend not available
// ─────────────────────────────────────────────────────────────
async function loadProductsFromBackend(gridId, category, limit = 6) {
  try {
    const isOnline = await checkBackendStatus();
    if (!isOnline) return false;

    const data = await ProductsAPI.getAll({ category, limit });
    if (data.success && data.data.length > 0) {
      renderBackendProducts(data.data, gridId);
      return true;
    }
    return false;
  } catch (err) {
    console.warn(`[API] Backend unavailable for ${category} — using local data`);
    return false;
  }
}

// ── Render backend products into grid ─────────────────────
function renderBackendProducts(products, gridId) {
  const el = document.getElementById(gridId);
  if (!el) return;

  el.innerHTML = products.map((p, i) => {
    const stars = [1,2,3,4,5].map(n =>
      `<i class="fa-solid fa-star" style="font-size:0.7rem;color:${n <= Math.round(p.ratings?.average || 4) ? 'var(--neon-gold)' : 'var(--text-muted)'}"></i>`
    ).join('');

    const badge = p.badge ? `<span class="badge badge-${p.badge}">${p.badge.toUpperCase()}</span>` : '';
    const trending = p.isTrending ? `<div class="trending-badge"><i class="fa-solid fa-fire" style="font-size:0.6rem"></i> Trending</div>` : '';

    const adaptedP = {
      name: p.name,
      brand: p.brand || 'LuxeMart',
      price: p.price,
      original: p.originalPrice || p.price,
      discount: p.discount || 0,
      rating: p.ratings?.average || 4,
      reviews: p.ratings?.count || 0,
      badge: p.badge || '',
      img: p.images?.[0] || 'https://via.placeholder.com/400x533'
    };
    const pStr = encodeURIComponent(JSON.stringify(adaptedP)).replace(/'/g, "%27");
    const safeName = encodeURIComponent(p.name).replace(/'/g, "%27");

    return `
    <div class="product-card" data-id="${gridId}-api-${i}" data-product-id="${p._id}">
      <div class="prod-img-wrap">
        ${badge}${trending}
        <img src="${p.images?.[0] || 'https://via.placeholder.com/400x533'}" alt="${p.name}" loading="lazy">
        <div class="prod-overlay">
          <button class="quick-btn" onclick="openQuickView('${pStr}', '${gridId}-api-${i}');event.stopPropagation()">Quick View</button>
          <button class="wishlist-btn" onclick="apiToggleWishlist('${p._id}','${p.name}');event.stopPropagation()">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
      <div class="prod-info">
        <div class="prod-brand">${p.brand}</div>
        <div class="prod-name">${p.name}</div>
        <div class="prod-rating">
          <div class="stars">${stars}</div>
          <span class="rating-count">${p.ratings?.average || 4} (${(p.ratings?.count || 0).toLocaleString()})</span>
        </div>
        <div class="prod-price">
          <span class="price-current">₹${p.price.toLocaleString()}</span>
          <span class="price-original">₹${p.originalPrice.toLocaleString()}</span>
          <span class="price-discount">${p.discount}% OFF</span>
        </div>
        <button class="add-cart-btn" id="cartBtn-${gridId}-api-${i}"
          onclick="addToCart('${p.name}','${gridId}-api-${i}');event.stopPropagation()">
          <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
      </div>
    </div>`;
  }).join('');
}

// ── API Wishlist toggle (requires login) ─────────────────────
async function apiToggleWishlist(productId, name) {
  const token = getToken();
  if (!token) {
    showToast('Please login to add to wishlist', 'fa-lock');
    setTimeout(() => openAuth(), 800);
    return;
  }
  try {
    const res = await UsersAPI.toggleWishlist(productId);
    const icon = res.action === 'added' ? 'fa-heart' : 'fa-heart-broken';
    showToast(`${name} ${res.action} wishlist!`, icon);
    updateWishlistCount();
  } catch (err) {
    showToast(err.message || 'Error updating wishlist', 'fa-xmark');
  }
}

// ── API Login (replaces localStorage-only login) ─────────────
async function apiLogin(email, password) {
  const res = await AuthAPI.login({ email, password });
  if (res.success && res.token) {
    setToken(res.token);
    localStorage.setItem('luxemart_user', JSON.stringify(res.user));
    try {
      const [cartRes, wishRes] = await Promise.all([
        UsersAPI.getCart().catch(()=>({success:false})),
        UsersAPI.getWishlist().catch(()=>({success:false}))
      ]);
      if (cartRes.success && cartRes.data) {
        localStorage.setItem('cart', JSON.stringify(cartRes.data));
        if (typeof updateCartBadge === 'function') updateCartBadge();
      }
      if (wishRes.success && wishRes.data) {
        localStorage.setItem('wishlist', JSON.stringify(wishRes.data));
        if (typeof updateWishlistCount === 'function') updateWishlistCount();
      }
    } catch(e) {}
  }
  return res;
}

// ── API Register ─────────────────────────────────────────────
async function apiRegister(data) {
  const res = await AuthAPI.register(data);
  if (res.success && res.token) {
    setToken(res.token);
    localStorage.setItem('luxemart_user', JSON.stringify(res.user));
  }
  return res;
}

// ── API Logout ───────────────────────────────────────────────
async function apiLogout() {
  try { await AuthAPI.logout(); } catch {}
  clearToken();
  localStorage.removeItem('luxemart_user');
  localStorage.removeItem('cart');
  localStorage.removeItem('wishlist');
  if (typeof updateCartBadge === 'function') updateCartBadge();
  if (typeof updateWishlistCount === 'function') updateWishlistCount();
}

// ── Get current user ─────────────────────────────────────────
function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem('luxemart_user')); } catch { return null; }
}

// ── Update navbar based on auth state ────────────────────────
function updateNavbarAuthState() {
  const user = getCurrentUser();
  const loginBtn = document.querySelector('.login-btn');
  if (!loginBtn) return;

  if (user) {
    loginBtn.textContent = user.firstName || user.name?.split(' ')[0] || 'Account';
    loginBtn.onclick = () => window.location.href = 'account.html';
  } else {
    loginBtn.textContent = 'Login';
    loginBtn.onclick = openAuth;
  }
}

// ── Expose to window ─────────────────────────────────────────
window.LuxeAPI = {
  Auth: AuthAPI, Products: ProductsAPI, Orders: OrdersAPI,
  Users: UsersAPI, AI: AIAPI, Chat: ChatAPI, Stream: StreamAPI
};
window.apiLogin     = apiLogin;
window.apiRegister  = apiRegister;
window.apiLogout    = apiLogout;
window.getCurrentUser = getCurrentUser;
window.apiToggleWishlist = apiToggleWishlist;
window.loadProductsFromBackend = loadProductsFromBackend;
window.checkBackendStatus = checkBackendStatus;
window.startLiveStats = startLiveStats;
