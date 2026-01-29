// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        const section = document.querySelector(this.getAttribute('href'));
        if(section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple contact form handler (demo only)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate successful submission
    document.getElementById('formMsg').textContent = 'Thank you for contacting HackClub!';
    this.reset();
});