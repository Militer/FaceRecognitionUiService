/**
 * Created by militer on 10.06.2017.
 */
angular
    .module('imageUploader')
    .controller('ImageController', ['$scope', '$mdDialog', '$mdToast', 'ImageService', 'FaceDetectorService',
        function ($scope, $mdDialog, $mdToast, ImageService, FaceDetectorService) {
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
                        if (answer === 'Success') {
                            $scope.refreshImages();
                            $mdToast.show(
                                $mdToast.simple()
                                    .textContent('Image successfully uploaded!')
                                    .hideDelay(1000)
                                    .position('top')
                            );
                            $scope.status = 'Image uploaded successfully: "' + answer + '"!';
                        }
                    }, function () {
                        $mdToast.show(
                            $mdToast.simple()
                                .textContent('Image failed to upload!')
                                .hideDelay(3000)
                                .position('top', 'right')
                        );
                        $scope.status = 'Image not uploaded.';
                    });
            };

            $scope.imageWithFaceDetection = {};
            $scope.detectFaces = function (imageId) {
                var imageWithFaceDetection = FaceDetectorService.get({imageId: imageId}, function (result) {
                    console.log("SUCCESS");
                    $scope.imageWithFaceDetection = imageWithFaceDetection;
                    console.log('We got the following faces: ' + JSON.stringify(result));
                }, function (error) {
                    console.log("FAILED");
                    console.log(JSON.stringify(error));
                    console.log("ERROR" + error);
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Failed to get the faces for the picture!' + JSON.stringify(error))
                            .hideDelay(3000)
                            .position('top', 'right')
                    );
                });
            }
        }
    ]);