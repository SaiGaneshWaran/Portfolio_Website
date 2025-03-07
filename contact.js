document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Validation
        let isValid = true;
        
        // Name validation
        if (name.trim().length < 2) {
            showError('name', 'Name must be at least 2 characters');
            isValid = false;
        } else {
            clearError('name');
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError('email');
        }
        
        // Phone validation
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            showError('phone', 'Please enter a valid 10-digit phone number');
            isValid = false;
        } else {
            clearError('phone');
        }
        
        // Message validation
        if (message.trim().length < 10) {
            showError('message', 'Message must be at least 10 characters');
            isValid = false;
        } else {
            clearError('message');
        }
        
        if (isValid) {
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                alert('Message sent successfully!');
                form.reset();
            } catch (error) {
                alert('Failed to send message. Please try again.');
            } finally {
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }
        }
    });
    
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = field.parentElement.querySelector('.error-message');
        errorDiv.textContent = message;
        field.parentElement.classList.add('error');
    }
    
    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorDiv = field.parentElement.querySelector('.error-message');
        errorDiv.textContent = '';
        field.parentElement.classList.remove('error');
    }
});