(function() {
    $(function() {
        if(typeof(Storage) !== "undefined" && oldURL !== "http://kevinwli.com/eecs338/views/previous.html") {
            if (sessionStorage.progress) {
                $('#number > span').text(Number(sessionStorage.progress) + 1);
            }
        }
        $('#submit').click(function(e) {
            if(typeof(Storage) !== "undefined") {
                if (sessionStorage.progress) {
                    sessionStorage.progress = Number(sessionStorage.progress) + 1;
                    if (sessionStorage.progress > 100) {
                        sessionStorage.progress = 0;
                    }
                } else {
                    sessionStorage.progress = 0;
                }
            }
        });
    });
}());
