// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close mobile menu if open
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typewriter effect
const text = "A Graduate Student in Artificial Intelligence";
const loopElement = document.querySelector(".typewriter-loop");

if (loopElement) {
  let i = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeWriter() {
    const currentText = text.substring(0, i);
    loopElement.textContent = currentText;
    
    if (!isDeleting && i < text.length) {
      i++;
      typingSpeed = 100;
    } else if (isDeleting && i > 0) {
      i--;
      typingSpeed = 50;
    } else if (i === text.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pause at end
    } else if (i === 0 && isDeleting) {
      isDeleting = false;
      typingSpeed = 500; // Pause at start
    }
    
    setTimeout(typeWriter, typingSpeed);
  }

  // Start typing after a short delay
  setTimeout(typeWriter, 1000);
}

// Scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
});

sr.reveal('.hero-image, .hero-text', { delay: 200 });
sr.reveal('.about-content, .about-info', { interval: 200 });
sr.reveal('.project-card', { interval: 200 });
sr.reveal('.resume-container > *', { interval: 200 });
sr.reveal('.contact-form', { delay: 200 });

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
}

// JavaScript for Tab Functionality

function openTab(tabName) {
  // Hide all tab contents
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  
  // Remove active class from all buttons
  const tabButtons = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  
  // Show the current tab and mark button as active
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}