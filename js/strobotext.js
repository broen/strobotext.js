(function($) {

    $.fn.strobotext = function(options) {

        settings = $.extend({

            text    : ['strobo', 'text'],   // text array
            color   : 10,                   // color change interval
            word    : 300                   // word change interval

        }, options);
        count = 0;
        strobo = this;
        setInterval(colorChange, settings.color);
        setInterval(wordChange, settings.word);

        function colorChange() {
            randomColor = '#' + Math.floor(Math.random() * 16777216).toString(16);
            strobo.css({
                color: randomColor
            });
        }

        function wordChange() {
            if (count >= settings.text.length) {
                count = 0;
            }
            strobo.html(settings.text[count]);
            count++;
        }        
    }
}(jQuery));