import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    let products
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);
    console.log(ids)
    try {
        const loadedProducts = await fetch('http://localhost:5000/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        });
        products = await loadedProducts.json();
        console.log("Products", products);
    } catch (error) {
        console.log(error)
    }

    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd._id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
}

export default cartProductsLoader;