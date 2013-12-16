requirejs.config({
    paths: {
        'durandal': '../lib/durandal/js',
        'jquery': '../lib/jquery/jquery-1.9.1',
        'jquery.bootstrap': '../lib/bootstrap/bootstrap.min',
        'knockout': '../lib/knockout/knockout-3.0.0',
        'knockout.punches': '../lib/knockout/knockout.punches',
        'plugins': '../lib/durandal/js/plugins',
        'text': '../lib/require/text',
        'transitions': '../lib/durandal/js/transitions'
    },
    shim: {
        'jquery.bootstrap': { deps: ['jquery'] }
    }
});

define(function (require) {

    // Knockout
    var ko = require('knockout');

    // Enables cool Angular-style functionality:
    require('knockout.punches');
    ko.punches.enableAll();

    // Example handlebars text filter to repeat a value `{{ value | repeat: n }}`
    ko.filters.repeat = function(value, n) {
        var text = value;
        for (var i = 1; i < n; i++) text = text + value;
        return text
    };

    // Durandal
    var app = require('durandal/app');
    var system = require('durandal/system');
    var viewLocator = require('durandal/viewLocator');

    system.debug(true);

    app.title = 'Angular Sucks ;-)';
    app.configurePlugins({
        observable: true, // eliminates need for `ko.observable(...)`
        router: true
    });

    app.start()
        .then(function () {
            viewLocator.useConvention();
            app.setRoot('Shell', 'entrance');
        });
});