BEM.decl('i-global', null, {
    timeAgo: function (date) {
        var that = this;

        var time = Math.round(Date.parse(date) / 1000),
            round = Math.round,
            date = Math.abs(time * 1000),
            seconds = round((new Date - date) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            weeks = round(days / 7),
            month = round(days / 30),
            years = round(days / 365),
            timeAgo;

        function getTime() {
            if (years > 1) {
                return years + ' ' + that.declension('рік', 'роки', 'років', years) + ' тому';
            };
            if (month > 1) {
                return month + ' ' + that.declension('місяць', 'місяці', 'місяців', month) + ' тому';
            };
            if (weeks > 1) {
                return weeks + ' ' + that.declension('тиждень', 'тижні', 'тижнів', weeks) + ' тому';
            };
            if (days > 1) {
                return days + ' ' + that.declension('день', 'дні', 'днів', days) + ' тому';
            };
            if (hours > 1) {
                return hours + ' ' + that.declension('година', 'години', 'годин', hours) + ' тому';
            };
            if (minutes > 1) {
                return minutes + ' ' + that.declension('хвилина', 'хвилини', 'хвилин', minutes) + ' тому';
            };
            if (seconds > 1) {
                return seconds + ' ' + that.declension('секунда', 'секунди', 'секунд', minutes) + ' тому';
            };
            if (seconds === 0) {
                return 'щойно';
            };
        };

        return getTime();
    },


    declension: function(a, b, c, s) {
        var words = [a, b, c];

        return s % 10 === 1 && s % 100 !== 11 ? words[0] : (s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? words[1] : words[2]);
    }

});
