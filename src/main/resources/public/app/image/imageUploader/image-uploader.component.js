/**
 * Created by militer on 13.06.2017.
 */
angular
    .module('imageUploader')
    .controller('ImageUploadController', ['$scope', '$mdDialog', 'ImageService',
        function ($scope, $mdDialog, ImageService) {
            "use strict";
            $scope.newImage = {};
            $scope.submit = function () {
                ImageService.save($scope.newImage, function () {
                    console.log("Upload succesfull!");
                    $mdDialog.hide("Success");
                }, function(error) {
                    console.log("Error while trying to save image: " + JSON.stringify(error));
                    $mdDialog.hide("Failed");
                });
            };

            $scope.cancel = function(){
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }
    ]);