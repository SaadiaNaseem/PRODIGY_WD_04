document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    if (name.length <= 3) {
        nameError.textContent = 'Name must be greater than 3 characters';
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email';
        valid = false;
    }

    if (message.length <= 2) {
        messageError.textContent = 'Message must be greater than 2 characters';
        valid = false;
    }

    if (valid) {
        alert('Message sent');
        document.getElementById('contactForm').reset();
    }
});