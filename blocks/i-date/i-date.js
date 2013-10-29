BEM.decl('i-date', null, {
    beautify: function (date) {
        moment.lang('uk');
        return moment(date).startOf('minute').fromNow();
    }
});
