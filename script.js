class PortfolioWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupTypingAnimation();
        this.setupScrollAnimations();
        this.setupMobileMenu();
        this.setupBackToTop();
        this.setupCursorFollower();
        this.setupFormHandling();
        this.setupSkillBars();
        this.setupCounterAnimation();
        this.setupActiveNavigation();
        this.preloadImages();
    }

    setupEventListeners() {
        window.addEventListener('load', () => this.handlePageLoad());
        window.addEventListener('scroll', () => this.handleScroll());
        window.addEventListener('resize', () => this.handleResize());
        this.showLoading();
    }

    showLoading() {
        const loadingElement = document.createElement('div');
        loadingElement.className = 'loading';
        loadingElement.innerHTML = '<div class="spinner"></div>';
        document.body.appendChild(loadingElement);

        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingElement.classList.add('hidden');
                setTimeout(() => loadingElement.remove(), 500);
            }, 1000);
        });
    }

    handlePageLoad() {
        this.setupIntersectionObserver();
    }

    handleScroll() {
        this.updateNavbar();
        this.updateBackToTop();
        this.updateActiveNavigation();
    }

    handleResize() {
        this.closeMobileMenu();
    }

    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    closeMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }

    updateNavbar() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    }

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

    updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    setupTypingAnimation() {
        const typingElement = document.querySelector('.typing-text');
        if (!typingElement) return;

        const texts = [
            'Computer Engineering Student',
            'Full-Stack Developer',
            'AI & ML Enthusiast',
            'Problem Solver',
            'Tech Innovator'
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeText = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(typeText, typeSpeed);
        };

        typeText();
    }

    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => observer.observe(element));
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    if (entry.target.classList.contains('about-stats')) {
                        this.animateCounters();
                    }
                    if (entry.target.classList.contains('skills-content')) {
                        this.animateSkillBars();
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.about-stats, .skills-content').forEach(el => observer.observe(el));
    }

    setupCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-count'));
            let current = 0;
            const duration = 2000;
            const increment = target / (duration / 16);

            const timer = setInterval(() => {
                current += increment;
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
                });
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-level');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const level = entry.target.getAttribute('data-level');
                    entry.target.style.setProperty('--skill-width', `${level}%`);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-level');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const level = bar.getAttribute('data-level');
                bar.style.setProperty('--skill-width', `${level}%`);
                bar.classList.add('animate');
            }, index * 50);
        });
    }

    setupBackToTop() {
        const button = document.getElementById('backToTop');
        if (!button) return;

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    updateBackToTop() {
        const button = document.getElementById('backToTop');
        if (!button) return;

        if (window.scrollY > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    }

    setupCursorFollower() {
        if (window.innerWidth <= 1024) return;

        const cursor = document.querySelector('.cursor-follower');
        if (!cursor) return;

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animate = () => {
            const speed = 0.15;
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            requestAnimationFrame(animate);
        };

        animate();

        document.querySelectorAll('a, button, .project-card').forEach(element => {
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

    setupFormHandling() {
        const form = document.querySelector('.contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(form);
        });

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.classList.toggle('has-value', input.value.trim() !== '');
            });
        });
    }

    handleFormSubmission(form) {
        const formData = new FormData(form);
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;

        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        button.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            const email = formData.get('email');
            if (!email.includes('@')) {
                this.showNotification('Please enter a valid email address.', 'error');
            } else {
                this.showNotification('Message sent successfully!', 'success');
                form.reset();
                form.querySelectorAll('input, textarea').forEach(input => {
                    input.classList.remove('has-value');
                });
            }
            button.innerHTML = originalText;
            button.disabled = false;
        }, 1000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('visible');
            setTimeout(() => {
                notification.classList.remove('visible');
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }, 100);
    }

    preloadImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src) {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = src;
                document.head.appendChild(link);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new PortfolioWebsite());