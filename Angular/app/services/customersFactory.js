(function() {
    var customersFactory = function($http) {

        var factory = {};

        factory.getCustomers = function() {
            console.log('customers');
            return $http.get('/customers');
        };

        factory.getCustomer = function(customerId) {
            console.log('customer test');
            return $http.get('/customers/' + customerId);
        };

        return factory;
    };

    customersFactory.$inject = ['$http'];

    angular.module('customersApp').factory('customersFactory',
        customersFactory);

}());