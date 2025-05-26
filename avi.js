// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple contact form submission simulation
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  e.target.reset();
});
