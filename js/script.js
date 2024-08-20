function createFallingCat() {
    const cat = document.createElement('div');
    cat.classList.add('cat');

    // Random horizontal position
    cat.style.left = Math.random() * window.innerWidth + 'px';

    // Random animation duration
    const duration = Math.random() * 3 + 2;
    cat.style.animationDuration = duration + 's';

    // Append the cat to the container
    document.getElementById('cat-container').appendChild(cat);

    // Add bounce effect when it hits the bottom
    setTimeout(() => {
        cat.style.animationName = 'bounce';
        cat.style.animationDuration = '0.5s';
        cat.style.animationTimingFunction = 'ease';
        cat.style.animationIterationCount = 'infinite';
    }, duration * 1000);

    // Remove the cat after bouncing for a bit
    setTimeout(() => {
        cat.remove();
    }, (duration + 1) * 1000);
}

// Generate falling cats every 300ms
setInterval(createFallingCat, 300);

// Countdown Timer
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('August 24, 2024 12:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Update every second
    setTimeout(updateCountdown, 1000);
}

// Initialize countdown
updateCountdown();
