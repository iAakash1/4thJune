// Enhanced Portfolio Website JavaScript
class PortfolioWebsite {
    constructor() {
        this.isLoading = true;
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupTypingAnimation();
        this.setupScrollAnimations();
        this.setupMobileMenu();
        this.setupBackToTop();
        this.setupCursorFollower();
        this.setupFormHandling();
        this.setupCounterAnimation();
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
        this.showLoadingScreen();
        this.preloadImages();
    }

    // Theme Management
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        const themeIcon = document.querySelector('#themeToggle i');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
        
        // Add transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    // Event Listeners
    setupEventListeners() {
        window.addEventListener('load', () => this.handlePageLoad());
        window.addEventListener('scroll', () => this.handleScroll());
        window.addEventListener('resize', () => this.handleResize());
        
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Form submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleFormSubmission(e));
        }
    }

    // Loading Screen
    showLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const loadingCommand = document.getElementById('loadingCommand');
        
        const commands = [
            'initializing...',
            'loading components...',
            'setting up animations...',
            'preparing portfolio...',
            'ready!'
        ];

        let commandIndex = 0;
        const typeCommand = () => {
            if (commandIndex < commands.length) {
                loadingCommand.textContent = commands[commandIndex];
                commandIndex++;
                setTimeout(typeCommand, 600);
            } else {
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    setTimeout(() => loadingScreen.remove(), 500);
                }, 500);
            }
        };

        typeCommand();
    }

    // Typing Animation
    setupTypingAnimation() {
        const typedElement = document.getElementById('typed-text');
        if (typedElement && typeof Typed !== 'undefined') {
            new Typed('#typed-text', {
                strings: [
                    'Full Stack Developer',
                    'Computer Engineering Student',
                    'Data Science Enthusiast',
                    'Problem Solver',
                    'Tech Innovator'
                ],
                typeSpeed: 80,
                backSpeed: 50,
                backDelay: 2000,
                loop: true,
                showCursor: false
            });
        }
    }

    // Scroll Animations with GSAP
    initializeAnimations() {
        if (typeof gsap !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            // Hero animations
            gsap.from('.hero-content > *', {
                duration: 1,
                y: 100,
                opacity: 0,
                stagger: 0.2,
                ease: 'power3.out'
            });

            gsap.from('.profile-frame', {
                duration: 1.5,
                scale: 0,
                rotation: 180,
                ease: 'back.out(1.7)',
                delay: 0.5
            });

            // Section animations
            gsap.utils.toArray('section').forEach((section, index) => {
                if (index > 0) {
                    gsap.from(section.querySelector('.section-header'), {
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%'
                        },
                        duration: 1,
                        y: 50,
                        opacity: 0,
                        ease: 'power3.out'
                    });
                }
            });

            // Project cards
            gsap.utils.toArray('.project-card').forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%'
                    },
                    duration: 0.8,
                    y: 100,
                    opacity: 0,
                    delay: index * 0.1,
                    ease: 'power3.out'
                });
            });

            // Timeline items
            gsap.utils.toArray('.timeline-item').forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%'
                    },
                    duration: 0.8,
                    x: -100,
                    opacity: 0,
                    delay: index * 0.2,
                    ease: 'power3.out'
                });
            });
        }
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Trigger specific animations
                    if (entry.target.classList.contains('stats-section')) {
                        this.animateCounters();
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in, .slide-in, .hero-stats').forEach(el => {
            observer.observe(el);
        });
    }

    // Mobile Menu
    setupMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            });

            // Close menu when clicking on nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    }

    // Back to Top
    setupBackToTop() {
        const backToTopButton = document.getElementById('backToTop');
        if (!backToTopButton) return;

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Cursor Follower
    setupCursorFollower() {
        if (window.innerWidth <= 768) return;

        const cursor = document.getElementById('cursor');
        if (!cursor) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            const speed = 0.15;
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            
            cursor.style.left = cursorX - 10 + 'px';
            cursor.style.top = cursorY - 10 + 'px';
            
            requestAnimationFrame(animateCursor);
        };

        animateCursor();

        // Hover effects
        document.querySelectorAll('a, button, .project-card, .blog-card').forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.opacity = '0.5';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.opacity = '0.7';
            });
        });
    }

    // Form Handling
    setupFormHandling() {
        const contactForm = document.querySelector('.contact-form');
        if (!contactForm) return;

        // Floating label effect
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (input.value.trim() === '') {
                    input.parentElement.classList.remove('focused');
                }
            });

            // Check if input has value on load
            if (input.value.trim() !== '') {
                input.parentElement.classList.add('focused');
            }
        });
    }

    handleFormSubmission(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;

        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;

        // Simulate form submission
        const formData = new FormData(form);
        
        // Use Formspree or your preferred form service
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                this.showNotification('Message sent successfully!', 'success');
                form.reset();
                document.querySelectorAll('.form-group').forEach(group => {
                    group.classList.remove('focused');
                });
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            this.showNotification('Failed to send message. Please try again.', 'error');
        })
        .finally(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        });
    }

    // Counter Animation
    setupCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                counter.textContent = Math.floor(current);
                
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                }
            }, 16);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    // Smooth Scrolling
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Active Navigation
    setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (activeLink) activeLink.classList.add('active');
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    // Event Handlers
    handlePageLoad() {
        this.isLoading = false;
        document.body.classList.add('loaded');
    }

    handleScroll() {
        const scrollY = window.scrollY;
        
        // Update navbar
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (scrollY > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
            }
        }

        // Update back to top button
        const backToTopButton = document.getElementById('backToTop');
        if (backToTopButton) {
            if (scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }

        // Parallax effect for hero background
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground && scrollY < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    }

    handleResize() {
        // Close mobile menu on resize
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        
        if (window.innerWidth > 768) {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Utility Functions
    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        const icon = notification.querySelector('.notification-icon');
        const messageEl = notification.querySelector('.notification-message');

        // Set icon based on type
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            info: 'fas fa-info-circle'
        };

        icon.className = icons[type] || icons.info;
        messageEl.textContent = message;

        // Show notification
        notification.classList.add('show');

        // Hide after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    preloadImages() {
        const images = [
            './pic.jpeg',
            './cotton.jpeg',
            './finance.webp',
            './fuel.jpeg',
            './taskmanager.webp'
        ];

        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            if (!counter.classList.contains('animated')) {
                counter.classList.add('animated');
                const target = parseInt(counter.getAttribute('data-count'));
                let current = 0;
                const increment = target / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    counter.textContent = Math.floor(current);
                    
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    }
                }, 40);
            }
        });
    }
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioWebsite();
});

// PWA Support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics
if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID');
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});