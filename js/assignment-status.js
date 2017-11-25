window.onload = function () {
    var ctx = document.getElementById("myChart").getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [{
            label: "Current Grade Distribution",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1, 0, 2, 2, 5, 8, 15, 30, 25, 12, 8],
        }]
    },

    // Configuration options go here
        options: {
            title: {
                display: true,
                text: 'Overall Grade Distribution'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }}
    });
    
    var ctx = document.getElementById("avgChart").getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
        datasets: [
            {
                label: "TA1",
                backgroundColor: 'blue',
                borderColor: 'blue',
                fill: false,
                data: [76, 80, 95, 66, 79, 85, 95, 50, 79, 90, 88],
            },
            
            {
                label: "TA2",
                backgroundColor: 'green',
                borderColor: 'green',
                fill: false,
                data: [71, 90, 66, 89, 77, 76, 85, 90, 55, 82, 78],
            },
            
            {
                label: "TA3",
                backgroundColor: 'red',
                borderColor: 'red',
                fill: false,
                data: [66, 99, 77, 72, 85, 68, 95, 80, 75, 52, 98],
            },
        
            {
                label: "TA4",
                backgroundColor: 'yellow',
                borderColor: 'yellow',
                fill: false,
                data: [95, 70, 82, 72, 95, 68, 75, 80, 75, 82, 88],
            },
                          
            {
                label: "TA5",
                backgroundColor: 'orange',
                borderColor: 'orange',
                fill: false,
                data: [51, 50, 42, 65, 55, 38, 45, 60, 75, 42, 58],
            }
        ]
    },

    // Configuration options go here
        options: {
            title: {
                display: true,
                text: 'TA Averages for each 10 Percentile'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

