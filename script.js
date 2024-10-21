// Responsive Menu Toggle btn 
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

function toggleDropdown(event) {
    event.preventDefault(); // Prevent default link behavior
    const dropdown = document.getElementById('servicesDropdown');
    const isActive = dropdown.classList.contains('active');

    // Close all other dropdowns
    const allDropdowns = document.querySelectorAll('.dropdown-menu');
    allDropdowns.forEach(dd => dd.classList.remove('active'));

    // If it was not active, open it
    if (!isActive) {
        dropdown.classList.add('active');
    }
}


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
