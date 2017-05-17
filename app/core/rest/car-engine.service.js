/**
 * Created by militer on 10.05.2017.
 */
angular
    .module('core')
    .factory('CarEngine', ['$resource', 'CAR_ENGINE_BASE_URL',
        function ($resource, CAR_ENGINE_BASE_URL) {
            return $resource(CAR_ENGINE_BASE_URL + '/:id');
        }]
    );