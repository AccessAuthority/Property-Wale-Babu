// Statistics
function animateStat(element, target) {
    let count = 0;
    const increment = target / 100; // Adjust for speed
    const interval = setInterval(() => {
        count += increment;
        element.innerText = Math.floor(count);
        if (count >= target) {
            clearInterval(interval);
            element.innerText = target; // Ensure we set to target value
        }
    }, 20);
}

document.addEventListener('DOMContentLoaded', () => {
    animateStat(document.getElementById('clients'), 500);
    animateStat(document.getElementById('properties'), 300);
    animateStat(document.getElementById('experience'), 10);
}); 