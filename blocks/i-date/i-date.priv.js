BEM.decl('i-date', null, {
    beautify: function (date) {
        var moment = require('../i-moment/i-moment.priv.js');
        moment.lang('uk');
        return moment(date, "YYYYMMDD").fromNow() + ' | ' + moment(date).startOf('hour').fromNow(); + ' | ' + moment(date).format('LLLL');
    }
});
