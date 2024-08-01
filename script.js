// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Function to open side menu
    window.openMenu = () => {
        document.getElementById('sidemenu').style.right = '0';
        document.querySelector('.fas.fa-bars').style.display = 'none';
        document.querySelector('.fas.fa-times').style.display = 'block';
    };

    // Function to close side menu
    window.closeMenu = () => {
        document.getElementById('sidemenu').style.right = '-200px';
        document.querySelector('.fas.fa-bars').style.display = 'block';
        document.querySelector('.fas.fa-times').style.display = 'none';
    };

    // Function to handle header text animation
    const animateHeaderText = () => {
        const headerText = document.querySelector('.header-text');
        if (headerText) {
            headerText.classList.add('animated');
        }
    };

    // Add animation class to header text
    animateHeaderText();

    // Function to add scroll animations
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    };

    // Create an IntersectionObserver instance for scroll animations
    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1
    });

    // Select elements to animate on scroll
    const animatedElements = document.querySelectorAll('.animated-text');

    // Observe each animated element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
