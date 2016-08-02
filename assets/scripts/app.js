define(function(require) {

	var angular = require('angular');

    return angular.module('angularJsonResume', [])
    	.service('ResumeService', require('./resume.service'))
    	.controller('ResumeController', require('./resume.controller'))
    	.directive('hideSections', require('./hide-sections.directive'));
});
