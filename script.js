const cartData = [];

function addToCart(itemIndex) {
    const items = [
        { name: "Orange T-Shirt", spec: "Size: S", image: "shirt 1.png", price: 10 },
        { name: "Black T-Shirt", spec: "Size: S", image: "Shirt 2.png", price: 10 },
        { name: "Orange T-Shirt", spec: "Size: L", image: "shirt 1.png", price: 11 },
        { name: "Black T-Shirt", spec: "Size: L", image: "Shirt 2.png", price: 11 },
        { name: "Orange T-Shirt", spec: "Size: XL", image: "shirt 1.png", price: 12 },
        { name: "Black T-Shirt", spec: "Size: XL", image: "Shirt 2.png", price: 12 }
    ];
    cartData.push(items[itemIndex]);
    localStorage.setItem('cart', JSON.stringify(cartData));
}
