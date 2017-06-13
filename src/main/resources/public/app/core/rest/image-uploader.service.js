/**
 * Created by militer on 10.06.2017.
 */
angular
    .module('core')
    .factory('ImageService', ['$resource', 'IMAGE_UPLOAD_BASE_URL',
        function ($resource, IMAGE_UPLOAD_BASE_URL) {
            return $resource(IMAGE_UPLOAD_BASE_URL + '/:image', {}, {
                save: {
                    method: 'POST',
                    transformRequest: function(data) {
                        if (data === undefined)
                            return data;

                        var fd = new FormData();
                        angular.forEach(data, function(value, key) {
                            if (value instanceof FileList) {
                                if (value.length === 1) {
                                    fd.append(key, value[0]);
                                } else {
                                    angular.forEach(value, function(file, index) {
                                        fd.append(key + '_' + index, file);
                                    });
                                }
                            } else {
                                fd.append(key, value);
                            }
                        });
                        return fd;
                    },
                    headers:{
                        'Content-Type': undefined
                    }
                }
            });
        }]
    );