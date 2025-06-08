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
themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load Theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.checked = true;
}

// Scroll Reveal
const revealElements = document.querySelectorAll('.section, .project-card, .achievement');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < windowHeight - 100) {
      el.classList.add('reveal');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Modal Functionality
const modals = document.querySelectorAll('.modal');
const projectCards = document.querySelectorAll('.project-card');
const closes = document.querySelectorAll('.close');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';
    } else {
      console.error(`Modal with ID ${modalId} not found`);
    }
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
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    contactForm.reset();
  });
} else {
  console.error('Contact form not found');
}

// Typing Animation
const typingText = document.querySelector('.typing-animation');
if (typingText) {
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
} else {
  console.error('Typing animation element not found');
}