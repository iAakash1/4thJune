// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
gsap.utils.toArray('.section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
});

// Animate project cards
gsap.utils.toArray('.project-card').forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100,
    duration: 1,
    delay: i * 0.2,
    scrollTrigger: {
      trigger: card,
      start: 'top 90%'
    }
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Sticky Navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.innerHTML = body.classList.contains('dark-mode')
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load Theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Particles.js for Hero Background
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#00b894' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#00b894', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: 'none', random: true }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
    modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
  }
});

// Vanilla Tilt for 3D Effects
VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
  max: 15,
  speed: 400,
  glare: true,
  'max-glare': 0.5
});

// Modal Functionality
const modals = document.querySelectorAll('.modal');
const projectCards = document.querySelectorAll('.project-card');
const closes = document.querySelectorAll('.close');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'flex';
  });
});

closes.forEach(close => {
  close.addEventListener('click', () => {
    modals.forEach(modal => (modal.style.display = 'none'));
  });
});

window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  document.getElementById('contact-form').reset();
});

// Typing Animation
const typingText = document.querySelector('.typing-animation');
const text = typingText.textContent;
typingText.textContent = '';
let i = 0;

function type() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
setTimeout(type, 500);