/**
 * Created by militer on 10.05.2017.
 */
angular
    .module('core')
    .factory('CarEngine', ['$resource',
        function ($resource) {
            return $resource('http://localhost:8081/carEngine/:id');
        }]
    );