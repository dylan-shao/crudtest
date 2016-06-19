// require(['javascripts/ideaModules'],
//     function(ideaModules) {
//         'use strict';

//         angular.bootstrap(document, ['crudApp']);
//     }
// );
require.config({
    // packages: ["account"],
     
    paths: {
        angular: "/public/libs/angular/angular",
        uiRoute: "/public/libs/angular-ui-route/release/angular-ui-route"
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
