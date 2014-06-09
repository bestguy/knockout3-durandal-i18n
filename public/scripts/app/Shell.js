define(function (require, exports, module) {
    var router = require('plugins/router');

    function Shell() {
        var self = this;

        self.router = router;

        self.activate = function () {
            router.map([
                { route: '', title: 'Durandal View', moduleId: 'DurandalView', nav: true }
            ]);

            return router.activate();
        }
    }

    module.exports = Shell;
});
