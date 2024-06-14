function createProductHtml(product) {
    const productContainer = document.querySelector('.product-container');

    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const productImage = document.createElement('img');
    productImage.src = `data:image/png;base64,${product.image}`;
    productImage.alt = product.name;

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const productDescription = document.createElement('p');
    productDescription.textContent = product.short_desc;

    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productDescription);

    if (product.discount > 0) {
        const discountLabel = document.createElement('div');
        discountLabel.classList.add('discount');
        discountLabel.textContent = `-${product.discount}%`;
        productItem.appendChild(discountLabel);

        const discountedPrice = document.createElement('span');
        discountedPrice.textContent = ` Rp ${product.price * (1 - product.discount / 100)}`;
        productItem.appendChild(discountedPrice);
       
        const originalPrice = document.createElement('span');
        originalPrice.style.textDecoration = 'line-through';
        originalPrice.style.color = '#888';
        originalPrice.textContent = `Rp ${product.price}`;
        productItem.appendChild(originalPrice);
    }

    productContainer.appendChild(productItem);
}
