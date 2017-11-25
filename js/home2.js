(function() {
    $(function() {
        
        updateProgressBar();

    });

    function updateProgressBar() {
        var total = 100;
        var current = 0;
        if(typeof(Storage) !== "undefined") {
            if (sessionStorage.progress) {
                current = sessionStorage.progress;
                $('label[for="progress"] > span').text(current);
            } else {
                sessionStorage.progress = 0;
            }
        }

        var $progressBarBackground = $('#progress.progress');
        var $progressBar = $progressBarBackground.find('.determinate');
        $progressBar.css('width',  current + '%');
    }
}());