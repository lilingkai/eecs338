window.onload = function () {
    var numgraphs = 10;
    
    for (i = 1; i <= numgraphs; i++) {
    
        var ctx = document.getElementById("myChart"+i.toString()).getContext('2d');
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
                    text: 'Criterion ' + i.toString()
                }
            }
        });
    }
}

