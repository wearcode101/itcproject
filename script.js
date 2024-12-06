const products = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
];

const productContainer = document.getElementById('products');
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productElement);
});

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}
