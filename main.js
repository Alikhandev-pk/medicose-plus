// ==========================================
// 🚀 PRELOADER & NAVIGATION
// ==========================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        }, 800); 
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const navLinks = document.getElementById('nav-links');
    const menuOverlay = document.getElementById('menu-overlay');

    function toggleMenu() {
        if(navLinks && menuOverlay) {
            navLinks.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        }
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', toggleMenu);

    updateCartCount();

    const productContainer = document.getElementById('product-container');
    if (productContainer) {
        const pageCategory = productContainer.getAttribute('data-category');
        let filteredProducts = (typeof products !== 'undefined') ? products : [];
        
        if (pageCategory === "trending") {
            const topMeds = products.filter(p => p.category === 'medicines').slice(0, 4);
            const topCosmetics = products.filter(p => p.category === 'cosmetic-creams').slice(0, 4);
            const topMedicated = products.filter(p => p.category === 'medicated-creams').slice(0, 4);
            filteredProducts = [...topMeds, ...topCosmetics, ...topMedicated];
        } 
        else if (pageCategory && pageCategory !== "all") {
            filteredProducts = products.filter(p => p.category === pageCategory);
        }
        displayProducts(filteredProducts, productContainer);
    }
    
    if(document.getElementById('cart-items')) { displayCartItems(); }
});

// ==========================================
// 🛒 CART LOGIC
// ==========================================
function getCart() { return JSON.parse(localStorage.getItem('medicoseCart')) || []; }

function updateCartCount() {
    const total = getCart().reduce((sum, item) => sum + item.quantity, 0);
    const dB = document.getElementById('desktop-cart-badge');
    const mB = document.getElementById('mobile-cart-badge');
    if(dB) dB.innerText = total;
    if(mB) mB.innerText = total;
}

function addToCart(id, name) {
    let cart = getCart();
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) { existingItem.quantity += 1; } 
    else { cart.push({ ...product, quantity: 1 }); }
    localStorage.setItem('medicoseCart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${name} added to cart!`);
}

function showToast(message) {
    let container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.transform = 'translateX(120%)'; setTimeout(() => toast.remove(), 400); }, 2500);
}

// ==========================================
// 🛍️ CHECKOUT ENGINE (FIXED)
// ==========================================
function showCheckoutForm() {
    if (getCart().length === 0) return alert("Cart is empty!");
    document.getElementById('checkout-form').style.display = 'block';
    document.getElementById('proceed-to-form').style.display = 'none';
    document.getElementById('checkout-form').scrollIntoView({ behavior: 'smooth' });
}

function displayCartItems() {
    const cart = getCart();
    const container = document.getElementById('cart-items');
    let total = 0;
    container.innerHTML = "";
    if (cart.length === 0) { container.innerHTML = "<h3>Cart Empty</h3>"; return; }
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        container.innerHTML += `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 15px; border-bottom: 1px solid #f1f5f9; gap: 15px;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <img src="${item.image}" style="width: 70px !important; height: 70px !important; object-fit: cover; border-radius: 10px;">
                    <div><h4 style="margin:0;">${item.name}</h4><p style="margin:0; font-size:0.9rem;">Rs ${item.price} x ${item.quantity}</p></div>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
            </div>`;
    });
    document.getElementById('cart-total-price').innerText = total;
}

function removeFromCart(index) {
    let cart = getCart(); cart.splice(index, 1);
    localStorage.setItem('medicoseCart', JSON.stringify(cart));
    displayCartItems(); updateCartCount();
}

// THE FINAL FIX: SINGLE BUTTON DUAL ACTION
async function handleOrder() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const address = document.getElementById('cust-address').value;
    const cart = getCart();
    const totalPrice = document.getElementById('cart-total-price').innerText;
    const btn = document.getElementById('btn-place-order');

    if (!name || !phone || !address) return alert("Please fill all delivery details!");

    // Disable button to show loading
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Order...';

    let msg = `--- *NEW ORDER: MEDICOSE+* ---\n\n`;
    msg += `*Customer:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}\n\n`;
    msg += `*Items Ordered:* \n`;
    cart.forEach(item => { msg += `• ${item.name} (x${item.quantity}) - Rs ${item.price * item.quantity}\n`; });
    msg += `\n*TOTAL AMOUNT: Rs ${totalPrice}*`;

    try {
        // 1. Send to Formspree (Email) in background
        await fetch("https://formspree.io/f/mkoypgbw", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone, address, order: msg, total: totalPrice })
        });

        // 2. Open WhatsApp Redirect
        const waNumber = "923001234567"; 
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');

        // 3. SHOW PREMIUM SUCCESS POPUP (CRITICAL FIX)
        document.getElementById('success-popup').style.display = 'flex';

    } catch (e) {
        alert("Something went wrong with Email, but we are opening WhatsApp for you!");
        window.open(`https://wa.me/923001234567?text=${encodeURIComponent(msg)}`, '_blank');
    }
}

// Function to clear everything after success
function finalizeOrder() {
    localStorage.removeItem('medicoseCart');
    window.location.href = "index.html";
}

function displayProducts(pToD, container) {
    container.innerHTML = ""; 
    pToD.forEach((p) => {
        let b = p.badge ? `<span class="badge-tag">${p.badge}</span>` : '';
        container.innerHTML += `
            <div class="product-card">${b}
                <img src="${p.image}" alt="${p.name}" class="product-image">
                <div class="product-info">
                    <h3>${p.name}</h3><p class="product-price">Rs ${p.price}</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${p.id}, '${p.name.replace(/'/g, "\\'")}')">
                        <i class="fa-solid fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>`;
    });
}