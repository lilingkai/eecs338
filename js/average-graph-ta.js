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


    // if (!(isNaN(parseFloat(sessionStorage.getItem("Avg1"))))) {
    //   alert.innerHTML = "Avg1 is not NaN";
    // }

    //alert.innerHTML = parseFloat(sessionStorage.getItem("Avg1"));
    // var i = 2;
    // alert.innerHTML = (i-1).toString();
    var alert = document.getElementById("alert");
    if (sessionStorage.progress % 10 == 0 && !(isNaN(parseFloat(sessionStorage.getItem("Avg2"))))) {
      for (i=2; i<= 10; i++) {
        if (sessionStorage.getItem("Avg"+i.toString()) === null) {
            continue;
        }
        else {
          var current = parseFloat(sessionStorage.getItem("Avg"+i.toString()));
          var previous = parseFloat(sessionStorage.getItem("Avg"+(i-1).toString()));
          if (Math.abs((current-previous)/previous*100) >= 10 && current-previous > 0) {
            alert.innerHTML = "Alert: The average grade you have assigned to the\
             last 10 percentile of papers are 10% higher than the pervious 10 percentile!\
              Review these previous papers to see if your grading standards have\
               changed over time!";
          }
          else {
            alert.innerHTML = "Alert: The average grade you have assigned to the\
             last 10 percentile of papers are 10% lower than the pervious 10 percentile!\
              Review these previous papers to see if your grading standards have\
               changed over time!";
          }
        }
      }
    }


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
              xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Perentage of Papers Graded'
                  },
              }],
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        max: 50
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Average Grade of each Percentile'
                    },
                }]
            }
        }
    });
}
