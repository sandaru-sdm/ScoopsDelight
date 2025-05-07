/**
 * Scoops Delight - Ice Cream Shop Landing Page
 * Custom JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Bootstrap components
    initBootstrapComponents();
    
    // Handle smooth scrolling for anchor links
    setupSmoothScrolling();
    
    // Handle scroll animations
    setupScrollAnimations();
    
    // Handle contact form submission
    setupContactForm();
});

/**
 * Initialize Bootstrap components
 */
function initBootstrapComponents() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize carousel
    var testimonialCarousel = document.getElementById('testimonialCarousel');
    if (testimonialCarousel) {
        var carousel = new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000,
            touch: true
        });
    }
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Skip if hash is just "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate navbar height to offset scroll position
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                
                // Get target position
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                
                // Scroll to target with navbar height offset
                window.scrollTo({
                    top: targetPosition - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    }
}

/**
 * Setup scroll animations for elements
 */
function setupScrollAnimations() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Animate elements when they enter the viewport
    function animateOnScroll() {
        // Get all elements to animate
        const elementsLeft = document.querySelectorAll('.reveal-left:not(.active)');
        const elementsRight = document.querySelectorAll('.reveal-right:not(.active)');
        const elementsItem = document.querySelectorAll('.reveal-item:not(.active)');
        const galleryItems = document.querySelectorAll('.gallery-item:not(.active)');
        
        // Check and animate elements from left
        elementsLeft.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
        
        // Check and animate elements from right
        elementsRight.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
        
        // Check and animate items
        elementsItem.forEach((element, index) => {
            if (isInViewport(element)) {
                // Stagger animation
                setTimeout(() => {
                    element.classList.add('active');
                }, index * 100);
            }
        });
        
        // Check and animate gallery items
        galleryItems.forEach((element, index) => {
            if (isInViewport(element)) {
                // Stagger animation
                setTimeout(() => {
                    element.classList.add('active');
                }, index * 100);
            }
        });
    }
    
    // Animate on page load
    setTimeout(animateOnScroll, 100);
    
    // Animate on scroll
    window.addEventListener('scroll', animateOnScroll);
}

/**
 * Setup contact form submission handler
 */
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For this demo, we'll just show a success message
            
            // Clear form fields
            contactForm.reset();
            
            // Create and show success message
            const formContainer = document.querySelector('.contact-form-container');
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            successMessage.innerHTML = `
                <h5>Thanks ${name}!</h5>
                <p>Your message has been sent successfully. We'll get back to you soon!</p>
                <button class="btn btn-sm btn-outline-success mt-2" id="resetForm">Send another message</button>
            `;
            
            // Append message
            formContainer.appendChild(successMessage);
            
            // Hide the form
            contactForm.style.display = 'none';
            
            // Add event listener to reset button
            document.getElementById('resetForm').addEventListener('click', function() {
                // Remove success message
                successMessage.remove();
                
                // Show the form again
                contactForm.style.display = 'block';
            });
        });
    }
}

/**
 * Changes navbar style on scroll
 */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    }
});