/**
 * Created by militer on 14.06.2017.
 */
angular
    .module('core')
    .factory('FaceDetectorService', ['$resource', 'SERVER_BASE_URL',
        function ($resource, SERVER_BASE_URL) {
            return $resource(SERVER_BASE_URL + '/faceDetector/:imageId');
        }
    ]);
