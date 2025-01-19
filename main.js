//Toggling Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

//Toggling Active Link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// sr.reveal('.home-title', {} )
// sr.reveal('.button', {delay: 200} )
// sr.reveal('.home-img', {delay: 400} )
// sr.reveal('.home-social', {delay: 400,} )

// sr.reveal('.about-img', {} )
// sr.reveal('.about-subtitle', {delay: 200} )
// sr.reveal('.about-text', {delay: 400} )

// sr.reveal('.skills-subtitle', {delay: 100} )
// sr.reveal('.skills-text', {delay: 150} )
// sr.reveal('.skills-data', {interval: 200} )
// sr.reveal('.skills-img', {delay: 400} )

// sr.reveal('.work-img', {interval: 200} )

// sr.reveal('.contact-input', {interval: 200} )



// JavaScript to create typing effect
const typingElement = document.getElementById('typing-effect');
const roles = ['Freelancer', 'Web Developer', 'Web Designer', 'Frontend Developer'];
let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
  const currentRole = roles[currentRoleIndex];
  if (isDeleting) {
    currentCharIndex--;
  } else {
    currentCharIndex++;
  }

  typingElement.textContent = currentRole.substring(0, currentCharIndex);

  if (!isDeleting && currentCharIndex === currentRole.length) {
    // Pause before deleting
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && currentCharIndex === 0) {
    // Move to the next role
    isDeleting = false;
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
