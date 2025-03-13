document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // For a real implementation, integrate with Formspree or a backend
        alert('Message sent successfully! Check back later for a real submission system.');
        e.target.reset();
    });
});