// 1. Mobile Menu Toggle Interaction
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

if (menuBtn && navbar) {
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

// 2. Contact Form Validation
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        // Prevent form from submitting immediately so we can check it
        event.preventDefault();

        // Get form input values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation checks
        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        if (email === '' || !email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address.');
            return;
        }

        if (message === '') {
            alert('Please write a message before submitting.');
            return;
        }

        // If everything is correct
        alert('Thank you, ' + name + '! Your message has been sent successfully.');
        contactForm.reset(); // Clear the form fields
    });
}