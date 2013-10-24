BEM.decl('i-date', null, {
    beautify: function (date) {
        moment.lang('uk');
        return moment(date, "YYYYMMDD").fromNow() + ' | ' + moment(date).startOf('hour').fromNow(); + ' | ' + moment(date).format('LLLL');
    }
});
