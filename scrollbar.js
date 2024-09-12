window.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > 100) {  // Adjust the scroll threshold as needed
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
