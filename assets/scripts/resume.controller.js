define(function(require) {

    /**
     * @param {object}  ResumeService
     */
    function ResumeController(ResumeService) {
        var vm = this;
        ResumeService.getResume().then(function getData(resume) {
            angular.extend(vm, resume);
        });
    }

    ResumeController.$inject = ['ResumeService'];

    return ResumeController;
});
