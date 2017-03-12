(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 3000;
        toastr.options.positionClass = 'toast-top-center';
    }

    var config = {
        appErrorPrefix: '[jordimart Error] ',
        appTitle: 'jordimart'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', 'routerHelperProvider',
        'exceptionHandlerProvider'
    ];
    /* @ngInject */
    function configure($logProvider, routerHelperProvider,
        exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({
            docTitle: config.appTitle + ': '
        });
    }

})();