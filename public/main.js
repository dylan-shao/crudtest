// require(['javascripts/ideaModules'],
//     function(ideaModules) {
//         'use strict';

//         angular.bootstrap(document, ['crudApp']);
//     }
// );
require.config({
    // packages: ["account"],
     
    paths: {
        angular: "libs/angular/angular",
        uiRoute: "libs/angular-ui-router/release/angular-ui-router"
    },
    shim: {
        angular: {
            exports: "angular"
        },
        uiRoute: {
            deps: ["angular"]
        }
    }
});
require([
        'angular',
        'namespace',
        'app'
    ],
    function(angular, namespace) {
        angular.element(document).ready(function() {
            angular.bootstrap(document, [namespace]);
        });
    });
