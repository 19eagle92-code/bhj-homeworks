const products = document.querySelectorAll('.product');

// Обработчик для каждого товара
products.forEach(function (product) {
    const decBtn = product.querySelector('.product__quantity-control_dec');
    const incBtn = product.querySelector('.product__quantity-control_inc');
    const quantityValue = product.querySelector('.product__quantity-value');
    const addBtn = product.querySelector('.product__add');
    const productId = product.dataset.id;

    decBtn.addEventListener('click', function () {
        let currentValue = parseInt(quantityValue.textContent);
        if (currentValue > 1) {
            currentValue--;
            quantityValue.textContent = currentValue;
        }
    });

    incBtn.addEventListener('click', function () {
        let currentValue = parseInt(quantityValue.textContent);
        currentValue++;
        quantityValue.textContent = currentValue;
    });


    addBtn.addEventListener('click', function () {
        const quantity = parseInt(quantityValue.textContent);
        const productImage = product.querySelector('.product__image').src;
        addToCart(productId, productImage, quantity);
    });
});

// Функция добавления товара в корзину
function addToCart(productId, imageSrc, quantity) {
    const cartContainer = document.querySelector('.cart__products');
    const cartItems = cartContainer.querySelectorAll('.cart__product');

    let existingItem = null;
    cartItems.forEach(function (item) {
        if (item.dataset.id === productId) {
            existingItem = item;
        }
    });

    if (existingItem) {
        const countElement = existingItem.querySelector('.cart__product-count');
        let currentCount = parseInt(countElement.textContent);
        currentCount += quantity;
        countElement.textContent = currentCount;
    } else {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart__product';
        cartItem.dataset.id = productId;

        const img = document.createElement('img');
        img.className = 'cart__product-image';
        img.src = imageSrc;

        const count = document.createElement('div');
        count.className = 'cart__product-count';
        count.textContent = quantity;

        cartItem.appendChild(img);
        cartItem.appendChild(count);
        cartContainer.appendChild(cartItem);
    }
}