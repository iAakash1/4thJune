document.addEventListener('DOMContentLoaded', () => {
  // Typing Effect
  const typingText = document.getElementById('typing-text');
  const roles = ['Full-Stack Developer', 'AI/ML Engineer', 'Innovator'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  function type() {
    const currentRole = roles[roleIndex];
    if (!isDeleting && charIndex < currentRole.length) {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, deletingSpeed);
    } else if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, pauseTime);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, typingSpeed);
    }
  }
  type();

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      document.querySelector('.mobile-menu').classList.remove('active');
    });
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Scroll Reveal Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-content').forEach(element => {
    observer.observe(element);
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    console.log('Form submitted:', {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    });
    alert('Message sent! (This is a demo)');
    contactForm.reset();
  });
});