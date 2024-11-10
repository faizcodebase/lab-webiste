let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let totalSlides = slides.length;

// Initialize the slideshow
showSlides();

// Function to show slides automatically
function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > totalSlides) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Function to change slides manually
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex > totalSlides) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = totalSlides; }
    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
}

// Contact Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    this.reset();
});

// Optional: Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 70; // Adjust this to the height of your sticky nav

        // Scroll to the target element with offset
        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => location.reload(), 500); // Refresh after scrolling
}


function toggleMobileNav() {
    document.querySelector('.nav-links').classList.toggle('show');
    document.querySelector('.nav-overlay').classList.toggle('show');
}


function toggleFormerStudents() {
    const formerStudents = document.getElementById('former-students');
    const button = document.querySelector('.button');

    if (formerStudents.style.display === 'none') {
        formerStudents.style.display = 'flex';
        button.textContent = 'Hide Former Members';
    } else {
        formerStudents.style.display = 'none';
        button.textContent = 'Show Former Members';
    }
}


