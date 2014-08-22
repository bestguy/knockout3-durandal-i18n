define(function (require, exports, module) {
    var router = require('plugins/router');
    var i18n = require('i18next');

    function Shell() {
        var self = this;

        self.router = router;

        self.activate = function () {
            router.map([
                { route: '', title: i18n.t('home.title'), moduleId: 'home/HomeView', nav: true }
            ]);

            return router.activate();
        }
    }

    module.exports = Shell;
});
