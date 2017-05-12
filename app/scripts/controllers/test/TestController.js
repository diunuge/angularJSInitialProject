(function (module) {
    mifosX.controllers = _.extend(module, {
        TestController: function (scope, resourceFactory, location) {


            scope.fullname="Diunuge Buddhika";

        }
    });



    mifosX.ng.application.controller('TestController', ['$scope', 'ResourceFactory', '$location', mifosX.controllers.TestController]).run(function ($log) {
        $log.info("TestController initialized");
    });
}(mifosX.controllers || {}));