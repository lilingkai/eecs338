window.onload = function () {
    var ctx = document.getElementById("myChart").getContext('2d');
    var dataset = [];
    for (i = 1; i <= 10; i++) {
        var d = 0;
        if (sessionStorage.getItem("Avg"+i.toString()) === null) {
            continue;   
        }
        else {
            d = parseFloat(sessionStorage.getItem("Avg"+i.toString()));
        }
        dataset[i] = d;
    }
    
    console.log(dataset);
    
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
        datasets: [{
            label: "Current Grade Distribution",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            data: dataset,
        }]
    },

    // Configuration options go here
        options: {
            title: {
                display: true,
                text: 'TA1 Averages for each 10 Percentile'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        max: 100
                    }
                }]
            }
        }
    });
}