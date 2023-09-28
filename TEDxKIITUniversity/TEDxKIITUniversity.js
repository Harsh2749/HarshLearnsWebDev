document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const eventDate = new Date(2023, 10, 15, 9, 0, 0);

function updateCountdown() {
    const now = new Date();
    const timeLeft = eventDate - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = 'Event has started!';
    }
}

setInterval(updateCountdown, 1000);

document.getElementById('contact-form').addEventListener('submit', function (e) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        e.preventDefault();
        alert('Name and Email fields are required.');
    }
});
