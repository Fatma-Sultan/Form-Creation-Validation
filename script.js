document.addEventListener('DOMContentLoaded', () => {
    // Form selection
    const form = document.getElementById('registration-form');

    document.addEventListener('DOMContentLoaded', () => {
        // Your code that manipulates the DOM goes here
        // For example, selecting elements and adding event listeners
    });
    
    // Feedback division selection
    const feedbackDiv = document.getElementById('form-feedback');

    // Form submission event listener
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting to the server

        // Input retrieval and trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation logic
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Displaying feedback
        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});