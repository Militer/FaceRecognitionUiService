'use strict';

angular
    .module('carCreator', ['ngMaterial', "core"])
    .controller('CarCreatorController', ["$scope", "CarEngine",
        function ($scope, CarEngine) {
            console.log('CarCreatorController created.');
            $scope.enginesLoaded = false;
            var engines = CarEngine.query(function() {
                $scope.carEngines = engines;
                $scope.enginesLoaded = true;
            });
            $scope.selectedEngine = 0;

            $scope.selectEngine = function(engine){
                $scope.selectedEngine = engine.id;
                console.log('Selected engine: ' + $scope.selectedEngine);
            }
        }
    ]);