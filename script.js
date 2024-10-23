

//Header & Footer 
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

// Load header and footer on page load
document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
    loadFooter();
});

  

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


// AOS Initialization 
AOS.init();


// Hover Effect Why Choose us 


document.addEventListener("DOMContentLoaded", function() {
    const wcsElement = document.querySelector('.wcs');

    wcsElement.addEventListener('mousemove', function(e) {
        const { offsetWidth, offsetHeight } = this;
        const xPos = e.clientX - this.getBoundingClientRect().left; // Mouse X position relative to the element
        const yPos = e.clientY - this.getBoundingClientRect().top; // Mouse Y position relative to the element

        // Calculate new background position based on mouse position
        const xPercent = (xPos / offsetWidth) * 100; // Percentage of the width
        const yPercent = (yPos / offsetHeight) * 100; // Percentage of the height

        // Update background position
        this.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    });

    // Optional: Reset background position on mouse leave
    wcsElement.addEventListener('mouseleave', function() {
        this.style.backgroundPosition = 'center center'; // Reset to original position
    });
});


