// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    // Change navbar background color on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Example: Add interactivity for images if needed
    const images = document.querySelectorAll('.interactive-img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            alert('Image clicked: ' + img.alt);
        });
    });
});
