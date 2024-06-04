document.addEventListener("DOMContentLoaded", function() {
    const readMoreButton = document.getElementById('read-more-btn');
    const extraContent = document.getElementById('extra-content');

    let isContentVisible = false;

    readMoreButton.addEventListener('click', function() {
        if (!isContentVisible) {
            
            extraContent.style.display = 'block';
            readMoreButton.textContent = 'Read Less';
            isContentVisible = true;
        } else {
            
            extraContent.style.display = 'none';
            readMoreButton.textContent = 'Read More';
            isContentVisible = false;
        }
    });
});