'use strict';
/**
 * E-commerce functionality for a Irani Farsh store
 * Includes product display, shopping cart, and UI interactions
 */

// ======================
// DOM ELEMENT SELECTORS
// ======================

// Banner image toggle button and elements
// prettier-ignore
const imageToggleBtn = document.querySelector('.banner__image-toggle-btn');
const images = document.querySelectorAll('.image');
// Product detail elements
const productDetailsTitle = document.querySelector('.product__details-title');
// prettier-ignore
const productDetailsCaption = document.querySelector('.product__details-caption');
const featureQuality = document.querySelector('.feature__quality');
const featureColor = document.querySelector('.feature__color');
const featureShape = document.querySelector('.feature__shape');
const featureType1 = document.querySelector('.feature__type-1');
const featureType2 = document.querySelector('.feature__type-2');
const featureType3 = document.querySelector('.feature__type-3');
const sellerCompanyName = document.querySelector('.seller__company-name');
const sellerPriceValue = document.querySelector('.seller__price-value');
const productDetailsSize = document.querySelector('.product__details-size2');
const breadcrumb = document.querySelector('.breadcrumb__link--active');
const breadcrumbCarpetType = document.querySelector('.breadcrumb__carpet-type');
// prettier-ignore
const productImagePreview = document.querySelector('.product__gallery-image-preview');
const featureBtn = document.querySelector('.feature__btn');
// prettier-ignore
const productGalleryImage = document.querySelectorAll('.product__gallery-image');
const productDetailsBottom = document.querySelector('.product__details-bottom');
const productFeatures = document.querySelector('.product__features');
const productGalleryBottom = document.querySelector('.product__gallery-bottom');
const productDetails = document.querySelector('.product__details');
const productGalleryTop = document.querySelector('.product__gallery-top');
const productDetailsMiddle = document.querySelector('.product__details-middle');
const productFeature = document.querySelectorAll('.product__feature');
const featureLink = document.querySelector('.feature__link');
const addToBasketBtn = document.querySelector('.seller__btn');
const eyeIcons = document.querySelectorAll('.fa-eye-slash');

// ======================
// PRODUCT DATA
// ======================

/**
 * Array of product objects containing all carpet products data
 * Each product has:
 * - id: Unique identifier
 * - slug: URL-friendly identifier
 * - Various product attributes (title, price, etc.)
 * - images: Array of image paths
 */

const products = [
  {
    id: 1,
    slug: 'mahsareh',
    alias: 'ماهساره',
    caption: 'فرش ماهساره / فرش ماشینی ماهساره',
    title: 'فرش ماشینی ماهساره طرح آترینا زمینه آبی',
    quality: 'درجه یک',
    color: 'آبی',
    shape: 'مستطیل',
    type: 'ماشینی',
    typeNo1: 'پلی استر و پنبه',
    typeNo2: 'پلی استر و پنبه',
    typeNo3: 'اکلیریک هیت ست شده',
    company: 'شرکت فرش سهند',
    price: '۱۳/۵۰۰/۰۰۰',
    size: 'شش متری (۳۰۰* ۲۰۰)',
    images: [
      '../images/products/mahsareh/mahsare-1.png',
      '../images/products/mahsareh/mahsare-2.png',
      '../images/products/mahsareh/mahsare-3.png',
      '../images/products/mahsareh/mahsare-4.png',
    ],
  },
  {
    id: 2,
    slug: 'lux',
    alias: 'لوکس',
    caption: 'فرش لوکس سهند / فرش ماشینی سهند',
    title: 'فرش ماشینی لوکس سهند زمینه سرمه ای',
    quality: 'درجه یک',
    color: 'سرمه ای',
    shape: 'مستطیل',
    type: 'ماشینی',
    typeNo1: 'پلی استر و پنبه',
    typeNo2: 'پلی استر و پنبه',
    typeNo3: 'پلی پروپیلن هیت ست',
    company: 'شرکت فرش سهند',
    price: '۱۳/۰۰۰/۰۰۰',
    size: 'شش متری (۳۰۰* ۲۰۰)',
    images: [
      '../images/products/lux/lux-1.png',
      '../images/products/lux/lux-2.webp',
      '../images/products/lux/lux-3.webp',
      '../images/products/lux/lux-4.webp',
    ],
  },
  {
    id: 3,
    slug: 'shahabbas',
    alias: 'شاه عباس',
    caption: 'فرش رادین / فرش ماشینی رادین',
    title: 'فرش ماشینی فرش رادین طرح شاه عباسی آرامش زمینه کرم',
    quality: 'درجه یک',
    color: 'کرم',
    shape: 'مستطیل',
    type: 'ماشینی',
    typeNo1: 'پلی استر و پنبه',
    typeNo2: 'پلی استر و پنبه',
    typeNo3: 'اکلیریک هیت ست شده',
    company: 'شرکت فرش رادین',
    price: '۱۶/۵۰۰/۰۰۰',
    size: 'شش متری (۳۰۰* ۲۰۰)',
    images: [
      '../images/products/shahabbas/shahabbas-1.webp',
      '../images/products/shahabbas/shahabbas-2.webp',
      '../images/products/shahabbas/shahabbas-3.webp',
      '../images/products/shahabbas/shahabbas-4.webp',
    ],
  },
  {
    id: 4,
    slug: 'afshan',
    alias: 'افشان',
    caption: 'فرش مشهد / فرش ماشینی مشهد',
    title: 'فرش ماشینی فرش مشهد طرح افشان زمینه کرم',
    quality: 'درجه یک',
    color: 'کرم',
    shape: 'مستطیل',
    type: 'ماشینی',
    typeNo1: 'پلی استر و پنبه',
    typeNo2: 'پلی استر و پنبه',
    typeNo3: 'اکلیریک هیت ست شده',
    company: 'شرکت فرش مشهد',
    price: '۱۱/۶۰۰/۰۰۰',
    size: 'شش متری (۳۰۰* ۲۰۰)',
    images: [
      '../images/products/afshan/afshan-1.webp',
      '../images/products/afshan/afshan-2.webp',
      '../images/products/afshan/afshan-3.webp',
      '../images/products/afshan/afshan-4.webp',
    ],
  },
  {
    id: 5,
    slug: 'kohan',
    alias: 'کهن',
    caption: 'فرش سهند / فرش دست بافت سهند',
    title: 'فرش کهن دست بافت سهند زمینه سرمه ای',
    quality: 'درجه یک',
    color: 'سرمه ای',
    shape: 'مستطیل',
    type: 'دست بافت',
    typeNo1: 'پلی استر و پنبه',
    typeNo2: 'کنف',
    typeNo3: 'پلی پروپیلن هیت ست',
    company: 'شرکت فرش سهند',
    price: '۱۶/۳۰۰/۰۰۰',
    size: 'شش متری (۳۰۰* ۲۰۰)',
    images: [
      '../images/products/kohan/kohan-1.png',
      '../images/products/kohan/kohan-2.webp',
      '../images/products/kohan/kohan-3.webp',
      '../images/products/kohan/kohan-4.webp',
    ],
  },
  {
    id: 6,
    slug: 'marbel',
    alias: 'ماربل',
    caption: 'فرش زانیس / فرش دست بافت زانیس',
    title: 'فرش دست بافت زانیس طرح ماربل زمینه نوک مدادی',
    quality: 'درجه یک',
    color: 'نوک مدادی',
    shape: 'مستطیل',
    type: 'دست بافت',
    typeNo1: 'پلی‌استر',
    typeNo2: 'پلی‌استر',
    typeNo3: 'اکلیریک هیت ست شده',
    company: 'شرکت فرش زانیس',
    price: '۱۲/۰۰۰/۰۰۰',
    size: 'شش متری (۳۰۰* ۲۰۰)',
    images: [
      '../images/products/marbel/marbel-1.png',
      '../images/products/marbel/marbel-2.webp',
      '../images/products/marbel/marbel-3.webp',
      '../images/products/marbel/marbel-4.webp',
    ],
  },
  {
    id: 7,
    slug: 'negin',
    alias: 'نگین',
    caption: 'فرش نگین مشهد / فرش دست بافت نگین مشهد',
    title: 'فرش دست بافت نگین مشهد زمینه فیلی',
    quality: 'درجه یک',
    color: 'فیلی',
    shape: 'مستطیل',
    type: 'دست بافت',
    typeNo1: 'پلی استر و پنبه',
    typeNo2: 'پلی استر و پنبه',
    typeNo3: 'اکلیریک هیت ست شده',
    company: 'شرکت فرش نگین مشهد',
    price: '۱۴/۵۰۰/۰۰۰',
    size: 'شش متری (۳۰۰* ۲۰۰)',
    images: [
      '../images/products/negin/negin-1.png',
      '../images/products/negin/negin-2.jpg',
      '../images/products/negin/negin-3.jpg',
      '../images/products/negin/negin-4.jpg',
    ],
  },
  {
    id: 8,
    slug: 'atrina',
    alias: 'آترینا',
    caption: 'فرش سهند / فرش دست بافت سهند',
    title: 'فرش دست بافت سهند طرح آترینا زمینه سورمه ای',
    quality: 'درجه یک',
    color: 'سورمه ای',
    shape: 'مستطیل',
    type: 'دست بافت',
    typeNo1: 'پلی استر و پنبه',
    typeNo2: 'کنف',
    typeNo3: 'پلی پروپیلن هیت ست فریز',
    company: 'شرکت فرش سهند',
    price: '۲۳/۳۰۰/۰۰۰',
    size: 'شش متری (۳۰۰* ۲۰۰)',
    images: [
      '../images/products/atrina/atrina-1.png',
      '../images/products/atrina/atrina-2.webp',
      '../images/products/atrina/atrina-3.webp',
      '../images/products/atrina/atrina-4.webp',
    ],
  },
];

// ======================
// CART FUNCTIONALITY
// ======================

// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ======================
// EVENT LISTENERS
// ======================

// Banner image toggle button
if (imageToggleBtn) {
  imageToggleBtn.addEventListener('click', function () {
    imageToggleBtn.classList.add('changeToggle1');
    images.forEach(function (image) {
      image.classList.toggle('change');
    });

    if (imageToggleBtn.classList.contains('changeToggle1')) {
      imageToggleBtn.classList.toggle('changeToggle2');
    }
  });
}

// ======================
// PRODUCT DISPLAY
// ======================

/**
 * Gets product slug from URL parameters
 * @returns {string|null} Product slug or null
 */
function getSlugFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('slug');
}
/**
 * Displays product information on product page
 * @param {string} slug - Product slug to display
 */
function displayProductInfo(slug) {
  const product = products.find(p => p.slug === slug);

  if (product) {
    // Update all product information elements
    productDetailsTitle.textContent = product.caption;
    productDetailsCaption.textContent = product.title;
    featureQuality.textContent = product.quality;
    featureColor.textContent = product.color;
    featureShape.textContent = product.shape;
    featureType1.textContent = product.typeNo1;
    featureType2.textContent = product.typeNo2;
    featureType3.textContent = product.typeNo3;
    sellerCompanyName.textContent = product.company;
    sellerPriceValue.textContent = product.price;
    productDetailsSize.textContent = product.size;
    breadcrumb.textContent = product.alias;
    breadcrumbCarpetType.textContent = `فرش ${product.type}`;
    productImagePreview.setAttribute('src', product.images[0]);
    // Update all gallery images
    productGalleryImage.forEach((p, index) => {
      p.setAttribute('src', product.images[index]);
    });
  }
}
// ======================
// HELPER FUNCTIONS
// ======================

/**
 * Changes the main product image when thumbnail is clicked
 * @param {string} src - Image source to display
 * @param {HTMLElement} element - Clicked thumbnail element
 */
function changeImage(src, element) {
  productImagePreview.src = src;
  document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.parentElement.classList.remove('active-border');
  });
  element.parentElement.classList.add('active-border');
}

// Event listeners for thumbnails
document.querySelectorAll('.thumbnail').forEach(thumb => {
  thumb.addEventListener('click', function () {
    changeImage(this.src, this);
  });
});

// Show product features
if (featureBtn) {
  featureBtn.addEventListener('click', function (e) {
    e.preventDefault();
    featureLink.style.display = 'none';
    productFeatures.style.flexWrap = 'wrap';
    productGalleryBottom.style.display = 'flex';
    productGalleryBottom.style.justifyContent = 'center';
    productDetails.style.marginTop = '10rem';
    productGalleryTop.style.paddingBottom = '2rem';
    productDetailsMiddle.style.display = 'block';
    productFeature.forEach(p => {
      p.style.display = 'block';
    });
  });
}

// Eye icons for password inputs
eyeIcons.forEach(eyeIcon => {
  eyeIcon.addEventListener('click', () => {
    eyeIcon.classList.toggle('fa-eye-slash');
    eyeIcon.classList.toggle('fa-eye');
    const input = eyeIcon.closest('.input-box').querySelector('input');
    input.type = input.type === 'password' ? 'text' : 'password';
  });
});

/**
 * Adds a product to the shopping cart
 * @param {Object} product - Product to add to cart
 */
function addToCart(product) {
  const existingProductIndex = cart.findIndex(item => item.id === product.id);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += product.quantity || 1;
  } else {
    cart.push({
      ...product,
      quantity: product.quantity || 1,
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  updateBasketSummary();
}
/**
 * Updates the cart item count displayed in UI
 */
function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}
/**
 * Removes a product from cart
 * @param {number} productId - ID of product to remove
 */
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  updateCartCount();
  updateBasketSummary();
}
/**
 * Updates quantity of a product in cart
 * @param {number} productId - ID of product to update
 * @param {number} newQuantity - New quantity value
 */
function updateQuantity(productId, newQuantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
    updateBasketSummary();
  }
}

function calculateTotalItems() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function calculateTotalPrice() {
  let total = 0;
  cart.forEach(item => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let priceStr = item.price;
    // تبدیل اعداد فارسی به انگلیسی
    for (let i = 0; i < 10; i++) {
      priceStr = priceStr.replace(
        new RegExp(persianNumbers[i], 'g'),
        englishNumbers[i]
      );
    }
    // حذف تمام کاراکترهای غیرعددی
    priceStr = priceStr.replace(/\D/g, '');

    const price = parseInt(priceStr, 10) * item.quantity;
    total += isNaN(price) ? 0 : price;
  });
  return total;
}

/**
 * Formats price with Persian number formatting
 * @param {number} price - Price to format
 * @returns {string} Formatted price string
 */

function formatPrice(price) {
  return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
}

function renderCart() {
  const container = document.querySelector('.shopping__items');
  const emptyBasketBox = document.querySelector('.shopping__empty-basket');
  const basketLeftWrapper = document.querySelector('.basket__left');

  if (cart.length === 0) {
    if (emptyBasketBox) emptyBasketBox.style.display = 'flex';
    if (basketLeftWrapper) basketLeftWrapper.style.display = 'none';
    if (container) container.innerHTML = '';
    return;
  }

  if (emptyBasketBox) emptyBasketBox.style.display = 'none';
  if (basketLeftWrapper) basketLeftWrapper.style.display = 'block';
  if (container) container.innerHTML = '';

  cart.forEach(product => {
    const htmlTemplate = `
      <div class="shopping__item" data-id="${product.id}">
        <div class="shopping__top">
          <div class="shopping__right">
            <img class="shopping__image" src="${product.images[0]}" alt="${product.title}">
          </div>
          <div class="shopping__left">
            <h2 class="shopping__caption">${product.title}</h2>
            <p class="shopping__detail">رنگ : ${product.color}</p>
            <p class="shopping__company">${product.company}</p>
            <div class="shopping__price">
              <span class="shopping__price-title">قیمت:</span>
              <span class="shopping__price-value">${product.price}</span>
            </div>
            <div class="shopping__control">
              <div class="shopping__control-top">
                <svg class="shopping__increase-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.1666 10.1667H10.1666V17.1667H7.83325V10.1667H0.833252V7.83333H7.83325V0.833334H10.1666V7.83333H17.1666V10.1667Z" fill="#E43434"/>
                </svg>
                <span class="shopping__numbers">${product.quantity}</span>
                <svg class="shopping__decrease-icon" width="24" height="24" viewBox="0 0 24 24" fill="#E43434" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>
                </svg>
                <svg class="shopping__remove-icon" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6666 7.5V19.1667H4.33325V7.5H13.6666ZM11.9166 0.5H6.08325L4.91658 1.66667H0.833252V4H17.1666V1.66667H13.0833L11.9166 0.5ZM15.9999 5.16667H1.99992V19.1667C1.99992 20.45 3.04992 21.5 4.33325 21.5H13.6666C14.9499 21.5 15.9999 20.45 15.9999 19.1667V5.16667Z" fill="#CB1B1B"/>
                </svg>
              </div>
              <div class="shopping__control-bottom">
                <h3 class="shopping__number-title">تعداد</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', htmlTemplate);
    console.log('Cart data:', cart);
    console.log('Products data:', products);
    updateBasketSummary();
  });

  // Add event listeners after rendering
  addCartEventListeners();

  updateBasketSummary();
}

function addCartEventListeners() {
  document.querySelectorAll('.shopping__increase-icon').forEach(btn => {
    btn.addEventListener('click', function () {
      const productId = parseInt(this.closest('.shopping__item').dataset.id);
      updateQuantity(
        productId,
        cart.find(item => item.id === productId).quantity + 1
      );
    });
  });

  document.querySelectorAll('.shopping__decrease-icon').forEach(btn => {
    btn.addEventListener('click', function () {
      const productId = parseInt(this.closest('.shopping__item').dataset.id);
      const item = cart.find(item => item.id === productId);
      if (item.quantity > 1) {
        updateQuantity(productId, item.quantity - 1);
      } else {
        removeFromCart(productId);
      }
    });
  });

  document.querySelectorAll('.shopping__remove-icon').forEach(btn => {
    btn.addEventListener('click', function () {
      const productId = parseInt(this.closest('.shopping__item').dataset.id);
      removeFromCart(productId);
    });
  });
}

function updateBasketSummary() {
  const totalItems = calculateTotalItems();
  const totalPrice = calculateTotalPrice();
  const amountValue = document.querySelector('.basket__amount-value');
  const totalValue = document.querySelector('.basket__total-value');

  if (amountValue) amountValue.textContent = totalItems;
  if (totalValue) totalValue.textContent = formatPrice(totalPrice);
}

// Add to cart button
if (addToBasketBtn) {
  addToBasketBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const slug = getSlugFromURL();
    const product = products.find(p => p.slug === slug);
    if (product) {
      addToCart({ ...product, quantity: 1 });
      alert('محصول به سبد خرید اضافه شد!');
    }
  });
}

// ======================
// INITIALIZATION
// ======================

// Initialize page when loaded
window.onload = () => {
  const slug = getSlugFromURL();
  if (slug) displayProductInfo(slug);

  if (window.location.pathname.includes('shopping.html')) {
    renderCart();
    updateBasketSummary();
  }

  updateCartCount();
};
