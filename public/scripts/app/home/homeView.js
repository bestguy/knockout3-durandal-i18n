define(function (require, exports, module) {
    var ko = require('knockout');

    function HomeView() {
        var self = this;

        self.name = ko.observable();
    }

    module.exports = HomeView;
});