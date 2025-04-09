// script.js - Enhanced Interactivity

// Smooth scroll with offset for fixed header
const navLinks = document.querySelectorAll('.menu a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.innerText = "↑ Top";
backToTop.id = "backToTop";
backToTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #0b5ed7;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: none;
  z-index: 1000;
`;
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Animate sections on scroll
const sections = document.querySelectorAll('.section');
const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});
