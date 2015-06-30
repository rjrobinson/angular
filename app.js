var myApp = angular.module('myApp', [
    'ngRoute'
]);


myApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        });

});


// CONTROLLERS
myApp.controller('mainController', ['$scope', '$log',

    function($scope, $log) {
        // Controller
        $scope.people = [{
            name: "RJ Robinson",
            address: "980 Newton Street",
            city: "North Brunswick",
            state: "NJ",
            zip: "08902"
        }, {
            name: "Ryan Robinson",
            address: "9123 Gardeina Street",
            city: "West Palm Beach",
            state: "FL",
            zip: "33434"
        }, {
            name: "Sue Freeman",
            address: "759 Sycamore Drive",
            city: "Brick",
            state: "NJ",
            zip: "08723"
        }];

        $scope.formattedAddress = function(person) {
            return person.address + ", " + person.city + ", " + person.state + " " + person.zip;
        };

    }
]);


myApp.controller('secondController', ['$scope', '$log',

    function($scope, $log) {
        // Controller

    }
]);


myApp.directive("searchResult", function() {
    return {
        restrict: 'ACEM',

        templateUrl: 'directives/searchresult.html',

        replace: true,

        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },

        link: function(scope, elements, attrs) {

            console.log("Linking . . .");
            console.log(scope)
            console.log(elements);
            if (true) {
                elements.removeAttr('class')
            };
        }
    };
});


// @ means string
// = means object
// & means function
