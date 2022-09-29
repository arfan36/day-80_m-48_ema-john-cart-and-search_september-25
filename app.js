const addProduct = () => {
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    console.log(product, quantity);
    addProductToDb(product, quantity);
};

const getStoredCard = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
    // return {};
};

const addProductToDb = (product, quantity) => {
    const cart = getStoredCard();
    cart[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
};

const cart = { pen: 4, triPod: 2, handSanitizer: 2 };