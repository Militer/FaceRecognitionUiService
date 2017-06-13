'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/image');

            $stateProvider
                .state('carCreator', {
                    url: '/car-creator',
                    templateUrl: 'app/car-creator/car-creator.template.html',
                    controller: "CarCreatorController"
                })

                .state('imageUploader', {
                    url: '/image',
                    templateUrl: 'app/image/image.template.html',
                    controller: "ImageController"
                });
        }
    ]);
