// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.skill-card, .timeline-item, .dashboard-container, .certificate-card, .training-item, .consultancy-item').forEach(el => {
    observer.observe(el);
});

// GIS Slideshow
let currentGisSlide = 0;
const gisSlides = document.querySelectorAll('.gis-slide');

function showGisSlides() {
    for (let i = 0; i < gisSlides.length; i++) {
        gisSlides[i].classList.remove('fade');
    }
    
    currentGisSlide++;
    if (currentGisSlide > gisSlides.length) {
        currentGisSlide = 1;
    }
    
    gisSlides[currentGisSlide-1].classList.add('fade');
    setTimeout(showGisSlides, 3000); // Change image every 3 seconds
}

showGisSlides(); // Start the slideshow

// Teamwork Slideshow
let currentTeamSlide = 0;
const teamSlides = document.querySelectorAll('.team-slide');

function showTeamSlides() {
    for (let i = 0; i < teamSlides.length; i++) {
        teamSlides[i].classList.remove('fade');
    }
    
    currentTeamSlide++;
    if (currentTeamSlide > teamSlides.length) {
        currentTeamSlide = 1;
    }
    
    teamSlides[currentTeamSlide-1].classList.add('fade');
    setTimeout(showTeamSlides, 3000); // Change image every 3 seconds
}

showTeamSlides(); // Start the slideshow

// Scroll to top button functionality
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});