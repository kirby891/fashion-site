// JavaScript for toggling the review form popup
document.querySelector('.write-review-btn').addEventListener('click', () => {
    document.getElementById('reviewPopup').style.display = 'block';
});

document.getElementById('postReview').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.querySelectorAll('.score span.selected').length;

    if (name && review && rating) {
        // Add the review to the page
        const userReviews = document.getElementById('userReviews');
        const newReview = document.createElement('p');
        newReview.innerHTML = `<strong>${name}</strong> ${'⭐'.repeat(rating)}<br>${review}`;
        userReviews.appendChild(newReview);

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

// Handle star selection
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