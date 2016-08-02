// Configuration Options
require.config({
    baseUrl: 'assets/',
    paths: {
        'angular': 'lib/angular/angular.min',
        'underscore': 'lib/underscore/underscore-min'
    },

    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

// Angular Bootstrap
require(['scripts/app'], function(module) {

    angular.element(document).ready(function() {
        angular.bootstrap(document.body, [module.name]);
    });
});
