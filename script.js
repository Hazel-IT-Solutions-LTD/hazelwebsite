// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70; // Account for sticky navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animated Counter for Stats
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Intersection Observer for Stats Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe all stat numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active Navigation Highlight on Scroll
const sections = document.querySelectorAll('.section, .header');
const navLinks = document.querySelectorAll('.nav-menu a');

function highlightNavigation() {
    let current = '';
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    navLinks.forEach(link => {
        link.style.backgroundColor = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.backgroundColor = '#34495e';
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create mailto link (since this is a static site)
    const mailtoLink = `mailto:christian.haslam@hazel-it.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    formMessage.className = 'form-message success';
    formMessage.textContent = 'Opening your email client... If it doesn\'t open automatically, please email christian.haslam@hazel-it.com directly.';

    // Reset form
    contactForm.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
        formMessage.textContent = '';
    }, 5000);
});

// Display Last Updated Date
const lastUpdated = document.getElementById('lastUpdated');
if (lastUpdated) {
    const currentDate = new Date().toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    lastUpdated.textContent = `Last Updated: ${currentDate}`;
}

// Add fade-in animation to sections on scroll
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Apply initial styles and observe all service boxes and expertise categories
document.querySelectorAll('.service-box, .expertise-category, .tech-item, .integration-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// Easter egg: Konami Code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.background = 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)';
        document.body.style.backgroundSize = '400% 400%';
        document.body.style.animation = 'gradient 3s ease infinite';

        // Add animation keyframes
        if (!document.getElementById('konamiStyle')) {
            const style = document.createElement('style');
            style.id = 'konamiStyle';
            style.innerHTML = `
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `;
            document.head.appendChild(style);
        }

        alert('🎉 Konami Code activated! Hazel IT Solutions - Now with 100% more rainbow power!');

        // Reset after 5 seconds
        setTimeout(() => {
            document.body.style.background = '';
            document.body.style.animation = '';
        }, 5000);
    }
});

// Log page load time for performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log(`%c🚀 Hazel IT Solutions - Page loaded in ${loadTime}ms`, 'color: #2c3e50; font-weight: bold; font-size: 14px;');
    console.log('%c💼 Looking for expert logistics solutions? You\'re in the right place!', 'color: #d4af37; font-size: 12px;');
});
