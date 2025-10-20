// Main JavaScript file for additional functionality
// This file can be expanded for more complex interactions

// Main initialization function
function initialize() {
    initializeNavigation();
    initializeScrollEffects();
    initializeFormValidation();
    initializeThemeToggle();
    initializeExperienceCarousel();
    initializeCourseworkCarousel();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for sections to load
    setTimeout(initialize, 100);
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    
    // Handle navigation link clicks with smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Calculate offset for fixed header
                const headerHeight = 80; // Approximate header height
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                // Smooth scroll to target section
                if ('scrollBehavior' in document.documentElement.style) {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    // Fallback for browsers that don't support smooth scrolling
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 800;
                    let start = null;

                    function animation(currentTime) {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                        window.scrollTo(0, run);
                        if (timeElapsed < duration) requestAnimationFrame(animation);
                    }

                    function easeInOutQuad(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t + b;
                        t--;
                        return -c / 2 * (t * (t - 2) - 1) + b;
                    }

                    requestAnimationFrame(animation);
                }
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Update active navigation link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = 80;
            
            if (scrollY >= (sectionTop - headerHeight - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-cyber-green');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-cyber-green');
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('#home');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Reveal elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Form validation and handling
function initializeFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearErrors);
        });

        // Form submission
        contactForm.addEventListener('submit', handleFormSubmission);
    }
}

function validateField(event) {
    const field = event.target;
    const value = field.value.trim();
    
    // Remove existing error styling
    field.classList.remove('border-red-500');
    
    // Validate based on field type
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('border-red-500');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function clearErrors(event) {
    const field = event.target;
    field.classList.remove('border-red-500');
    
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

async function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate all fields
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField({ target: input })) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        return;
    }
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
        try {
            // Initialize EmailJS
            emailjs.init('YOUR_PUBLIC_KEY'); // You'll need to replace this with your actual EmailJS public key
            
            // Send email using EmailJS
            const result = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                from_name: data.name,
                from_email: data.email,
                subject: data.subject,
                message: data.message,
                to_email: 'wojcier2@tcnj.edu'
            });
            
            console.log('Email sent successfully:', result);
            
            // Reset form
            form.reset();
            
            // Show success message
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            
        } catch (error) {
            console.error('Contact form error:', error);
            showNotification('Sorry, there was an error sending your message. Please email me directly at wojcier2@tcnj.edu', 'error');
        } finally {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-600' : 
        type === 'error' ? 'bg-red-600' : 'bg-blue-600'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Theme toggle functionality (for future dark/light mode)
function initializeThemeToggle() {
    // This can be expanded for theme switching
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDark.matches) {
        document.documentElement.classList.add('dark');
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Experience Carousel functionality
function initializeExperienceCarousel() {
    const carouselContainer = document.querySelector('.experience-carousel-container');
    if (!carouselContainer) return;

    const slides = carouselContainer.querySelectorAll('.carousel-slide');
    const dots = carouselContainer.querySelectorAll('.carousel-dot');
    const prevButton = carouselContainer.querySelector('.carousel-nav-left');
    const nextButton = carouselContainer.querySelector('.carousel-nav-right');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let isTransitioning = false;
    let touchStartX = 0;
    let touchEndX = 0;

    // Initialize carousel
    function initCarousel() {
        if (totalSlides === 0) return;
        
        // Set initial state
        updateSlideDisplay();
        updateDots();
        
        // Add event listeners
        if (prevButton) prevButton.addEventListener('click', goToPreviousSlide);
        if (nextButton) nextButton.addEventListener('click', goToNextSlide);
        
        // Add dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);
        
        // Add touch/swipe support
        const carouselTrack = carouselContainer.querySelector('.carousel-track');
        if (carouselTrack) {
            carouselTrack.addEventListener('touchstart', handleTouchStart, { passive: true });
            carouselTrack.addEventListener('touchend', handleTouchEnd, { passive: true });
        }
        
        // Auto-play (optional - can be disabled)
        // startAutoPlay();
    }

    function goToSlide(slideIndex) {
        if (isTransitioning || slideIndex === currentSlide) return;
        
        isTransitioning = true;
        
        // Remove active classes
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Update current slide
        currentSlide = slideIndex;
        
        // Add active classes
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Reset transition flag after animation
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    function goToNextSlide() {
        const nextIndex = (currentSlide + 1) % totalSlides;
        goToSlide(nextIndex);
    }

    function goToPreviousSlide() {
        const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(prevIndex);
    }

    function updateSlideDisplay() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function handleKeyboardNavigation(event) {
        // Only handle keyboard navigation when carousel is in view
        const rect = carouselContainer.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isInView) return;
        
        switch(event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                goToPreviousSlide();
                break;
            case 'ArrowRight':
                event.preventDefault();
                goToNextSlide();
                break;
            case 'Home':
                event.preventDefault();
                goToSlide(0);
                break;
            case 'End':
                event.preventDefault();
                goToSlide(totalSlides - 1);
                break;
        }
    }

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
    }

    function handleTouchEnd(event) {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - go to next slide
                goToNextSlide();
            } else {
                // Swipe right - go to previous slide
                goToPreviousSlide();
            }
        }
    }

    function startAutoPlay() {
        // Auto-play every 5 seconds (optional feature)
        setInterval(() => {
            if (!isTransitioning) {
                goToNextSlide();
            }
        }, 5000);
    }

    // Initialize the carousel
    initCarousel();
}

// Coursework Carousel functionality
function initializeCourseworkCarousel() {
    const carouselContainer = document.querySelector('.coursework-carousel-container');
    if (!carouselContainer) return;

    const slides = carouselContainer.querySelectorAll('.coursework-slide');
    const dots = carouselContainer.querySelectorAll('.coursework-dot');
    const prevButton = carouselContainer.querySelector('.coursework-nav-left');
    const nextButton = carouselContainer.querySelector('.coursework-nav-right');
    
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let isTransitioning = false;
    let touchStartX = 0;
    let touchEndX = 0;

    // Initialize carousel
    function initCarousel() {
        if (totalSlides === 0) return;
        
        // Set initial state
        updateSlideDisplay();
        updateDots();
        
        // Add event listeners
        if (prevButton) prevButton.addEventListener('click', goToPreviousSlide);
        if (nextButton) nextButton.addEventListener('click', goToNextSlide);
        
        // Add dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);
        
        // Add touch/swipe support
        const carouselTrack = carouselContainer.querySelector('.coursework-track');
        if (carouselTrack) {
            carouselTrack.addEventListener('touchstart', handleTouchStart, { passive: true });
            carouselTrack.addEventListener('touchend', handleTouchEnd, { passive: true });
        }
    }

    function goToSlide(slideIndex) {
        if (isTransitioning || slideIndex === currentSlide) return;
        
        isTransitioning = true;
        
        // Remove active classes
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Update current slide
        currentSlide = slideIndex;
        
        // Add active classes
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Reset transition flag after animation
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    function goToNextSlide() {
        const nextIndex = (currentSlide + 1) % totalSlides;
        goToSlide(nextIndex);
    }

    function goToPreviousSlide() {
        const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(prevIndex);
    }

    function updateSlideDisplay() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function handleKeyboardNavigation(event) {
        // Only handle keyboard navigation when carousel is in view
        const rect = carouselContainer.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isInView) return;
        
        switch(event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                goToPreviousSlide();
                break;
            case 'ArrowRight':
                event.preventDefault();
                goToNextSlide();
                break;
            case 'Home':
                event.preventDefault();
                goToSlide(0);
                break;
            case 'End':
                event.preventDefault();
                goToSlide(totalSlides - 1);
                break;
        }
    }

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
    }

    function handleTouchEnd(event) {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - go to next slide
                goToNextSlide();
            } else {
                // Swipe right - go to previous slide
                goToPreviousSlide();
            }
        }
    }

    // Initialize the carousel
    initCarousel();
}


// Export functions for use in other modules
window.PersonalWebsite = {
    initialize,
    showNotification,
    validateField,
    debounce,
    initializeExperienceCarousel,
    initializeCourseworkCarousel
};
