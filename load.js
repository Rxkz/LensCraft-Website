window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    let heroImage = document.querySelector('.hero img');
    let navbar = document.querySelector('.navbar');
    let logoContainer = document.querySelector('.logo-container');
    let mainLogo = document.querySelector('.main-logo');
    let navLogo = document.querySelector('.nav-logo');
    
    // Smooth zoom out effect
    let scale = 1.5 - (scrollPosition * 0.0005);
    scale = Math.max(scale, 1);
    let translateY = -10 + (scrollPosition * 0.01);
    translateY = Math.min(translateY, 0);
    
    heroImage.style.transform = `scale(${scale}) translateY(${translateY}%)`;
    
    // Logo animation
    let scrollThreshold = 100;
    let scrollProgress = Math.min(scrollPosition / scrollThreshold, 1);
    
    if (scrollPosition > 0) {
        navbar.style.top = `${Math.min(scrollPosition / 5, 16)}px`;
        
        let initialTop = 30; // Percentage
        let finalTop = 5; // Percentage
        let currentTop = initialTop - (initialTop - finalTop) * scrollProgress;
        
        let initialSize = 300; // Max width in pixels
        let finalSize = 100; // Min width in pixels
        let currentSize = initialSize - (initialSize - finalSize) * scrollProgress;
        
        logoContainer.style.top = `${currentTop}%`;
        logoContainer.style.transform = `translate(-50%, -50%) scale(${1 - 0.5 * scrollProgress})`;
        mainLogo.style.maxWidth = `${currentSize}px`;
        mainLogo.style.opacity = 1 - scrollProgress;
        navLogo.style.opacity = scrollProgress;
    } else {
        navbar.style.top = '-100px';
        logoContainer.style.top = '30%';
        logoContainer.style.transform = 'translate(-50%, -50%) scale(1)';
        mainLogo.style.maxWidth = '300px';
        mainLogo.style.opacity = '1';
        navLogo.style.opacity = '0';
    }
});