
angular.module('travello')
.service('tripService', function($http) {
    this.get = function() {
        // This is where a http request would be made to get the API response
        return $http.get('http://localhost:3000/api/trips').success(function(result){
        	return result;
        });
    };
})
.service('shortestPathFinder', function() {
    this.find = function(deals, dealReferenceMap, sortingType, fromCity, toCity) {
        return $shortestPathFinderInjected.run(deals, dealReferenceMap, sortingType, fromCity, toCity);
    };
});