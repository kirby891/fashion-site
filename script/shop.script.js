// Function to toggle product categories (New Arrivals and Most Popular)
function changeCategory(category) {
    const newArrivalsProducts = document.getElementById('new-arrivals-products');
    const mostPopularProducts = document.getElementById('most-popular-products');

    if (category === 'popular') {
        // Show Most Popular products and hide New Arrivals
        newArrivalsProducts.style.display = 'none';
        mostPopularProducts.style.display = 'grid';
    } else if (category === 'new') {
        // Show New Arrivals products and hide Most Popular
        newArrivalsProducts.style.display = 'grid';
        mostPopularProducts.style.display = 'none';
    }
}

// JavaScript for toggling the review form popup
document.querySelector('.write-review-btn').addEventListener('click', () => {
    document.getElementById('reviewPopup').style.display = 'block';
});

// Handle posting a new review
document.getElementById('postReview').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.querySelectorAll('.score span.selected').length;

    if (name && review && rating) {
        // Add the review to the user reviews section
        const userReviews = document.getElementById('userReviews') || document.createElement('div');
        userReviews.id = 'userReviews';
        const newReview = document.createElement('p');
        newReview.innerHTML = `<strong>${name}</strong> ${'⭐'.repeat(rating)}<br>${review}`;
        userReviews.appendChild(newReview);

        // If the userReviews container does not exist in the DOM, add it below the review section
        if (!document.getElementById('userReviews')) {
            document.querySelector('.review-section').appendChild(userReviews);
        }

        // Clear the input fields
        document.getElementById('name').value = '';
        document.getElementById('review').value = '';
        document.querySelectorAll('.score span').forEach(star => star.classList.remove('selected'));

        // Close the popup
        document.getElementById('reviewPopup').style.display = 'none';
    } else {
        alert('Please complete all fields and select a rating.');
    }
});

// Handle star selection for rating
document.querySelectorAll('.score span').forEach(star => {
    star.addEventListener('click', function() {
        // Remove selected class from all stars
        document.querySelectorAll('.score span').forEach(s => s.classList.remove('selected'));

        // Add selected class up to the clicked star
        this.classList.add('selected');
        let prevStar = this.previousElementSibling;
        while (prevStar) {
            prevStar.classList.add('selected');
            prevStar = prevStar.previousElementSibling;
        }
    });
});

// Show only the selected image when clicked
function showOnlyImage(imageSrc) {
    // Clear the entire body content
    document.body.innerHTML = '';

    // Create a container for the selected image
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-only-container';

    // Create an img element with the selected image source
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Selected Product Image';
    img.className = 'full-screen-image';

    // Append the image to the container
    imageContainer.appendChild(img);

    // Append the container to the body
    document.body.appendChild(imageContainer);
}

// Set to true to redirect to product detail page; false to display fullscreen on the same page
const redirectToDetailPage = true;

// Show only the selected image when clicked
function showOnlyImage(imageSrc) {
    if (redirectToDetailPage) {
        // Redirect to the product detail page with the image source as a parameter
        window.location.href = `shop detail.html?image=${encodeURIComponent(imageSrc)}`;
    } else {
        // Clear the entire body content to show the image fullscreen on the same page
        document.body.innerHTML = '';

        // Create a container for the selected image
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-only-container';

        // Create an img element with the selected image source
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = 'Selected Product Image';
        img.className = 'full-screen-image';

        // Append the image to the container and then to the body
        imageContainer.appendChild(img);
        document.body.appendChild(imageContainer);
    }
}

