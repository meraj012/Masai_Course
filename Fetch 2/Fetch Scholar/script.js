const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');

let products = [];

// Function to fetch products from the API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        products = data;
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to display products on the DOM
function displayProducts(products) {

    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h4>${product.title}</h4>
            <p>Price: $${product.price.toFixed(2)}</p>
        `;
        productList.appendChild(productCard);
    });
}

// Function to handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Function to handle sorting
function handleSort() {
    const sortValue = sortSelect.value;
    let sortedProducts = [...products];
    if (sortValue === 'price-asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    displayProducts(sortedProducts);
}

// Event listeners
searchInput.addEventListener('input', handleSearch);
sortSelect.addEventListener('change', handleSort);

// Initial fetch of products
fetchProducts();
