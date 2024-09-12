document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('a[href="about.html"]');
    const content = document.querySelector('.content');
    const navbar = document.querySelector('.navbar');

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        navbar.classList.remove('show');
        content.classList.remove('show');
        setTimeout(() => {
            navbar.classList.add('show');
        }, 100);
        setTimeout(() => {
            content.classList.add('show');
        }, 500);
    });

    // Show navbar and content on initial page load
    setTimeout(() => {
        navbar.classList.add('show');
    }, 100);

    setTimeout(() => {
        content.classList.add('show');
    }, 500);
});