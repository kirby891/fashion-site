<script>
// Extract product details from the URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('product');
const productPrice = urlParams.get('price');
const productImage = urlParams.get('image');

// Populate the order summary with the product details
if (productName && productPrice && productImage) {
    document.querySelector('.order-summary img').src = `../images/${productImage}`;
    document.querySelector('.order-summary h3').innerText = 'Order Summary';
    document.querySelector('.order-summary p:first-of-type').innerText = productName;
    document.querySelector('.order-summary p:last-of-type').innerText = `Price: €${productPrice}`;
}
</script>