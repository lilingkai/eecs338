(function() {
    $(function() {

        var slider1 = document.getElementById("myRange1");
        var output1 = document.getElementById("demo1");
        output1.innerHTML = slider1.value;

        slider1.oninput = function() {
            output1.innerHTML = this.value;
        }

        var slider2 = document.getElementById("myRange2");
        var output2 = document.getElementById("demo2");

        output2.innerHTML = slider2.value;

        slider2.oninput = function() {
            output2.innerHTML = this.value;
        }

        var slider3 = document.getElementById("myRange3");
        var output3 = document.getElementById("demo3");

        output3.innerHTML = slider3.value;

        slider3.oninput = function() {
            output3.innerHTML = this.value;
        }

        var slider4 = document.getElementById("myRange4");
        var output4 = document.getElementById("demo4");

        output4.innerHTML = slider4.value;

        slider4.oninput = function() {
            output4.innerHTML = this.value;
        }

        var slider5 = document.getElementById("myRange5");
        var output5 = document.getElementById("demo5");

        output5.innerHTML = slider5.value;

        slider5.oninput = function() {
            output5.innerHTML = this.value;
        }


        var oldURL = document.referrer;
        //document.write("oldURL: " + oldURL + "<br>");
        var papernum = document.getElementById("papernum");
        if (oldURL == "http://kevinwli.com/eecs338/views/previous.html") {
            var storedData = JSON.parse(sessionStorage.getItem("pdata"));
            console.log(storedData);
            var index = localStorage.getItem("papernumber") - 1;
            $('#number > span').text(index);
            papernum.innerHTML = storedData[index][0];
            output1.innerHTML = storedData[index][1];
            output2.innerHTML = storedData[index][2];
            output3.innerHTML = storedData[index][3];
            output4.innerHTML = storedData[index][4];
            output5.innerHTML = storedData[index][5];
            slider1.value = output1.innerHTML;
            slider2.value = output2.innerHTML;
            slider3.value = output3.innerHTML;
            slider4.value = output4.innerHTML;
            slider5.value = output5.innerHTML;
        }

        // && document.referrer == "http://kevinwli.com/eecs338/views/home2.html"
        if (typeof(Storage) !== "undefined" && document.referrer == "http://kevinwli.com/eecs338/views/home2.html") {
            if (sessionStorage.progress) {
                $('#number > span').text(Number(sessionStorage.progress) + 1);
            }
        }
        $('#submit').click(function(e) {
            if(typeof(Storage) !== "undefined") {
                var paperdata = [];
                paperdata[0] = $('#number > span').text();
                paperdata[1] = slider1.value;
                paperdata[2] = slider2.value;
                paperdata[3] = slider3.value;
                paperdata[4] = slider4.value;
                paperdata[5] = slider5.value;
                console.log(paperdata);

                if (sessionStorage.progress) {
                    sessionStorage.progress = Number(sessionStorage.progress) + 1;
                    if (sessionStorage.progress > 100) {
                        sessionStorage.progress = 0;
                    }
                } else {
                    sessionStorage.progress = 0;
                }

                if (sessionStorage.pdata) {
                    var storedData = JSON.parse(sessionStorage.getItem("pdata"));
                    var index = Number($('#number > span').text()) - 1;
                    console.log(index);
                    storedData[index] = paperdata;
                    console.log(storedData);
                    sessionStorage.setItem("pdata", JSON.stringify(storedData));
                } else {
                    console.log("hello");
                    var pdata = [];
                    pdata[0] = paperdata;
                    sessionStorage.setItem("pdata", JSON.stringify(pdata));
                }

                // Store averages
                var avgcount = Math.ceil(sessionStorage.progress / 10.0);
                var avgname = "Avg" + avgcount.toString();
                var grade = parseInt(paperdata[1])+parseInt(paperdata[2])+parseInt(paperdata[3])+parseInt(paperdata[4])+parseInt(paperdata[5]);
                if (sessionStorage.getItem(avgname) === null) {
                    sessionStorage.setItem(avgname, grade);
                }
                else {
                    if (sessionStorage.progress % 10 == 0) {
                        sessionStorage.setItem(avgname, (parseFloat(sessionStorage.getItem(avgname))*9+parseInt(grade))/10);
                    }
                    else {
                        sessionStorage.setItem(avgname, (parseFloat(sessionStorage.getItem(avgname))*(sessionStorage.progress%10-1)+parseInt(grade))/(sessionStorage.progress%10));
                    }
                }
                console.log(sessionStorage.progress);
                console.log(sessionStorage.getItem("Avg1"));
                console.log(sessionStorage.getItem("Avg2"));

            }
        });
    });
}());
