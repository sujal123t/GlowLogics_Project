// --- Dark Mode Toggle ---
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference, if any, on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        themeToggleBtn.textContent = '🌙 Mode';
    }
}

themeToggleBtn.addEventListener('click', () => {
    // Get current theme state
    let theme = body.getAttribute('data-theme');
    
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggleBtn.textContent = '🌙 Mode';
        localStorage.setItem('theme', 'light'); // Save preference
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️ Mode';
        localStorage.setItem('theme', 'dark'); // Save preference
    }
});

// --- Scroll-Triggered Animations ---
// Using Intersection Observer API
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'active' class when element enters viewport
            entry.target.classList.add('active');
            // Optional: stop observing after it has revealed once
            // observer.unobserve(entry.target); 
        } else {
            // Optional: Remove class when scrolling back up
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.15 // Trigger when 15% of element is visible
});

// Attach observer to all elements with class 'reveal'
revealElements.forEach(element => {
    revealOnScroll.observe(element);
});


// --- Form Validation (Same as before) ---
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if(contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page refresh
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.style.color = '#ff4444'; // Red for error
            return;
        }
        
        if (!email.includes('@')) {
            formStatus.textContent = 'Please enter a valid email address.';
            formStatus.style.color = '#ff4444';
            return;
        }

        // Success Simulation
        formStatus.textContent = `Thank you, ${name}! Your message has been sent (simulated).`;
        formStatus.style.color = '#00c6ff'; // Accent color for success
        
        contactForm.reset();
    });
}