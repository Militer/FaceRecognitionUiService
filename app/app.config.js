'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/car-creator');

            $stateProvider
                .state('carCreator', {
                    url: '/car-creator',
                    templateUrl: 'car-creator/car-creator.template.html',
                    controller: "CarCreatorController"
                })

                .state('view2', {
                    url: '/view2',
                    templateUrl: 'view2/view2.html'
                });
        }
    ]);
