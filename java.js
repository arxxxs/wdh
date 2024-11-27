// Sample Products Data
const products = [
    { name: "LEGO City Police Car", image: "https://via.placeholder.com/150", price: "$9.99" },
    { name: "LEGO Star Wars X-Wing", image: "https://via.placeholder.com/150", price: "$49.99" },
    { name: "LEGO Friends Cafe", image: "https://via.placeholder.com/150", price: "$29.99" },
    { name: "LEGO Technic Car", image: "https://via.placeholder.com/150", price: "$59.99" },
    { name: "LEGO Creator House", image: "https://via.placeholder.com/150", price: "$39.99" }
];

// Load Products Dynamically
const productList = document.getElementById('product-list');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    `;
    productList.appendChild(productDiv);
});

// Search Functionality
const searchBox = document.getElementById('search-box');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    const query = searchBox.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );

    productList.innerHTML = ""; // Clear existing products
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productList.appendChild(productDiv);
    });

    if (filteredProducts.length === 0) {
        productList.innerHTML = "<p>No products found!</p>";
    }
});
