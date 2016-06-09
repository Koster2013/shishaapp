Router.configure({
    layoutTemplate: 'mainContent'
});

Router.map(function () {

    this.route('dashboard', {
        path: '/',
        onBeforeAction: function () {
            this.render('dashboard', {to: 'content'});
        }
    });

    this.route('/profile', function () {
        this.render('profile', {to: 'content'});
    });
});