// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Sticky Navbar
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

// Load Theme from Local Storage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Modal Functionality
const modals = document.querySelectorAll('.modal');
const projectCards = document.querySelectorAll('.project-card');
const closes = document.querySelectorAll('.close');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

closes.forEach(close => {
  close.addEventListener('click', () => {
    modals.forEach(modal => modal.style.display = 'none');
  });
});

window.addEventListener('click', (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Simulate form submission
  alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  
  // Clear form
  document.getElementById('contact-form').reset();
});

// Scroll Reveal (Simple Implementation)
const revealElements = document.querySelectorAll('.section');
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