var moment = require('moment');

BEM.decl('i-date', null, {
    beautify: function (date) {
        moment.lang('uk');
        return moment(date, "YYYYMMDD").fromNow();
    }
});
