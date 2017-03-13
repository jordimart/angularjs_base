(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['logger', '$translatePartialLoader'];

    function HomeController(logger, $translatePartialLoader) {
        var vm = this;
        vm.title = 'Home';

        $translatePartialLoader.addPart('home');

        activate();

        function activate() {
            logger.info('Activated Home View');

        }
    }
})();