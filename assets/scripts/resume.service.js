define(function(require) {

    var _ = require('underscore');

    /**
     * @param  {HTTP} $http request
     */
    function ResumeService($http) {

        var Resume = this;

        /**
         * @returns {Promise}
         */
        function getResume() {
            return $http.get("data/resume.json")
                .then(function(response) {
                    setSection(response.data);
                    return Resume;
                });
        }

        /**
         * @param {object} response
         *
         */
        function setSection(response) {
            _.mapObject(response, function(value, key) {
                value.header = key;
                setSectionInDepth(value, key);
            });
        }

        /**
         * @param {object} object
         * @param {string} key
         */
        function setSectionInDepth(object, key) {
            if (_.isString(object) || _.isArray(object)) {
                Resume[key] = object;
                return;
            }

            if (_.isObject(object)) {
                _.mapObject(object, function(value, key) {
                    setSectionInDepth(value, key);
                });
            }
        };

        /**
         * @param {object} data
         */
        function setError(data) {
            console.error('error in getting resume');
            console.info(data);
        };

        return {
            getResume: getResume
        };
    }

    ResumeService.$inject = ['$http'];
    return ResumeService;
});
