document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    let lastScrollTop = 0;
    const scrollThreshold = 100;

    // Function to handle navbar visibility
    function handleNavbarVisibility() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            navbar.classList.add('navbar--hidden');
            navbar.classList.remove('show');
        } else if (scrollTop < lastScrollTop || scrollTop <= scrollThreshold) {
            navbar.classList.remove('navbar--hidden');
            navbar.classList.add('show');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    // Initial navbar animation
    setTimeout(() => {
        navbar.classList.add('show');
    }, 100);

    // Add scroll event listener after a short delay
    setTimeout(() => {
        window.addEventListener('scroll', handleNavbarVisibility, false);
    }, 500);
});