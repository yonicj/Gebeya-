const STORAGE_KEY = 'batu_seller_hub_v1';

function read() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        sellers: [],
        products: [],
        categories: [],
        orders: [],
        currentSellerId: null,
      };
    }
    return JSON.parse(raw);
  } catch (e) {
    return {
      sellers: [],
      products: [],
      categories: [],
      orders: [],
      currentSellerId: null,
    };
  }
}

function write(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getData() {
  return read();
}

function saveData(partial) {
  const data = getData();
  const merged = { ...data, ...partial };
  write(merged);
  return merged;
}

export function registerSeller({ username, email, password, sellerName, storeName, phone, location, description }) {
  const data = getData();
  if (!username || !username.trim()) {
    throw new Error('Username is required.');
  }
  const existingUsername = data.sellers.find((s) => s.username.toLowerCase() === username.toLowerCase());
  if (existingUsername) {
    throw new Error('That username is already taken.');
  }
  const existingEmail = data.sellers.find((s) => s.email.toLowerCase() === email.toLowerCase());
  if (existingEmail) {
    throw new Error('A seller with that email already exists.');
  }
  if (!/^\d{6}$/.test(password)) {
    throw new Error('Password must be a 6-digit number.');
  }
  const id = `seller_${Date.now()}`;
  const newSeller = {
    id,
    username,
    email,
    password,
    sellerName,
    storeName,
    phone,
    location,
    description,
    logo: '',
    cover: '',
    registeredAt: new Date().toISOString(),
    verified: true,
    resetCode: null,
    resetExpires: null,
  };
  data.sellers = [newSeller, ...data.sellers];
  write(data);
  return newSeller;
}

export function signInSeller(emailOrUsername, password) {
  const data = getData();
  const seller = data.sellers.find(
    (s) =>
      (s.email.toLowerCase() === emailOrUsername.toLowerCase() ||
        s.username.toLowerCase() === emailOrUsername.toLowerCase()) &&
      s.password === password
  );
  if (!seller) {
    throw new Error('Username/email or password is incorrect.');
  }
  data.currentSellerId = seller.id;
  write(data);
  return seller;
}

export function signOutSeller() {
  const data = getData();
  data.currentSellerId = null;
  write(data);
}

export function getCurrentSeller() {
  const data = getData();
  return data.sellers.find((s) => s.id === data.currentSellerId) || null;
}

export function isSellerAuthenticated() {
  return Boolean(getCurrentSeller());
}

export function requestPasswordReset(email) {
  const data = getData();
  const seller = data.sellers.find((s) => s.email.toLowerCase() === email.toLowerCase());
  if (!seller) {
    throw new Error('No seller found with that email.');
  }
  const code = String(Math.floor(100000 + Math.random() * 900000));
  seller.resetCode = code;
  seller.resetExpires = Date.now() + 15 * 60 * 1000;
  write(data);
  return code;
}

export function verifyPasswordReset(email, code, newPassword) {
  const data = getData();
  const seller = data.sellers.find((s) => s.email.toLowerCase() === email.toLowerCase());
  if (!seller) {
    throw new Error('No seller found with that email.');
  }
  if (seller.resetCode !== code || Date.now() > seller.resetExpires) {
    throw new Error('Verification code is invalid or expired.');
  }
  if (!/^\d{6}$/.test(newPassword)) {
    throw new Error('Password must be a 6-digit number.');
  }
  seller.password = newPassword;
  seller.resetCode = null;
  seller.resetExpires = null;
  write(data);
  return true;
}

export function updateSellerProfile(profile) {
  const data = getData();
  const seller = getCurrentSeller();
  if (!seller) {
    throw new Error('Not authenticated.');
  }
  data.sellers = data.sellers.map((s) =>
    s.id === seller.id ? { ...s, ...profile } : s
  );
  write(data);
  return data.sellers.find((s) => s.id === seller.id);
}

export function getStoreProfile() {
  const seller = getCurrentSeller();
  return seller
    ? {
        storeName: seller.storeName,
        logo: seller.logo,
        cover: seller.cover,
        description: seller.description,
        phone: seller.phone,
        location: seller.location,
      }
    : null;
}

export function getSellerProducts(sellerId) {
  const data = getData();
  if (sellerId) {
    return (data.products || []).filter((p) => p.sellerId === sellerId);
  }
  return data.products || [];
}

export function addProduct(product) {
  const seller = getCurrentSeller();
  if (!seller) {
    throw new Error('You must be signed in to add products.');
  }
  const data = getData();
  const id = Date.now();
  const newProduct = {
    ...product,
    id,
    sellerId: seller.id,
    shopName: seller.storeName || seller.sellerName,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  data.products = [newProduct, ...(data.products || [])];
  write(data);
  return newProduct;
}

export function updateProduct(id, patch) {
  const seller = getCurrentSeller();
  if (!seller) {
    throw new Error('You must be signed in to update products.');
  }
  const data = getData();
  let authorized = false;
  data.products = (data.products || []).map((p) => {
    if (p.id === id && p.sellerId === seller.id) {
      authorized = true;
      return { ...p, ...patch, updatedAt: new Date().toISOString() };
    }
    return p;
  });
  if (!authorized) {
    throw new Error('You can only edit products you created.');
  }
  write(data);
  return data.products.find((p) => p.id === id);
}

export function deleteProduct(id) {
  const seller = getCurrentSeller();
  if (!seller) {
    throw new Error('You must be signed in to delete products.');
  }
  const data = getData();
  const product = (data.products || []).find((p) => p.id === id);
  if (!product || product.sellerId !== seller.id) {
    throw new Error('You can only delete products you created.');
  }
  data.products = (data.products || []).filter((p) => p.id !== id);
  write(data);
}

export function addCategory(cat) {
  const seller = getCurrentSeller();
  if (!seller) {
    throw new Error('You must be signed in to add categories.');
  }
  const data = getData();
  const id = `c_${Date.now()}`;
  const newCat = { id, sellerId: seller.id, ...cat };
  data.categories = [newCat, ...(data.categories || [])];
  write(data);
  return newCat;
}

export function updateCategory(id, patch) {
  const seller = getCurrentSeller();
  if (!seller) {
    throw new Error('You must be signed in to update categories.');
  }
  const data = getData();
  data.categories = (data.categories || []).map((c) =>
    c.id === id && c.sellerId === seller.id ? { ...c, ...patch } : c
  );
  write(data);
}

export function deleteCategory(id) {
  const seller = getCurrentSeller();
  if (!seller) {
    throw new Error('You must be signed in to delete categories.');
  }
  const data = getData();
  data.categories = (data.categories || []).filter((c) => c.id !== id || c.sellerId !== seller.id);
  write(data);
}

export function getCategories(sellerId) {
  const data = getData();
  if (sellerId) {
    return (data.categories || []).filter((c) => c.sellerId === sellerId);
  }
  return data.categories || [];
}

export function clearHub() {
  localStorage.removeItem(STORAGE_KEY);
}
