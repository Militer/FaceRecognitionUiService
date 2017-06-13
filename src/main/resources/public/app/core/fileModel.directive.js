/**
 * Created by militer on 11.06.2017.
 */
angular
    .module('core')
    .directive('filesModel', function (){
        "use strict";
        return {
            controller: function ($parse, $element, $attrs, $scope) {
                var exp = $parse($attrs.filesModel);

                $element.on('change', function () {
                    exp.assign($scope, this.files);
                    $scope.$apply();
                });
            }
        }
    });