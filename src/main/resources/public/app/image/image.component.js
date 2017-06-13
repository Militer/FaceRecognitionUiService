/**
 * Created by militer on 10.06.2017.
 */
angular
    .module('imageUploader')
    .controller('ImageController', ['$scope', '$mdDialog', 'ImageService',
        function ($scope, $mdDialog, ImageService) {
            "use strict";
            $scope.newImage = {};
            $scope.submit = function () {
                ImageService.save($scope.newImage, function (result) {
                    if (result.status !== 'OK')
                        throw result.status;
                });
            };

            $scope.refreshImages = function () {
                var images = ImageService.query(function () {
                    $scope.images = images;
                    console.log("All images: " + JSON.stringify($scope.images));
                }, function (error) {
                    console.log("Error encountered while trying to get all images: " + JSON.stringify(error));
                });
            };
            $scope.refreshImages();

            $scope.status = 'Initial';
            $scope.uploadImageDialog = function (ev) {
                $mdDialog.show({
                    controller: "ImageUploadController",
                    templateUrl: 'app/image/imageUploader/image-uploader.template.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                    .then(function (answer) {
                        $scope.status = 'Image uploaded successfully: "' + answer + '"!';
                    }, function () {
                        $scope.status = 'Image not uploaded.';
                    });
            };
        }
    ]);