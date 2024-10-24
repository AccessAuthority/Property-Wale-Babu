// Sample data for charts
const propertyData = {
    labels: ['Residential', 'Commercial', 'Offices', 'Plots'],
    datasets: [{
        label: 'Listed Properties by Category',
        data: [60, 30, 40, 20],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
    }]
};

const ctx = document.getElementById('categoryChart').getContext('2d');
const categoryChart = new Chart(ctx, {
    type: 'bar',
    data: propertyData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Sample data for total properties chart
const totalPropertiesData = {
    labels: ['Total Properties', 'Total Blogs', 'Total Enquiries'],
    datasets: [{
        label: 'Total Overview',
        data: [150, 25, 75],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
    }]
};

const ctxOverview = document.getElementById('propertyChart').getContext('2d');
const propertyChart = new Chart(ctxOverview, {
    type: 'doughnut',
    data: totalPropertiesData,
    options: {
        responsive: true
    }
});
