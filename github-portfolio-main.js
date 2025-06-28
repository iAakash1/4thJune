// Enhanced Main JavaScript for Portfolio
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const loadingScreen = document.getElementById('loading-screen');

// Loading screen
window.addEventListener('load', () => {
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1000);
});

// Toggle nav menu on hamburger click
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}

// Remove menu on link click (mobile)
navLinks.forEach(n => n.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
}));

// Scroll active link highlight
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section) {
      const sectionTop = section.offsetTop - 50;
      const sectionHeight = section.offsetHeight;
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
    const email = formData.get('email') || contactForm.querySelector('input[type="email"]').value;
    const message = formData.get('message') || contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

// Smooth scrolling for anchor links
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

// Skills animation on scroll
const animateSkillBars = () => {
  const skillsSection = document.querySelector('#skills');
  const skillBars = document.querySelectorAll('.skills__bar');
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const width = bar.classList.contains('skills__html') ? '95%' :
                       bar.classList.contains('skills__css') ? '85%' :
                       bar.classList.contains('skills__js') ? '75%' :
                       bar.classList.contains('skills__react') ? '70%' :
                       bar.classList.contains('skills__ux') ? '85%' : '0%';
          
          bar.style.width = width;
        });
      }
    });
  }, observerOptions);
  
  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }
};

// Initialize ScrollReveal
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
  });

  sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
  sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
  sr.reveal('.home__social-icon', { interval: 200 });
  sr.reveal('.skills__data, .work__item, .contact__input', { interval: 200 });
}

// Initialize skill bars animation
animateSkillBars();

// Add typing effect to home title
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};

// Performance optimization: Lazy loading for images
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
}

// Add smooth hover effects
document.querySelectorAll('.work__item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateY(-10px)';
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateY(0)';
  });
});

// Add click-to-copy functionality for contact info
document.querySelectorAll('.contact__data span').forEach(span => {
  span.addEventListener('click', () => {
    navigator.clipboard.writeText(span.textContent).then(() => {
      // Show temporary feedback
      const originalText = span.textContent;
      span.textContent = 'Copied!';
      setTimeout(() => {
        span.textContent = originalText;
      }, 1000);
    });
  });
});

// Error handling for missing elements
const handleMissingElements = () => {
  const requiredElements = ['nav-menu', 'nav-toggle', 'contact-form'];
  requiredElements.forEach(id => {
    if (!document.getElementById(id)) {
      console.warn(`Element with id '${id}' not found`);
    }
  });
};

// Initialize error handling
handleMissingElements();
