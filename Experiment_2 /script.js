// Form validation and submission
const form = document.getElementById('contactForm');
const statusDiv = document.getElementById('formStatus');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if(name === '' || email === '' || message === '') {
        statusDiv.innerHTML = 'Please fill all fields';
        statusDiv.style.color = 'red';
        return;
    }
    
    if(!email.includes('@') || !email.includes('.')) {
        statusDiv.innerHTML = 'Please enter a valid email';
        statusDiv.style.color = 'red';
        return;
    }
    
    statusDiv.innerHTML = 'Message sent successfully!';
    statusDiv.style.color = 'green';
    
    form.reset();
    
    setTimeout(() => {
        statusDiv.innerHTML = '';
    }, 3000);
});

// Smooth scroll for navigation
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if(targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
